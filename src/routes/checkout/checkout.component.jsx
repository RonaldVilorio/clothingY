import { useContext } from "react";
import { CartDropDownContext } from "../../contexts/cart-drop-down.context";
import './checkout.styles.scss'
const CheckOut = () => {
    const {cartItems,addItemToCart,removeItemFromCart} = useContext(CartDropDownContext)
    
    return (
        <div>
            {
                cartItems.map((item)=>{
                     const {id,name,price,quantity,imageUrl} = item
                    return(
                    <div key={id} className='items-container'>
                        
                        <div className='item'>                            
                            <br/>
                            <img src={imageUrl} alt={name} />
                            <span>{name}</span>
                            <span>
                                <button onClick={()=>{removeItemFromCart(item)}}>{'<'}</button> 
                                    {quantity}
                                <button onClick={()=>{addItemToCart(item)}}>{'>'}</button>
                            </span>
                            <span>{price}</span>
                            <span> <button>X</button> </span>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )                    
}
export default CheckOut;