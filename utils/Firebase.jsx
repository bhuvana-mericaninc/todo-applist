
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLT_iBSwmBkJ9P9moXdXWmCpeotAomQ4A",
  authDomain: "todo-applist-e85af.firebaseapp.com",
  projectId: "todo-applist-e85af",
  storageBucket: "todo-applist-e85af.appspot.com",
  messagingSenderId: "137108294807",
  appId: "1:137108294807:web:5dec92d9fa6e573a7aadd2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)