import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState, useContext } from "react";
import { signInwithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import {headingTwo,signInContainer} from './sign-in-form.styles'

const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {email,password} = formFields
    // context

    const logGoogleUser = async()=>{
        await signInwithGooglePopup();              
    }
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormFields({...formFields,[name]:value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password)        
            resetFormFields();
        }catch(err){        
            if(err.code === 'auth/wrong-password'){
                alert('incorrect password for email')
            }else if(err.code === 'auth/user-not-found' ){
                alert("No user for this email")
            }
            console.log(err)
        }
    }
    
    return (
        <signInContainer>
            <headingTwo>Already have an account?</headingTwo>
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
                    <Button type='submit'>SIGN IN</Button>
                    <Button type='button'buttonType="google" onClick={logGoogleUser}>
                      GOOGLE SIGN IN
                    </Button>
                </div>
            </form>
        </signInContainer>
        
     );
}
 
export default SignInForm;