import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const loginForm = document.getElementById("login-form");
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "/protected/dashboard.html";
    })
    .catch((error) => alert("Login failed: " + error.message));
});

document.getElementById("signup-toggle")?.addEventListener("click", () => {
  document.getElementById("signup-form").style.display = "block";
});
document.getElementById("signup-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Signup successful! Please login."))
    .catch((error) => alert("Signup failed: " + error.message));
});

window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("Logged out.");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Logout error", error);
      alert("Logout failed!");
    });
};

if (
  window.location.pathname !== "/" &&
  window.location.pathname !== "/index.html"
) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "/";
    } else {
      if (
        ["/protected/course1.html", "/protected/project1.html", "/protected/dashboard.html"].includes(window.location.pathname)
      ) {
        const hasSubscribed = localStorage.getItem("subscribedToBexpertAI");
        if (!hasSubscribed) {
          window.location.href = "/subscribe.html";
        }
      }
    }
  });
}
