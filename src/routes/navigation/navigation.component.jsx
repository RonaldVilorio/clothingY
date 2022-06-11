import {Fragment, useContext} from "react"
import {Outlet,Link} from "react-router-dom"
import {ReactComponent as YLogo} from "../../assets/crown.svg"
import "./navigation.styles.scss"
import { UserContext } from "../../contexts/user.context"
import { CartDropDownContext } from "../../contexts/cart-drop-down.context"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
const Navigation = ()=>{
    const {currentUser} = useContext(UserContext)
    const {cartDropDown} = useContext(CartDropDownContext)

    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <YLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className ="nav-link" to="/shop">
                        Shop
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' >Sign Out</span>                             
                        ):(
                        <Link className ="nav-link" to="/sign-in">
                            Sign In
                        </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                {
                    cartDropDown &&
                    <CartDropDown/>
                }
                              
            </div>
            <Outlet/>
        </Fragment>
    )
  }
  export default Navigation