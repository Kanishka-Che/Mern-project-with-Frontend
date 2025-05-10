import { Link } from "react-router-dom";
import { Routes,Route } from 'react-router-dom';
import AdminProductsPage from "./admin/adminProductsPage";


export default function AdminPage(){
    return(

        <div className="w-full h-screen flex">
            <div className="h-full w-[300px] flex flex-col">
                    <Link to="/admin/products">Products</Link>
                    <Link to="/admin/Users">Users</Link>
                    <Link to="/admin/Orders">Orders</Link>
                    <Link to="/admin/Reviews">Reviews</Link>
            </div>
            <div className="h-full w-[calc(100%-300px)] ">
                    <Routes path="/*">
                    <Route path="/products" element={<AdminProductsPage/>}/>
                    <Route path="/Users" element={<h1>Users</h1>}/>
                    <Route path="/Orders" element={<h1>Orders</h1>}/>
                    <Route path="/Reviews" element={<h1>Reviews</h1>}/>
                    </Routes>
            </div>
            
        </div>
    )
}