import { Route, Routes } from "react-router-dom";
import ProductPage from "./client/productPage";
import ProductOverviewPage from "./client/productOverView";
import CartPage from "./client/cart";
import CheckoutPage from "./client/checkOut";
import SearchProductPage from "./client/searchProducts";
import ContactUsPage from '../pages/contactUsPage';
import HomePage from "../pages/homePage";


export default function router(){

    return(
        <div className="w-full h-screen  flex flex-col items-center">
           
            <div className="w-full h-[calc(100vh-80px)]  flex flex-col items-center">
                <Routes path="/*">
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/about" element={<h1>About</h1>}/>
                    <Route path="/contact" element={<ContactUsPage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                    <Route path="/overview/:id" element={<ProductOverviewPage/>}/>
                    <Route path="/search" element={<SearchProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    <Route path="/*" element={<h1>404 Not Found</h1>}/> 
                </Routes>
            </div>
        </div>
    )
}
