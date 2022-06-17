import {Outlet} from "react-router-dom"
import CategoryMenu from "../../components/directory/directory.component";

const Home = ()=>{
  
  return (
      <div>
          <CategoryMenu/>
          <Outlet/>
      </div>
    
  );
}

export default Home;
