// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAZfaUE7anWZiwM4PX5zBoH6ES0Jda-r0E",
  authDomain: "login-883dd.firebaseapp.com",
  projectId: "login-883dd",
  storageBucket: "login-883dd.firebasestorage.app",
  messagingSenderId: "272406342549",
  appId: "1:272406342549:web:cdfb0cf8f1e354a0d0649c"
};

const app = initializeApp(firebaseConfig);

// Detecta si es web
const isWeb = typeof window !== 'undefined' && typeof window.document !== 'undefined';

let auth;
if (isWeb) {
  // En web
  auth = getAuth(app);
} else {
  // Solo en dispositivos nativos
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

export { auth };
