import React from 'react';
import { Infinity, Clock, Gift } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Infinity className="h-12 w-12 text-rose-gold" />,
      title: "Unlimited Photos",
      description: "Receive every beautiful moment captured. No limits, no restrictions—every precious memory is yours to keep.",
      feature: "All edited photos included"
    },
    {
      icon: <Clock className="h-12 w-12 text-rose-gold" />,
      title: "7-Day Delivery",
      description: "Get your wedding photos within just one week. Start sharing and reliving your special day immediately.",
      feature: "Express delivery guaranteed"
    },
    {
      icon: <Gift className="h-12 w-12 text-rose-gold" />,
      title: "Free Pre-Wedding Shoot",
      description: "Complimentary engagement session to get comfortable with me and create beautiful photos before your big day.",
      feature: "No extra charges"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-gold/5 to-warm-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            Why Choose Srinivas Photography
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Three compelling reasons that make us the perfect choice for your wedding photography needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-warm-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-rose-gold/10 rounded-full mb-6 group-hover:bg-rose-gold/20 transition-colors">
                  {benefit.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                
                <div className="inline-block bg-rose-gold/10 text-rose-gold px-4 py-2 rounded-full text-sm font-medium">
                  {benefit.feature}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;