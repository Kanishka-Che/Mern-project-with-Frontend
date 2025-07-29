import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">About Us</h1>

        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-blue-700">CBC</span>, your one-stop destination for custom-designed clothing. 
          We specialize in providing high-quality, tailored outfits that reflect both tradition and modern trends.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Founded in 2024, our mission is to bridge the gap between creativity and comfort. 
          Whether you’re looking for elegant traditional attire or stylish modern wear, we’ve got you covered.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Our team consists of passionate designers, skilled tailors, and fashion lovers who work together to turn your vision into reality. 
          With user-friendly ordering, real-time customization, and door-step delivery, we ensure a smooth and satisfying experience.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>🌟 100% Handcrafted Quality</li>
          <li>📐 Personalized Measurements</li>
          <li>🎨 Custom Designs Available</li>
          <li>⏱ Fast Delivery & Easy Returns</li>
          <li>💬 Friendly Customer Support</li>
        </ul>

        <div className="mt-10 text-center">
          <p className="text-lg text-blue-800 font-medium">
            Thank you for being a part of our journey. Let's craft something beautiful together! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
