import { useEffect, useMemo, useRef, useState } from "react";
import { io, type Socket } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SIGNALING_URL = process.env.NEXT_PUBLIC_SIGNALING_URL || "http://localhost:5000";
const RTC_CONFIG: RTCConfiguration = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

const createRoomCode = () => `room-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

const getMediaErrorMessage = (error: unknown) => {
  const unknownError = error as { name?: string; message?: string } | undefined;
  const name = unknownError?.name;
  const message = unknownError?.message;

  if (name === "NotAllowedError" || name === "PermissionDeniedError") {
    return "Camera/mic permission denied. Allow access in browser site settings, then reload.";
  }
  if (name === "NotFoundError" || name === "DevicesNotFoundError") {
    return "No camera/mic device found. Connect a device and try again.";
  }
  if (name === "NotReadableError" || name === "TrackStartError") {
    return "Camera/mic is being used by another app. Close that app and retry.";
  }
  if (name === "OverconstrainedError" || name === "ConstraintNotSatisfiedError") {
    return "Requested media settings are not supported on this device.";
  }
  if (name === "SecurityError") {
    return "Camera/mic requires a secure origin (localhost or HTTPS).";
  }

  if (typeof message === "string" && message.trim().length > 0) {
    return `Could not access camera/mic: ${message}`;
  }

  return "Could not access camera/mic. Check browser permissions.";
};

const WebRtcPage = () => {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const peerRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const remoteStreamRef = useRef<MediaStream | null>(null);
  const targetSocketIdRef = useRef<string | null>(null);

  const [roomId, setRoomId] = useState("");
  const [displayName, setDisplayName] = useState("Student");
  const [joined, setJoined] = useState(false);
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [status, setStatus] = useState("Ready to join a room.");
  const [mediaReady, setMediaReady] = useState(false);

  const canJoin = useMemo(() => roomId.trim().length > 0, [roomId]);

  const ensureLocalMedia = async () => {
    if (localStreamRef.current) return localStreamRef.current;

    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("This browser does not support camera/mic access.");
    }

    let stream: MediaStream | null = null;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    } catch {
      try {
        // Fallback for devices that fail with combined constraints.
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      } catch {
        stream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      }
    }

    if (!stream) {
      throw new Error("Unable to initialize local media stream.");
    }

    localStreamRef.current = stream;
    if (localVideoRef.current) localVideoRef.current.srcObject = stream;
    setMediaReady(true);
    return stream;
  };

  const createPeer = async (targetSocketId: string) => {
    targetSocketIdRef.current = targetSocketId;
    let local: MediaStream | null = localStreamRef.current;
    if (!local) {
      try {
        local = await ensureLocalMedia();
      } catch (error) {
        console.error(error);
        setStatus("Joined without camera/mic. You can enable media later.");
      }
    }

    if (peerRef.current) {
      peerRef.current.close();
      peerRef.current = null;
    }

    const peer = new RTCPeerConnection(RTC_CONFIG);
    remoteStreamRef.current = new MediaStream();
    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = remoteStreamRef.current;

    if (local) {
      local.getTracks().forEach((track) => peer.addTrack(track, local));
    }

    peer.ontrack = (event) => {
      event.streams[0].getTracks().forEach((track) => {
        remoteStreamRef.current?.addTrack(track);
      });
    };

    peer.onicecandidate = (event) => {
      if (event.candidate && socketRef.current && targetSocketIdRef.current) {
        socketRef.current.emit("webrtc:ice-candidate", {
          target: targetSocketIdRef.current,
          candidate: event.candidate,
        });
      }
    };

    peer.onconnectionstatechange = () => {
      setStatus(`Connection: ${peer.connectionState}`);
    };

    peerRef.current = peer;
    return peer;
  };

  const handleJoin = async () => {
    if (!canJoin || joined) return;

    try {
      socketRef.current?.disconnect();
      try {
        await ensureLocalMedia();
      } catch (error) {
        console.error(error);
        setStatus(`${getMediaErrorMessage(error)} Joining without camera/mic.`);
      }
      const socket = io(SIGNALING_URL, { transports: ["websocket"] });
      socketRef.current = socket;

      socket.on("connect", () => {
        socket.emit("webrtc:join-room", { roomId: roomId.trim(), displayName });
        setJoined(true);
        setStatus("Joined room. Waiting for peer...");
      });

      socket.on("webrtc:room-users", async (users: string[]) => {
        if (users.length === 0) return;
        const target = users[0];
        const peer = await createPeer(target);
        const offer = await peer.createOffer();
        await peer.setLocalDescription(offer);
        socket.emit("webrtc:offer", { target, sdp: offer });
        setStatus("Calling peer...");
      });

      socket.on("webrtc:user-joined", async ({ socketId }: { socketId: string }) => {
        if (!peerRef.current) {
          setStatus("Peer joined.");
        }
        targetSocketIdRef.current = socketId;
      });

      socket.on("webrtc:offer", async ({ from, sdp }) => {
        const peer = await createPeer(from);
        await peer.setRemoteDescription(new RTCSessionDescription(sdp));
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);
        socket.emit("webrtc:answer", { target: from, sdp: answer });
        setStatus("Received call. Connected.");
      });

      socket.on("webrtc:answer", async ({ sdp }) => {
        if (!peerRef.current) return;
        await peerRef.current.setRemoteDescription(new RTCSessionDescription(sdp));
        setStatus("Peer connected.");
      });

      socket.on("webrtc:ice-candidate", async ({ candidate }) => {
        if (!peerRef.current || !candidate) return;
        await peerRef.current.addIceCandidate(new RTCIceCandidate(candidate));
      });

      socket.on("webrtc:user-left", () => {
        setStatus("Peer left the room.");
        if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
        if (remoteStreamRef.current) {
          remoteStreamRef.current.getTracks().forEach((track) => track.stop());
        }
        remoteStreamRef.current = null;
        peerRef.current?.close();
        peerRef.current = null;
      });
    } catch (error) {
      console.error(error);
      setStatus(getMediaErrorMessage(error));
    }
  };

  const handleRequestPermissions = async () => {
    try {
      await ensureLocalMedia();
      setStatus("Camera/mic access granted.");
    } catch (error) {
      console.error(error);
      setStatus(getMediaErrorMessage(error));
    }
  };

  const handleCreateRoom = () => {
    if (joined) return;
    const nextRoomId = createRoomCode();
    setRoomId(nextRoomId);
    setStatus(`Room created: ${nextRoomId}. Click Join Room to start.`);
  };

  const handleCopyRoom = async () => {
    if (!roomId.trim()) return;
    try {
      await navigator.clipboard.writeText(roomId.trim());
      setStatus("Room code copied.");
    } catch (error) {
      console.error(error);
      setStatus("Could not copy room code.");
    }
  };

  const handleLeaveRoom = () => {
    socketRef.current?.disconnect();
    socketRef.current = null;
    peerRef.current?.close();
    peerRef.current = null;
    targetSocketIdRef.current = null;
    if (remoteStreamRef.current) {
      remoteStreamRef.current.getTracks().forEach((track) => track.stop());
      remoteStreamRef.current = null;
    }
    if (remoteVideoRef.current) remoteVideoRef.current.srcObject = null;
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }
    if (localVideoRef.current) localVideoRef.current.srcObject = null;
    setJoined(false);
    setMuted(false);
    setCameraOff(false);
    setSharing(false);
    setStatus("Left room.");
    setMediaReady(false);
  };

  const toggleMute = () => {
    const stream = localStreamRef.current;
    if (!stream) return;
    const next = !muted;
    stream.getAudioTracks().forEach((track) => {
      track.enabled = !next;
    });
    setMuted(next);
  };

  const toggleCamera = () => {
    const stream = localStreamRef.current;
    if (!stream) return;
    const next = !cameraOff;
    stream.getVideoTracks().forEach((track) => {
      track.enabled = !next;
    });
    setCameraOff(next);
  };

  const toggleShareScreen = async () => {
    const peer = peerRef.current;
    if (!peer) {
      setStatus("Connect to a peer first, then share your screen.");
      return;
    }

    if (!navigator.mediaDevices?.getDisplayMedia) {
      setStatus("Screen sharing is not supported in this browser.");
      return;
    }

    try {
      if (!sharing) {
        const displayStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const displayTrack = displayStream.getVideoTracks()[0];
        const sender = peer.getSenders().find((s) => s.track?.kind === "video");
        await sender?.replaceTrack(displayTrack);
        if (localVideoRef.current) localVideoRef.current.srcObject = displayStream;

        displayTrack.onended = async () => {
          const local = localStreamRef.current;
          const camTrack = local?.getVideoTracks()[0];
          if (camTrack) {
            await sender?.replaceTrack(camTrack);
            if (localVideoRef.current) localVideoRef.current.srcObject = local;
          }
          setSharing(false);
          setStatus("Screen share stopped.");
        };

        setSharing(true);
        setStatus("Screen sharing started.");
        return;
      }

      const local = localStreamRef.current;
      const camTrack = local?.getVideoTracks()[0];
      const sender = peer.getSenders().find((s) => s.track?.kind === "video");
      if (camTrack) {
        await sender?.replaceTrack(camTrack);
        if (localVideoRef.current) localVideoRef.current.srcObject = local;
      }
      setSharing(false);
      setStatus("Screen share stopped.");
    } catch (error) {
      console.error(error);
      setStatus("Screen share failed or was canceled.");
    }
  };

  useEffect(() => {
    return () => {
      socketRef.current?.disconnect();
      peerRef.current?.close();
      localStreamRef.current?.getTracks().forEach((track) => track.stop());
      remoteStreamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-purple-950 p-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <Card className="bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Student WebRTC Room</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-5 gap-3">
            <Input
              placeholder="Room ID (e.g. math-101)"
              className="bg-white/10 border-white/20 text-white"
              value={roomId}
              onChange={(event) => setRoomId(event.target.value)}
              disabled={joined}
            />
            <Input
              placeholder="Your name"
              className="bg-white/10 border-white/20 text-white"
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              disabled={joined}
            />
            <Button
              type="button"
              onClick={handleCreateRoom}
              disabled={joined}
              variant="secondary"
            >
              Create Room
            </Button>
            <Button type="button" onClick={handleRequestPermissions} disabled={joined} variant="secondary">
              Enable Camera/Mic
            </Button>
            <Button
              onClick={handleJoin}
              disabled={!canJoin || joined}
              className="bg-gradient-to-r from-green-500 to-teal-500"
            >
              {joined ? "Joined" : "Join Room"}
            </Button>
            <Button type="button" onClick={handleCopyRoom} disabled={!roomId.trim()} variant="secondary">
              Copy Code
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-base">Local</CardTitle>
            </CardHeader>
            <CardContent>
              <video ref={localVideoRef} autoPlay muted playsInline className="w-full rounded-lg bg-black" />
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-base">Remote</CardTitle>
            </CardHeader>
            <CardContent>
              <video ref={remoteVideoRef} autoPlay playsInline className="w-full rounded-lg bg-black" />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 border-white/20">
          <CardContent className="pt-6 flex flex-wrap gap-2">
            <Button variant="secondary" onClick={toggleMute} disabled={!joined || !mediaReady}>
              {muted ? "Unmute" : "Mute"}
            </Button>
            <Button variant="secondary" onClick={toggleCamera} disabled={!joined || !mediaReady}>
              {cameraOff ? "Camera On" : "Camera Off"}
            </Button>
            <Button variant="secondary" onClick={toggleShareScreen} disabled={!joined || !mediaReady}>
              {sharing ? "Stop Share" : "Share Screen"}
            </Button>
            <Button variant="secondary" onClick={handleRequestPermissions} disabled={!joined || mediaReady}>
              {mediaReady ? "Media Ready" : "Enable Media"}
            </Button>
            <Button variant="destructive" onClick={handleLeaveRoom} disabled={!joined}>
              Leave Room
            </Button>
            <div className="text-white/80 text-sm self-center">{status}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WebRtcPage;
