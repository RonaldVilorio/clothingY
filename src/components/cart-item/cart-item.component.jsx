import {
    cartItemContainer,
    ItemDetails,
    Name,
    Image} from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const {name,quantity,imageUrl,price} = cartItem   
    return ( 
        <cartItemContainer>
            <Image src={imageUrl} alt={name} />
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} X ${price}</span>
            </ItemDetails>
        </cartItemContainer>
     );
}
 
export default CartItem;