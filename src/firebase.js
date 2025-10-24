import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-pO3KtC1GsIohj5rVNhf6hrGthAxLLNA",
  authDomain: "connecting-with-react.firebaseapp.com",
  projectId: "connecting-with-react",
  storageBucket: "connecting-with-react.firebasestorage.app",
  messagingSenderId: "370921873033",
  appId: "1:370921873033:web:092f82d328eadad9c97058",
  measurementId: "G-ZXRH35L185"
};


export const app = initializeApp(firebaseConfig);