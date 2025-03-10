// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Navbar bileşenini içe aktarıyoruz
import Home from './pages/Home';  // Home sayfasını içe aktarıyoruz
import Blog from './pages/Blog';  // Blog sayfasını içe aktarıyoruz
import Footer from './components/Footer';  // Footer bileşenini içe aktarıyoruz
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Navbar her sayfada üstte yer alacak */}
      <Navbar />

      {/* Sayfa içeriklerini yönlendirecek Routes bileşeni */}
      <Routes>
        {/* Home sayfası */}
        <Route path="/" element={<Home />} />
        
        {/* About sayfası */}
        <Route path="/about" element={<About />} />
        
        {/* Blog sayfası */}
        <Route path="/blog" element={<Blog />} />
        
        {/* Contact sayfası */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer bileşeni her sayfanın altında olacak */}
      <Footer />
    </Router>
  );
}

export default App;

