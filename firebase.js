import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJHd1eqbalCI9ZUQcnpL7yQa2JZgWWZ4U",
  authDomain: "notes-app-d4be4.firebaseapp.com",
  projectId: "notes-app-d4be4",
  storageBucket: "notes-app-d4be4.appspot.com",
  messagingSenderId: "664189718765",
  appId: "1:664189718765:web:b13898b2ad3bf283fdfce4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
