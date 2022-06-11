import { createContext,useState } from "react";

const addCartItem = (cartItems,productToAdd) =>{
    if (!productToAdd || !cartItems) return

    const found = cartItems.find(product=>product.id === productToAdd.id)
    if(found){
        return cartItems.map((product)=>(
            product.id === productToAdd.id 
            ? {...product,quantity : product.quantity+1}
            : product
        ))
    }
    return [...cartItems,{...found,quantity:1}]
}

export const CartDropDownContext = createContext({
    cartDropDown:false,
    setCartDropDown:()=>{},
    cartItems:[],
    addItemToCart: ()=>{}
})

export const CartDropDownProvider =({children})=>{
    const [cartDropDown,setCartDropDown] = useState(false)
    const [cartItems,setCartItems] = useState([])

    const addItemToCart =(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = {cartDropDown,setCartDropDown,cartItems,addItemToCart}
    return(
        <CartDropDownContext.Provider value={value}>
            {children}
        </CartDropDownContext.Provider>

    )           
}