import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import LoginPage from './pages/login';
import AdminPage from './pages/adminPage';
import TestPage from './pages/testPage';
import { Toaster } from 'react-hot-toast';
import ProductoverviewPage from './pages/client/productOverView';
import RegisterPage from './pages/register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPasswordPage from './pages/forgetPassword';
import ProductPage from './pages/client/productPage';
import ContactUsPage from './pages/contactUsPage';
import SearchProductPage from './pages/client/searchProducts';
import Layout from './components/layout'; 

function App() {
  return (
    <GoogleOAuthProvider clientId="VITE_GOOGLE_CLIENT_ID">
      <BrowserRouter>
        <div>
          <Toaster position='top-right' />

          <Routes>
            
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<RegisterPage />} />
            <Route path='/forget' element={<ForgetPasswordPage />} />
            <Route path='/admin/*' element={<AdminPage />} />
            <Route path='/admin' element={<AdminPage />} />

            {/* ✅ With Layout */}
            <Route path='/home' element={<Layout><HomePage /></Layout>} />
            <Route path='/products' element={<Layout><ProductPage /></Layout>} />
            <Route path='/overview/:id' element={<Layout><ProductoverviewPage /></Layout>} />
            <Route path='/contact' element={<Layout><ContactUsPage /></Layout>} />
            <Route path='/search' element={<Layout><SearchProductPage /></Layout>} />
            <Route path='/testing' element={<Layout><TestPage /></Layout>} />

            {/* ✅ Default fallback route */}
            <Route path='/*' element={<Layout><HomePage /></Layout>} />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
