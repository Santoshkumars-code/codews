// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2B_1Lik7MqRGNl586EySbhhR4Jb5V58E",
  authDomain: "codews.firebaseapp.com",
  projectId: "codews",
  storageBucket: "codews.appspot.com",
  messagingSenderId: "517570156963",
  appId: "1:517570156963:web:b7f1de2718adafd07ea216",
  measurementId: "G-CGE5W00HZS",
  databaseURL:"https://codews-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const storage = getStorage(app)

const auth = getAuth(app);
export{
  db,
  auth,
  storage
}

