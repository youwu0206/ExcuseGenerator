import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAQffenUWVYBR_ofz7N4nVe7aQUHXow3Fk",
  authDomain: "excuse-generator-489a7.firebaseapp.com",
  projectId: "excuse-generator-489a7",
  storageBucket: "excuse-generator-489a7.firebasestorage.app",
  messagingSenderId: "574955074295",
  appId: "1:574955074295:web:0208742f1d3d0b6bf5d9f2",
  measurementId: "G-H7BX4MRJWF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);
export { db };