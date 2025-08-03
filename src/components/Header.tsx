import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-warm-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-rose-gold" />
            <span className="text-2xl font-serif font-bold text-charcoal">
              Srinivas Photography
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#gallery" className="text-charcoal hover:text-rose-gold transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="text-charcoal hover:text-rose-gold transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-charcoal hover:text-rose-gold transition-colors">
              FAQ
            </a>
            <a href="#contact" className="bg-rose-gold text-white px-6 py-2 rounded-full hover:bg-rose-gold/90 transition-colors">
              Check Availability
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#gallery" className="block py-2 text-charcoal hover:text-rose-gold transition-colors">
              Gallery
            </a>
            <a href="#testimonials" className="block py-2 text-charcoal hover:text-rose-gold transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="block py-2 text-charcoal hover:text-rose-gold transition-colors">
              FAQ
            </a>
            <a href="#contact" className="block bg-rose-gold text-white px-6 py-2 rounded-full text-center hover:bg-rose-gold/90 transition-colors">
              Check Availability
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;