import { signInwithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signupform/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async()=>{
        const {user} = await signInwithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        
    }



    return ( 
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        <SignUpForm/>
    </div> 
    );
}
 
export default SignIn;