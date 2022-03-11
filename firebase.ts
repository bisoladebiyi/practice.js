import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebase.config";


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export default app 