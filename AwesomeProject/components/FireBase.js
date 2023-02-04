// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



const firebaseConfig = {
    apiKey: "AIzaSyAk33Q4HRCeKQVrb2jYvwBdJ1vs6KoJsFk",
    authDomain: "foodrn-4ef62.firebaseapp.com",
    projectId: "foodrn-4ef62",
    storageBucket: "foodrn-4ef62.appspot.com",
    messagingSenderId: "593948521979",
    appId: "1:593948521979:web:b35651d581fa994a80c75e",
    measurementId: "G-TJDVVWJZC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig,  { persistence: getReactNativePersistence(AsyncStorage) });
export const authentication = getAuth(app);