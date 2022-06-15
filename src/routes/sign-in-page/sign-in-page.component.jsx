import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { Fragment } from "react";
import {signInUpContainer} from './sign-in-page.styles'
const SignIn = () => {
    return (
        <Fragment>
            <signInUpContainer>
                <SignInForm/>
                <SignUpForm/>
            </signInUpContainer> 
        </Fragment>
    );
}
 
export default SignIn;