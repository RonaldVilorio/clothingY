import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './sign-in-page.styles.scss'
const SignIn = () => {
    return ( 
    <div className='sign-in-up-container'>
        <SignInForm/>
        <SignUpForm/>
    </div> 
    );
}
 
export default SignIn;