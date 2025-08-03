import React from 'react';

const Intro = () => {
  return (
    <section className="py-16 sm:py-24 bg-warm-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <p className="text-xl sm:text-2xl text-charcoal/90 leading-relaxed font-light">
            Your wedding day happens once. The emotions, the laughter, the tears of joy—
            <span className="font-semibold text-rose-gold"> these moments deserve to be captured beautifully</span>, 
            not missed because your photographer was too busy posing shots or handling equipment.
          </p>
          
          <p className="text-lg text-charcoal/70 mt-6 max-w-3xl mx-auto">
            I understand that you want to be fully present on your special day, knowing that 
            every precious moment is being preserved with care and artistry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;