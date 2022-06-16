import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartDropDownContext } from '../../contexts/cart-drop-down.context';
import {useNavigate} from "react-router-dom"
import {CartDropDownContainer,CartItems} from './cart-dropdown.styles'

const CartDropDown = () => { 
    const {cartItems} = useContext(CartDropDownContext)
    const navigate = useNavigate();
    const goToCheckoutHandler = ()=>{
        navigate('./checkout')
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.map((item)=>{
                        return <CartItem key={item.id} cartItem={item}/>
                })
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </CartDropDownContainer>
     );
}
 
export default CartDropDown;