  

  const Footer = () => (

    <footer className="bg-gray-900 text-white py-12 px-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">YourBrand</h3>
            <p className="text-gray-300">
              Providing innovative solutions that help businesses grow and succeed.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300">contactcbc@gmail.com</p>
            <p className="text-gray-300">+94 789107363</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  export default Footer;