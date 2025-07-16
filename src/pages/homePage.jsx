import {Users, Award, Target, Heart } from 'lucide-react';
import Footer from '../components/footer';
import Header from '../components/header';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">

         <Header/> 
      <section id="home" className="flex-grow bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing solutions that will transform your business and drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Started</button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">Learn More</button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-4">
              We are a leading company dedicated to providing innovative solutions that help businesses grow and succeed.
            </p>
            <p className="text-gray-600 mb-8">
              With years of experience and a passion for excellence, we deliver results that exceed expectations.
            </p>
            <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">Contact Us</a>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-6">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="opacity-80 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1000+</div>
                <div className="opacity-80 text-sm">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="opacity-80 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="opacity-80 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide exceptional service and innovative solutions tailored to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Expert Team", desc: "Professional experts ready to help" },
              { icon: <Award className="w-8 h-8" />, title: "Quality Service", desc: "Premium quality in everything we do" },
              { icon: <Target className="w-8 h-8" />, title: "Results Driven", desc: "Focused on achieving your goals" },
              { icon: <Heart className="w-8 h-8" />, title: "Customer Care", desc: "Dedicated support when you need it" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied clients who trust us with their digital success.</p>
        <a href="/contact" className="bg-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">Contact Us Now</a>
      </section>

      <Footer/>
    </div>
  );
};

export default HomePage;
