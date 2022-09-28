import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwyvPigPfyAPYfFmy19yfEKNGLzK5kJSI",
  authDomain: "dummybackend-fbe69.firebaseapp.com",
  // databaseURL:
  //   "https://dummybackend-fbe69-default-rtdb.asia-southeast1.firebasedatabase.app",
  databaseURL: "http://localhost:9000/?ns=dummybackend-fbe69",
  projectId: "dummybackend-fbe69",
  storageBucket: "dummybackend-fbe69.appspot.com",
  messagingSenderId: "363295481845",
  appId: "1:363295481845:web:91ab4b72cccc24ff2e8abc",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const getRef = (isDB = false, URI) => {
  return isDB ? ref(db) : ref(db, URI);
};

export default getRef; // export the function
