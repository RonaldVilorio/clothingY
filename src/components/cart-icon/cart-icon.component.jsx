
import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartDropDownContext } from '../../contexts/cart-drop-down.context'
import {CartIconContainer,ItemCount} from  './cart-icon.styles'

const CartIcon = () => {
    const {cartDropDown,setCartDropDown,cartCount} = useContext(CartDropDownContext)
    
    const handleClick = ()=> setCartDropDown(!cartDropDown)
    
    return ( 
        <CartIconContainer onClick={handleClick}>
            <ShoppingIcon></ShoppingIcon>
            <ItemCount>{cartCount}</ItemCount>    
        </CartIconContainer>
     );
}

export default CartIcon;