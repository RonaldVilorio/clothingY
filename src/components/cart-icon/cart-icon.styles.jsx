import styled from 'styled-components'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

export const cartIconContainer = styled.div` 
    width: 45px; 
    height: 45px; 
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer; 
`
export const shoppingIconStyle = styled(ShoppingIcon)` 
    width: 24px; 
    height: 24px; 

`
export const itemCount = styled.span` 
    position: absolute; 
    font-size: 10px; 
    font-weight: bold; 
    bottom: 12px; 
` 



// .cart-icon-container { 
//     
//     .shopping-icon { 
//         
//     } 
//     .item-count { 
//         
//     } 
// } 