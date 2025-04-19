// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB0T4faD1HQWofkNUW0gE4cejHbJX6_xA8",
  authDomain: "loginlogger99.firebaseapp.com",
  projectId: "loginlogger99",
  storageBucket: "loginlogger99.firebasestorage.app",
  messagingSenderId: "609527553718",
  appId: "1:609527553718:web:1d0f524383b414db821017",
  measurementId: "G-EH9NLP6YE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "✅ Login successful!";
      // Redirect to dashboard page (if needed)
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
};