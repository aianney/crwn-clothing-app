import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBc_lmJBfbHOgNtBRWpivuMoPfEX9-EaOU",
    authDomain: "crwn-app-89e2e.firebaseapp.com",
    projectId: "crwn-app-89e2e",
    storageBucket: "crwn-app-89e2e.appspot.com",
    messagingSenderId: "6426838990",
    appId: "1:6426838990:web:d8b2f73a2a5194dde2cd9f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

