import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHRj1zqeRnVTOtW2jHt_Df9a0SfjgBRrc",
  authDomain: "bsbm-6ddd2.firebaseapp.com",
  projectId: "bsbm-6ddd2",
  storageBucket: "bsbm-6ddd2.appspot.com",
  messagingSenderId: "1028959856307",
  appId: "1:1028959856307:web:184d5ac4eb0b0342b3f2c6",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}
