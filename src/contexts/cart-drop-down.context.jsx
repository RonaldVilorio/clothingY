import { createContext,useState,useEffect } from "react";

const addCartItem = (cartItems,productToAdd) =>{
    
    const found = cartItems.find(product=>product.id === productToAdd.id)
    
    if(found){
        return cartItems.map((product)=>(
            product.id === productToAdd.id 
            ? {...product,quantity : product.quantity+1}
            : product
        ))
    }
    return [...cartItems,{...productToAdd,quantity:1}]
}

export const CartDropDownContext = createContext({
    cartDropDown:false,
    setCartDropDown:()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    cartCount:0
})

export const CartDropDownProvider =({children})=>{
    const [cartDropDown,setCartDropDown] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)

// render every time the cartItems(2nd arg of useEffect) array changes
    useEffect(()=>{
        const totalItems = cartItems.reduce((acc,curItem)=>{
            if(curItem.quantity){
                return acc + curItem.quantity
            }        
        },0)
        setCartCount(totalItems)
    },[cartItems])

    
    const addItemToCart =(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = {cartDropDown,setCartDropDown,cartItems,addItemToCart,cartCount}
    return(
        <CartDropDownContext.Provider value={value}>
            {children}
        </CartDropDownContext.Provider>

    )           
}