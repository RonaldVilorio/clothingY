import { createContext,useState,useEffect } from "react";

const addCartItem = (cartItems,productToAdd) =>{
    
    const foundCartItem = cartItems.find(product=>product.id === productToAdd.id)
    
    if(foundCartItem){
        return cartItems.map((product)=>(
            product.id === productToAdd.id 
            ? {...product,quantity : product.quantity+1}
            : product
        ))
    }
    return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems,productToRemove)=>{

    const foundCartItem = cartItems.find(product=>product.id === productToRemove.id)
    if(foundCartItem.quantity === 1){
        return cartItems.filter((cartItem)=>cartItem.id !== productToRemove.id)
    }else{
        return cartItems.map((product)=>(
            product.id === productToRemove.id 
            ? {...product,quantity : product.quantity-1}
            : product
        ))
        
    }
    
}
const clearCartItem = (cartItems,productToClear)=>{
    return cartItems.filter((cartItem)=>cartItem.id !== productToClear.id)
}
// const totalPrice = cartItems.reduce((acc,cur)=>acc + cur.price*cur.quantity,0)

export const CartDropDownContext = createContext({
    cartDropDown:false,
    setCartDropDown:()=>{},
    cartItems:[],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    cartCount:0,
    setCartCount: ()=>{},
    cartTotal:0,
    setCartTotal: ()=>{}

})

export const CartDropDownProvider =({children})=>{
    const [cartDropDown,setCartDropDown] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)

// render every time the cartItems(2nd arg of useEffect) array changes
// like componentDidMount
    useEffect(()=>{
        const totalItems = cartItems.reduce((acc,curItem)=>{
            if(curItem.quantity){
                return acc + curItem.quantity
            }        
        },0)
        setCartCount(totalItems)
    },[cartItems])

    useEffect(()=>{
        const cartTotal = cartItems.reduce((acc,curItem)=>{
                return acc + curItem.price*curItem.quantity  
                
        },0)
        setCartTotal(cartTotal)
    },[cartItems])

    
    const addItemToCart =(productToAdd)=>{
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removeItemFromCart=(productToRemove)=>{
        setCartItems(removeCartItem(cartItems,productToRemove))
    }
    const clearItemFromCart =(productToClear)=>{
        setCartItems(clearCartItem(cartItems,productToClear))
    }

    const value = {
        cartDropDown,
        setCartDropDown,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal
       
    }
    return(
        <CartDropDownContext.Provider value={value}>
            {children}
        </CartDropDownContext.Provider>

    )           
}