import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAWdEDrKX5N65WFXHpvNfhCgwxEyzuge6A",
  authDomain: "multimarket-react.firebaseapp.com",
  projectId: "multimarket-react",
  storageBucket: "multimarket-react.appspot.com",
  messagingSenderId: "1022663120978",
  appId: "1:1022663120978:web:aafd5cf54b243136f7a78b"

};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export default app;