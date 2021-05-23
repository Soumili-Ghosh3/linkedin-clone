import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAOzEXs2f34SqWhPssv2vhtb7DDtzuoeUc",
    authDomain: "linkedin-clone-fdc4a.firebaseapp.com",
    projectId: "linkedin-clone-fdc4a",
    storageBucket: "linkedin-clone-fdc4a.appspot.com",
    messagingSenderId: "670192983199",
    appId: "1:670192983199:web:24cb6102fdd11d3f4bd6aa",
    measurementId: "G-E85XE7YLRJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;