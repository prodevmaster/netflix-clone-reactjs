import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzvGEza63wOWyyuAtxgJyIAWX7vCUJXcE",
  authDomain: "netflix-clone-c7730.firebaseapp.com",
  projectId: "netflix-clone-c7730",
  storageBucket: "netflix-clone-c7730.appspot.com",
  messagingSenderId: "880313348827",
  appId: "1:880313348827:web:817b4f421d939e782812fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
