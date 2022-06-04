import { signInwithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async()=>{
        const {user} = await signInwithGooglePopup();
        createUserDocumentFromAuth(user)
        
    }



    return ( 
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
    </div> 
    );
}
 
export default SignIn;