import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Users, 
  Clock, 
  Flame,
  CheckCircle, 
  XCircle,
  User
} from 'lucide-react';
import JoinRequestCard from './JoinRequestCard';

interface JoinRequest {
  id: string;
  name: string;
  grade: string;
  school: string;
  requestTime: string;
}

interface JoinRequestListProps {
  requests: JoinRequest[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

const JoinRequestList: React.FC<JoinRequestListProps> = ({ requests, onApprove, onReject }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="mr-2 h-5 w-5" /> 
          Join Requests
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {requests.length === 0 ? (
          <div className="text-center text-gray-500">No pending join requests.</div>
        ) : (
          <div className="space-y-3">
            {requests.map((request) => (
              <JoinRequestCard
                key={request.id}
                request={request}
                onApprove={() => onApprove(request.id)}
                onReject={() => onReject(request.id)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JoinRequestList;
