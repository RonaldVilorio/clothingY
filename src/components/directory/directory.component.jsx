import CategoryItem from "../directory-item/directory-item.component";
import {CategoriesContainer}from "./directory.styles"

const Directory = ({categories}) => {
    return ( 
    <CategoriesContainer>
        {categories.map((category)=>(
        <CategoryItem key={category.id} category={category}/>
        ))}
    </CategoriesContainer> 
  );
}
 
export default Directory;