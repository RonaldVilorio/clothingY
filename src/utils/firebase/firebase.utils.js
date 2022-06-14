import {initializeApp} from "firebase/app"
// auth/sign in
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"

// db
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    getDocs,
    collection,
    writeBatch,
    query
    
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
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  })
  export const auth = getAuth()
  export const signInwithGooglePopup = () => signInWithPopup(auth,googleProvider)

  export const db = getFirestore()

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
    const collectionRef = collection(db,collectionKey)
    const batch = writeBatch(db);
    objectsToAdd.forEach((obj)=>{
        const docRef = doc(collectionRef,obj.title.toLowerCase())
        batch.set(docRef,obj)
    })
    await batch.commit();
  }
  export const getCategoriesAndDocuments = async ()=>{
      const collectionRef = collection(db,'categories')
      const q = query(collectionRef)
      const querySnapshot = await getDocs(q)
      const categoryMap = querySnapshot.docs.reduce((acc,docSnapShot)=>{
          const {title,items} = docSnapShot.data()
          acc[title.toLowerCase()] = items
          return acc
      },{})

      return categoryMap

  }

  export const createUserDocumentFromAuth = async(
      authUser,
      additionalInformation = {}) => {

      if(!authUser)return;

      const userDocRef = doc(db,"users",authUser.uid)
      const userSnapShot = await getDoc(userDocRef)

      if(!userSnapShot.exists()){
          const {displayName,email} = authUser;
          const createdAt = new Date()

          try{
              await setDoc(userDocRef,{
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation
              })
          }catch(error){
              console.log("error creating the user",error.message)
          }
      }
      return userDocRef
  }
  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth,email,password)
  }
  export const signInAuthUserWithEmailAndPassword = async(email,password)=>{
      if(!email || !password) return;
      return await signInWithEmailAndPassword(auth,email,password)
  }
  export const signOutUser = async ()=>{
      await signOut(auth)
  }
  export const onAuthStateChangedListener = (callback)=>{
      onAuthStateChanged(auth,callback)
  }