import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { auth } from "/firebase-auth.js";

window.logout = function () {
  signOut(auth).then(() => {
    localStorage.removeItem("hasSubscribedToBexpert");
    sessionStorage.clear();
    window.location.href = "/login.html";
  });
};
