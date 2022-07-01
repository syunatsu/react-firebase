import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyaNmjjID0_9rn6cp6uO6ojpduZo9r5-c",
  authDomain: "fir-react-d72f9.firebaseapp.com",
  projectId: "fir-react-d72f9",
  storageBucket: "fir-react-d72f9.appspot.com",
  messagingSenderId: "357637290838",
  appId: "1:357637290838:web:0f28ad95ae06b202c7f4f7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;