import {Fragment, useContext} from "react"
import {Outlet} from "react-router-dom"
import {ReactComponent as YLogo} from "../../assets/crown.svg"
import { UserContext } from "../../contexts/user.context"
import { CartDropDownContext } from "../../contexts/cart-drop-down.context"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import {
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from "./navigation.styles"
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = ()=>{
    const {currentUser} = useContext(UserContext)
    const {cartDropDown} = useContext(CartDropDownContext)

    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <YLogo className='logo'/>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser} >Sign Out</NavLink>                             
                        ):(
                        <NavLink to="/sign-in">
                            Sign In
                        </NavLink>
                        )
                    }
                    <CartIcon/>
                </NavLinksContainer>
                {
                    cartDropDown &&
                    <CartDropDown/>
                }
                              
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
  }
  export default Navigation