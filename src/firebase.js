// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCzxtSo42OGJpRWd7I_6gMItLAPRZodpXc",
//     authDomain: "barber-f2d59.firebaseapp.com",
//     projectId: "barber-f2d59",
//     storageBucket: "barber-f2d59.appspot.com",
//     messagingSenderId: "898462922869",
//     appId: "1:898462922869:web:c36b74ec869d404b39a03c"
//   };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };



import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


console.log(process.env.REACT_APP_FIREBASE_API_KEY);
console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
console.log(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID);
console.log(process.env.REACT_APP_FIREBASE_APP_ID);


export { db, auth };





// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCzxtSo42OGJpRWd7I_6gMItLAPRZodpXc",
//   authDomain: "barber-f2d59.firebaseapp.com",
//   projectId: "barber-f2d59",
//   storageBucket: "barber-f2d59.appspot.com",
//   messagingSenderId: "898462922869",
//   appId: "1:898462922869:web:c36b74ec869d404b39a03c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
