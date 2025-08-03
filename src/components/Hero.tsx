import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-warm-beige to-soft-gray pt-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Side */}
        <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-charcoal leading-tight mb-6">
              Your Wedding, Captured Forever—
              <span className="text-rose-gold block">
                Exactly How You Want to Remember It.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-charcoal/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Based in Vizianagaram, specializing in candid and traditional
              wedding photography that tells your unique love story.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center bg-rose-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Check My Availability
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative order-1 lg:order-2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="https://www.candidshutters.com/maintenance/wp-content/uploads/2023/09/best-wedding-photographers-indias-most-famous-wedding-photographers-mumbai-delhi-wedding-photography-16.jpg"
              alt="Beautiful wedding couple portrait by Srinivas Photography"
              className="w-full h-96 sm:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            {/* Floating elements */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-semibold text-charcoal">
                💕 Vizianagaram
              </span>
            </div>{" "}
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-rose-gold/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-warm-beige/40 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce lg:hidden">
        <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-charcoal/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
