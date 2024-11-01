import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import PurchaseHistory from "./PurchaseHistory";
import Veg from "./Veg";
import "./App.css";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";
function App(){

const cart=useSelector((state)=>state.Cart)
const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  return(
    <>
    <GoogleOAuthProvider clientId="842810229595-k1kdgqqf1mceq83hkkt208gbgk57s4ch.apps.googleusercontent.com">
      <GoogleLoginComponent/>
    </GoogleOAuthProvider>
    <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/veg">Veg</Link>
      <Link to="/nonVeg">NonVeg</Link>
      <Link to="/cart">Cart{totalItems}</Link>
      <Link to="/purchaseHistory">PurchaseHistory</Link>
      <Link to="/aboutUs">AboutUs</Link>
      <Link to="/contactUs">ContactUs</Link>
   
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/veg" element={<Veg/>}/>
    <Route path="/nonVeg" element={<NonVeg/>}/>
    <Route path="/purchaseHistory" element={<PurchaseHistory/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    <Route path="/contactUs" element={<ContactUs/>}/>
   

   </Routes>
   </BrowserRouter>
    </>
  )
}export default App;