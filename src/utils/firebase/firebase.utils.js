import {initializeApp} from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} 
    from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD_HMxSwePgjOQfK856Pe65ToBT4tiNn0Q",
    authDomain: "clothingy-564e1.firebaseapp.com",
    projectId: "clothingy-564e1",
    storageBucket: "clothingy-564e1.appspot.com",
    messagingSenderId: "626742899399",
    appId: "1:626742899399:web:99ea19ab7532daac8d04e2"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  })
  export const auth = getAuth()
  export const signInwithGooglePopup = () => signInWithPopup(auth,provider)