import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { Fragment } from "react";
import {SignInUpContainer} from './sign-in-page.styles'
const SignIn = () => {
    return (
        <Fragment>
            <SignInUpContainer>
                <SignInForm/>
                <SignUpForm/>
            </SignInUpContainer> 
        </Fragment>
    );
}
 
export default SignIn;