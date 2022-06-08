import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import { signInwithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss'
const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields

    const logGoogleUser = async()=>{
        const {user} = await signInwithGooglePopup();
        return await createUserDocumentFromAuth(user)  
    }
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormFields({...formFields,[name]:value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            return await signInAuthUserWithEmailAndPassword(email,password)
        }catch(err){
            console.log(err)
        }
    }
    
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                  <FormInput
                      label="Email" 
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange} 
                      required 
                  />
                  <FormInput
                      label="Password"
                      type="password" 
                      name="password" 
                      value={password}
                      minLength="6"
                      onChange={handleChange} 
                      required />
                <div className='buttons-container'>
                  <Button type="submit">Sign In</Button>
                  <Button buttonType="google" onClick={logGoogleUser}>Sign in with Google</Button>
                </div>
            </form>
        </div>
        
     );
}
 
export default SignInForm;