
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAYIaoTZ9ZDDMbo1_rAdZmpY2M08LKbF5k",
  authDomain: "tickets-ed36d.firebaseapp.com",
  projectId: "tickets-ed36d",
  storageBucket: "tickets-ed36d.appspot.com", 
  messagingSenderId: "402807588158",
  appId: "1:402807588158:web:8381632ff4cd7eacd3586f",
  measurementId: "G-BHPP2VCQ3Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };  
