import { Route, Routes, Link } from "react-router-dom";
import ProductPage from "./client/productPage";
import ProductOverviewPage from "./client/productOverview";
import CartPage from "./client/cart";
import CheckoutPage from "./client/checkOut";
import SearchProductPage from "./client/searchProducts";
import ContactUsPage from "./contactUsPage";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-blue-100 py-10 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to CostumeCraft</h1>
        <p className="text-lg text-blue-700 max-w-xl mx-auto">
          Discover traditional and modern custom-made outfits tailored just for you!
        </p>
        <div className="mt-6">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="w-full py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Browse Categories</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {["Traditional", "Modern", "Kids", "Accessories"].map((cat) => (
            <div
              key={cat}
              className="bg-white shadow-lg rounded-xl p-6 w-48 text-center hover:scale-105 transition"
            >
              <h3 className="text-lg font-bold text-blue-700">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Routes for nested navigation */}
      <div className="w-full px-4">
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<h1 className="text-center text-2xl">About Us</h1>} />
          <Route path="/Home" element={<h1 className="text-center text-2xl">Home</h1>} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/search" element={<SearchProductPage />} />
          <Route path="/overview/:id" element={<ProductOverviewPage />} />
          <Route path="/*" element={<h1 className="text-center text-red-600 text-2xl">404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
