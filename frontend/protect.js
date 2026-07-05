import { app } from "./firebase.js";

import {
    getAuth,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {

    if (!user) {

        window.location.href =
            "login.html";

    } else {

        document.getElementById(
            "userEmail"
        ).innerText =
            user.email;
    }
});