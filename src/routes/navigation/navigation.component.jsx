import {Fragment, useContext} from "react"
import {Outlet,Link} from "react-router-dom"
import {ReactComponent as YLogo} from "../../assets/crown.svg"
import "./navigation.styles.scss"
import { UserContext } from "../../contexts/user.context"

const Navigation = ()=>{
    const {currentUser} = useContext(UserContext)
    console.log(currentUser)
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
                    <Link className ="nav-link" to="/sign-in">
                        Sign In
                    </Link>
                </div>
                
                    
               
            </div>
            <Outlet/>
        </Fragment>
    )
  }
  export default Navigation