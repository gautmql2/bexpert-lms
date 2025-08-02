
// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBCoL3LFhEuSFQPWJphgCMERJ7skl_YPjs",
  authDomain: "bexpert-lms.firebaseapp.com",
  projectId: "bexpert-lms",
  storageBucket: "bexpert-lms.firebasestorage.app",
  messagingSenderId: "341450782292",
  appId: "1:341450782292:web:4ee4725d0c6b23496f9fc1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
