import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA2fzTA7fnXYyXkjsnpmFYCojkkQt4HMlg",
  authDomain: "reactdos-app.firebaseapp.com",
  databaseURL: "https://reactdos-app.firebaseio.com",
  projectId: "reactdos-app",
  storageBucket: "reactdos-app.appspot.com",
  messagingSenderId: "607506026820",
  appId: "1:607506026820:web:d7e99ff71e833a1af94711"
});

export { firebaseConfig as firebase };