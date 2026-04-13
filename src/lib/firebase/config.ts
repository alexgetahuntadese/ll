import { getApp, getApps, initializeApp } from "firebase/app";

const defaultFirebaseConfig = {
  apiKey: "AIzaSyCp980HeFMC_r3WVjKEZrW5mZoOfnh255k",
  authDomain: "simple-road1.firebaseapp.com",
  projectId: "simple-road1",
  storageBucket: "simple-road1.firebasestorage.app",
  messagingSenderId: "898510107684",
  appId: "1:898510107684:web:37d01aa01e5956a7bc54b1",
  measurementId: "G-136S0NJWNF",
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim() || defaultFirebaseConfig.apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim() || defaultFirebaseConfig.authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim() || defaultFirebaseConfig.projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?.trim() || defaultFirebaseConfig.storageBucket,
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?.trim() || defaultFirebaseConfig.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.trim() || defaultFirebaseConfig.appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?.trim() || defaultFirebaseConfig.measurementId,
};

const requiredKeys = [
  firebaseConfig.apiKey,
  firebaseConfig.authDomain,
  firebaseConfig.projectId,
  firebaseConfig.storageBucket,
  firebaseConfig.messagingSenderId,
  firebaseConfig.appId,
];

export const firebaseReady = requiredKeys.every(Boolean);

export const firebaseConfigError = firebaseReady
  ? ""
  : "Missing Firebase configuration.";

export const firebaseApp = firebaseReady
  ? getApps().length
    ? getApp()
    : initializeApp(firebaseConfig)
  : null;

export const firebaseProjectInfo = {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
};
