import { useContext } from "react";
import { CartDropDownContext } from "../../contexts/cart-drop-down.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total
} from './checkout.styles'

const CheckOut = () => {
    const {cartItems,cartTotal} = useContext(CartDropDownContext)
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem)=>{
                    return(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )                    
}
export default CheckOut;