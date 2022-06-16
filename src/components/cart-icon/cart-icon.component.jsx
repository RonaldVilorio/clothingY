
import { useContext } from 'react'
import { CartDropDownContext } from '../../contexts/cart-drop-down.context'
import {
    cartIconContainer,
    shoppingIconStyle,
    itemCount} from  './cart-icon.styles'

const CartIcon = () => {
    const {cartDropDown,setCartDropDown,cartCount} = useContext(CartDropDownContext)
    
    const handleClick = ()=> setCartDropDown(!cartDropDown)
    
    return ( 
        <cartIconContainer>
            <shoppingIconStyle onClick={handleClick}></shoppingIconStyle>
            <itemCount>{cartCount}</itemCount>    
        </cartIconContainer>
     );
}

export default CartIcon;