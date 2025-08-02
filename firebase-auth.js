
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "/";
  } else {
    const subscribed = localStorage.getItem("hasSubscribedToBexpert") === "true";
    const confirmed = sessionStorage.getItem("hasSubscribedToBexpert") === "true";

    const isOnSubscribePage = window.location.pathname.includes("subscribe.html");
    if (!subscribed && !confirmed && !isOnSubscribePage) {
      window.location.href = "/subscribe.html";
    }
  }
});

export { auth };
