import{useState} from "react"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth  } from "../../utils/firebase/firebase.utils"


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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input 
                    type="text" 
                    name="displayName" 
                    value={displayName}
                    onChange={handleChange} 
                    required />
                
                <label>Email</label>
                <input 
                    type="email"
                     name="email"
                     value={email}
                     onChange={handleChange} 
                     required />
                
                <label>Password</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password}
                    minLength="6"
                    onChange={handleChange} 
                    required />
                
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    name="confirmPassword"
                    value={confirmPassword} 
                    onChange={handleChange} 
                    required />

                <button type="submit">Sign Up</button>
                
            </form>
        </div>
     );
}
 
export default SignUpForm;