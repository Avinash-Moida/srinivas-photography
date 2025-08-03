import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const SecondCTA = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-rose-gold to-rose-gold/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white">
          <Calendar className="h-16 w-16 mx-auto mb-6 opacity-90" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Let's Lock In Your Wedding Date
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Wedding seasons book up fast in Vizianagaram. Don't wait until it's too late—
            secure your date today and ensure your memories are captured perfectly.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
            <p className="text-lg font-semibold mb-2">
              📅 Limited Availability for 2024-2025
            </p>
            <p className="opacity-90">
              Only a few dates left for wedding season
            </p>
          </div>
          
          <a 
            href="#contact"
            className="inline-flex items-center bg-white text-rose-gold px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Check My Availability Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondCTA;