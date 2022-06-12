import {Routes,Route} from "react-router-dom"
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component"
import SignIn from "./routes/sign-in-page/sign-in-page.component"
import Shop from "./routes/shop/shop.component"
import CheckOut from "./routes/checkout/checkout.component"

const App = ()=>{
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  );
}

export default App;
