import React from 'react';
import { Heart, Camera, Users } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-16 sm:py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            Meet Srinivas Photography
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for capturing wedding memories that last a lifetime. 
            Friendly, emotional, and completely reliable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-rose-gold/10 rounded-full">
                <Heart className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Emotional Storytelling
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  I specialize in capturing the raw emotions and genuine moments that make 
                  your wedding day unique. Every laugh, every tear, every loving glance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-rose-gold/10 rounded-full">
                <Camera className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Candid & Traditional Expertise
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Perfect blend of candid photography and traditional poses, ensuring we 
                  capture both spontaneous moments and beautiful formal portraits.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-rose-gold/10 rounded-full">
                <Users className="h-6 w-6 text-rose-gold" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Completely Reliable
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Based in Vizianagaram with years of experience. I'll be there on time, 
                  prepared, and focused entirely on making your day perfect.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Professional wedding photographer at work"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;