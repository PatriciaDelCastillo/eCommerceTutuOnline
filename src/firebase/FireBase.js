import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARJS_PElr7uRXVf8Imd9cs_XBtXs88d94",
  authDomain: "tutu-online.firebaseapp.com",
  projectId: "tutu-online",
  storageBucket: "tutu-online.appspot.com",
  messagingSenderId: "671338897208",
  appId: "1:671338897208:web:b0f94323c8a70da5dfabcd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
