import {useState} from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth  } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import {headingTwo,signUpContainer} from './sign-up-form.styles'
import Button from "../button/button.component"

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = () => {
    // setting state > formFields
    // setFormFields to set the state
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields
    
    const resetForm = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()
        if(password !== confirmPassword){
            alert("passwords do not match")
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)            
        
            await createUserDocumentFromAuth(user,{displayName})
            resetForm()

        }catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("email already in use")
            }
            console.log("My error message ", error)
        }

        // step1 confirm password == confirmpassword√
        // createAuthUserhWithEmailAndPassword auth?
        // create user doc from what above returns
    }
    
    const handleChange = (event) =>{
        // click event retrieves name,value(name is key, user input is value)
        // combines to new obj, sets state to new obj
        const {name,value} = event.target;
        setFormFields({...formFields,[name]: value})

    }
    return ( 
        <signUpContainer>
            <headingTwo>Don't have an account?</headingTwo>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    required 
                />    
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
            
                <FormInput
                    label="Confirm Password"
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword} 
                    onChange={handleChange} 
                    required />

                <Button type="submit">Sign Up</Button>
            </form>
        </signUpContainer>
     );
}
 
export default SignUpForm;