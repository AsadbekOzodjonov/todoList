import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWTGs-wIUh8B_OtJdEKL0Cy0ee8HS4i3o",
  authDomain: "todolist-714a2.firebaseapp.com",
  projectId: "todolist-714a2",
  storageBucket: "todolist-714a2.appspot.com",
  messagingSenderId: "218558495379",
  appId: "1:218558495379:web:12d0c327d7671c72aaab66",
};

const fire = initializeApp(firebaseConfig); 
export default fire
