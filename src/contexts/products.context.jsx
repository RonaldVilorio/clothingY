import { createContext,useState, useEffect} from "react";
import PRODUCTS from '../shop-data.json'

export const ProductsContext = createContext({
    products:[],
    setProducts:null
})

export const ProductsProvider =({children})=>{
    const [products,setProducts] = useState(PRODUCTS)
    const value = {products}

    // useEffect(()=>{
        // API call to get products
    //     const cleanup = onAuthStateChangedListener((user)=>{
    //         if(user){
    //             createUserDocumentFromAuth(user)
    //         }            
    //         setCurrentUser(user)
    //     })
    //     return cleanup
    // },[])
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}
