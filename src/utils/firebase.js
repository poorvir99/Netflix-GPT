// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAIB6D84bYR7tkNTkPDfz1COIG2xQvVRuc",
  authDomain: "netflixgpt-a9530.firebaseapp.com",
  projectId: "netflixgpt-a9530",
  storageBucket: "netflixgpt-a9530.appspot.com",
  messagingSenderId: "960648679851",
  appId: "1:960648679851:web:90a8ff1e4ca531907242ee",
  measurementId: "G-9ZBFC1775E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();