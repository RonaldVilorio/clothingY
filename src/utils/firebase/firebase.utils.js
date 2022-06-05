import {initializeApp} from "firebase/app"
// auth/sign in
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"

// db
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

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
  export const db = getFirestore()
  export const createUserDocumentFromAuth = async(userAuth) =>{
      const userDocRef = doc(db,"users",userAuth.uid)
      const userSnapShot = await getDoc(userDocRef)
      if(!userSnapShot.exists()){
          const {displayName,email} = userAuth;
          const createdAt = new Date()

          try{
              await setDoc(userDocRef,{
                  displayName,
                  email,
                  createdAt
              })
          }catch(error){
              console.log("error creating the user",error.message)
          }
      }
      return userDocRef
      
      
  }