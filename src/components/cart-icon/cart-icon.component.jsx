import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import './cart-icon.styles.scss'
import { CartDropDownContext } from '../../contexts/cart-drop-down.context'
const CartIcon = () => {
    const {cartDropDown,setCartDropDown,cartCount} = useContext(CartDropDownContext)
    
    const handleClick = ()=> setCartDropDown(!cartDropDown)
    
    return ( 
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon'onClick={handleClick}/>
            <span className='item-count'>{cartCount}</span>    
        </div>
     );
}

export default CartIcon;