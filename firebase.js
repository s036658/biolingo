// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCUj513y62XdTK7D7Y5Nhq80meR1_i-e04",
  authDomain: "bio-quiz-de819.firebaseapp.com",
  projectId: "bio-quiz-de819",
  storageBucket: "bio-quiz-de819.firebasestorage.app",
  messagingSenderId: "200234719718",
  appId: "1:200234719718:web:1151802717f37adb42de27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
