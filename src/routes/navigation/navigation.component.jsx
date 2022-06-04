import {Fragment} from "react"
import {Outlet,Link} from "react-router-dom"
import {ReactComponent as YLogo} from "../../assets/crown.svg"
import "./navigation.styles.scss"
const Navigation = ()=>{
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
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
  }
  export default Navigation