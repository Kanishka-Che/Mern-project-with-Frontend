import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homePage'
import LoginPage from './pages/login'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/register'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPasswordPage from './pages/forgetPassword'
import ProductPage from './pages/client/productPage'
import ContactUsPage from './pages/contactUsPage'
import SearchProductPage from './pages/client/searchProducts'


function App() {
 
  

  return (
    <GoogleOAuthProvider clientId="VITE_GOOGLE_CLIENT_ID">
    <BrowserRouter>
      <div >
        <Toaster position='top-right'/>
        
        <Routes path="/*">
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/forget" element={<ForgetPasswordPage/>}/>
          <Route path="/signup" element={<RegisterPage/>}/>
          <Route path='/contact' element={<ContactUsPage/>}/>
          <Route path='/search' element={<SearchProductPage/>}/>
          <Route path="/testing" element={<TestPage/>}/>
          <Route path='/products' element={<ProductPage/>}/>  
          <Route path='/admin/*' element={<AdminPage/>}/>
          <Route path='/*' element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
   </GoogleOAuthProvider>
  )
}

export default App
