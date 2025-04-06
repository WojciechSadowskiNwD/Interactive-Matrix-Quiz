// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAsKtbnECF39IAeEejjAqMAF8S36RCv-08",
    authDomain: "scoreboard-mq.firebaseapp.com",
    projectId: "scoreboard-mq",
    storageBucket: "scoreboard-mq.firebasestorage.app",
    messagingSenderId: "505205175334",
    appId: "1:505205175334:web:fcd711ffb6a76c3256a2e7",
    measurementId: "G-MBTKG6NS6X"
  };
  
// Initialization Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {db};