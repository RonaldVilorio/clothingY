import { createContext,useEffect,useState} from "react";
import SHOP_DATA from '../shop-data'
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products:[],
    setProducts:()=>null
})

export const ProductsProvider =({children})=>{
    const [products] = useState([])
    const value = {products}
    // Only to run once to populate firestore db, maintain commented out
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}
