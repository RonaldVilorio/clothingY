import { createContext,useState } from "react";

export const CartDropDownContext = createContext({
    cartDropDown:false,
    setCartDropDown:()=>null
})

export const CartDropDownProvider =({children})=>{
    const [cartDropDown,setCartDropDown] = useState(false)
    const value = {cartDropDown,setCartDropDown}
    return(
        <CartDropDownContext.Provider value={value}>
            {children}
        </CartDropDownContext.Provider>

    )           
}