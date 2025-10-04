import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// jawny typ konfiguracji Firebase
const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
} = {
  apiKey: "AIzaSyAsKtbnECF39IAeEejjAqMAF8S36RCv-08",
  authDomain: "scoreboard-mq.firebaseapp.com",
  projectId: "scoreboard-mq",
  storageBucket: "scoreboard-mq.firebasestorage.app",
  messagingSenderId: "505205175334",
  appId: "1:505205175334:web:fcd711ffb6a76c3256a2e7",
  measurementId: "G-MBTKG6NS6X",
};

// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);

// jawne typowanie instancji
const db: Firestore = getFirestore(app);

// Analytics działa tylko w przeglądarce (window)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { db, analytics };

// Prev version .js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//     apiKey: "AIzaSyAsKtbnECF39IAeEejjAqMAF8S36RCv-08",
//     authDomain: "scoreboard-mq.firebaseapp.com",
//     projectId: "scoreboard-mq",
//     storageBucket: "scoreboard-mq.firebasestorage.app",
//     messagingSenderId: "505205175334",
//     appId: "1:505205175334:web:fcd711ffb6a76c3256a2e7",
//     measurementId: "G-MBTKG6NS6X"
//   };
  
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);

// export {db};