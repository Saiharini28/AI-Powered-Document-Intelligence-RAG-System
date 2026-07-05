import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

 const firebaseConfig = {
    apiKey: "AIzaSyBRE2wqtcqcUa0VFZ9M9eH7STEzx_ALRcY",
    authDomain: "askmydocsai-26949.firebaseapp.com",
    projectId: "askmydocsai-26949",
    storageBucket: "askmydocsai-26949.firebasestorage.app",
    messagingSenderId: "984487918552",
    appId: "1:984487918552:web:c922d0d2edfa7d397950ad",
    measurementId: "G-4TD81L66RY"
  };

const app =
    initializeApp(firebaseConfig);

export { app };

