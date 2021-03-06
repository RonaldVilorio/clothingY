import { useContext } from 'react';
import { CartDropDownContext } from '../../contexts/cart-drop-down.context';
import {
    CheckoutItemContainer,
    ImageContainer,
    BaseSpan,
    Quantity,
    Arrow,
    Value,
    RemoveButton
}from './checkout-item.styles'

const CheckoutItem = ({cartItem}) => {
    const {name,imageUrl,price,quantity} = cartItem
    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartDropDownContext)
    const clearItemHandler = ()=>clearItemFromCart(cartItem)
    const removeItemHandler = ()=>removeItemFromCart(cartItem)
    const addItemHandler = ()=>addItemToCart(cartItem)

   
        return ( 
            <CheckoutItemContainer>
                <ImageContainer>
                    <img src={imageUrl} alt={name} />
                </ImageContainer>
                <BaseSpan>{name}</BaseSpan>
                <Quantity>
                    <Arrow onClick={removeItemHandler}>
                        &#10094;
                    </Arrow>
                    <Value>{quantity}</Value>
                    <Arrow onClick={addItemHandler}>
                        &#10095;
                    </Arrow>
                </Quantity>
                <BaseSpan>{price}</BaseSpan>
                <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
            </CheckoutItemContainer>
         );
}
 
export default CheckoutItem;