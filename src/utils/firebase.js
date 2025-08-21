// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCygVpCaT18NA9gArXoX0l9YdAO95Ovvro",
  authDomain: "netflixgpt-bccfc.firebaseapp.com",
  projectId: "netflixgpt-bccfc",
  storageBucket: "netflixgpt-bccfc.appspot.com", // fixed
  messagingSenderId: "843860805743",
  appId: "1:843860805743:web:9c9950185723cddaaaa59a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth for login/signup
export const auth = getAuth(app);
