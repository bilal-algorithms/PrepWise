import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoC_zpbkreuyc-6eGmHiBxEKOgC-q9QNw",
    authDomain: "prepwise-1d25f.firebaseapp.com",
    projectId: "prepwise-1d25f",
    storageBucket: "prepwise-1d25f.firebasestorage.app",
    messagingSenderId: "17318602926",
    appId: "1:17318602926:web:46e11ce437692ad039653f",
    measurementId: "G-EPD7XZP48J"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore();


