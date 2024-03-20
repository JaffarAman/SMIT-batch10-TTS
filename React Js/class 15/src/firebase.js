import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDJQ5dlWe_aKhdd2Jro2FHtlaYmppwGRy8",
    authDomain: "smitattendanceapp.firebaseapp.com",
    projectId: "smitattendanceapp",
    storageBucket: "smitattendanceapp.appspot.com",
    messagingSenderId: "44774699608",
    appId: "1:44774699608:web:72ae228f5dd987402a902d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
    app, auth, db, storage
}
