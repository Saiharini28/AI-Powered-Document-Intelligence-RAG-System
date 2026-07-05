import { app } from "./firebase.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const auth = getAuth(app);
window.auth = auth;

window.auth = auth;
window.createUserWithEmailAndPassword =
    createUserWithEmailAndPassword;
window.signInWithEmailAndPassword =
    signInWithEmailAndPassword;
window.signOut = signOut;

console.log("Firebase Auth Ready");

window.logout = async function(){

    await window.signOut(
        window.auth
    );

    alert("Logged Out");

    window.location.href =
        "login.html";
};