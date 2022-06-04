import { signInwithGooglePopup } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
    const logGoogleUser = async()=>{
        const response = await signInwithGooglePopup();
        console.log(response)
    }



    return ( 
    <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
    </div> 
    );
}
 
export default SignIn;