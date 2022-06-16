
import { useContext } from 'react'
import { CartDropDownContext } from '../../contexts/cart-drop-down.context'
import {
    CartIconContainer,
    ShoppingIconStyle,
    ItemCount} from  './cart-icon.styles'

const CartIcon = () => {
    const {cartDropDown,setCartDropDown,cartCount} = useContext(CartDropDownContext)
    
    const handleClick = ()=> setCartDropDown(!cartDropDown)
    
    return ( 
        <CartIconContainer>
            <ShoppingIconStyle onClick={handleClick}></ShoppingIconStyle>
            <ItemCount>{cartCount}</ItemCount>    
        </CartIconContainer>
     );
}

export default CartIcon;