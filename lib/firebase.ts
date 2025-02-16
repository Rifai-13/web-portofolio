import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBDqPsnrvcseqEMTc3S_T5UR8GpriHdj04",
  authDomain: "web-portofolio-51a05.firebaseapp.com",
  projectId: "web-portofolio-51a05",
  storageBucket: "web-portofolio-51a05.firebasestorage.app",
  messagingSenderId: "130735669327",
  appId: "1:130735669327:web:55fbcea7a79dc7ea76ea3a",
  measurementId: "G-FR7X46PCE6",
};

// Inisialisasi Firebase App
const app = initializeApp(firebaseConfig);

// Pastikan Analytics hanya dijalankan di client-side
let analytics: Analytics | null = null;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
