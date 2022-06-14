import { useContext } from "react";
import { CartDropDownContext } from "../../contexts/cart-drop-down.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss'
const CheckOut = () => {
    const {cartItems} = useContext(CartDropDownContext)
    
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem)=>{
                    return(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                })
            }
            <div className='total'>Total: 0</div>
        </div>
    )                    
}
export default CheckOut;