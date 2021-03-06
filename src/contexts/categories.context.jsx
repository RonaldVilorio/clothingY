import { createContext,useEffect,useState} from "react";
import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap:[],
    setCategoriesMap:()=>null
})

export const CategoriesProvider =({children})=>{
    const [categoriesMap,setCategoriesMap] = useState({})
    useEffect(()=>{
        const getCategoriesMap = async ()=>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])
    const value = {categoriesMap}
    // Only to run once to populate firestore db, maintain commented out
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
