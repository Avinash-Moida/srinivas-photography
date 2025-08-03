import React from 'react';
import { Clock, Image, Calendar } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: <Image className="h-8 w-8 text-rose-gold" />,
      title: "Missed Precious Moments",
      description: "Traditional photographers often miss spontaneous, emotional moments while setting up poses"
    },
    {
      icon: <Clock className="h-8 w-8 text-rose-gold" />,
      title: "Long Delivery Times",
      description: "Waiting months to receive your wedding photos, when you're eager to relive those beautiful memories"
    },
    {
      icon: <Calendar className="h-8 w-8 text-rose-gold" />,
      title: "Limited Photo Options",
      description: "Receiving only a small selection of photos, missing out on many beautiful moments from your day"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-soft-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            Common Wedding Photography Frustrations
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            We've heard these concerns from countless couples, and we understand how important 
            it is to get your wedding photography right the first time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-warm-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-rose-gold/10 rounded-full">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">
                  {problem.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;