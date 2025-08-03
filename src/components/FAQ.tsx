import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast do we get our wedding photos?",
      answer: "You'll receive all your edited wedding photos within 7 days of your wedding. This includes a complete gallery with unlimited downloads, so you can start sharing your beautiful memories immediately. We also provide a sneak peek with 10-15 photos within 24 hours!"
    },
    {
      question: "Are the photos really unlimited?",
      answer: "Absolutely! When we say unlimited, we mean it. You'll receive every single beautiful moment we capture—typically 500-1000+ photos depending on your wedding duration. There are no hidden restrictions or extra charges. Every edited photo from your special day is yours to keep forever."
    },
    {
      question: "Why do you offer a free pre-wedding shoot?",
      answer: "The pre-wedding shoot helps us get to know each other and makes you comfortable with our photography style. This means on your wedding day, you'll feel natural and relaxed, resulting in more authentic, beautiful photos. Plus, you get stunning engagement photos to use for invitations or social media—completely free!"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-soft-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-charcoal/70">
            Everything you need to know about our wedding photography services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-warm-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-rose-gold/5 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-charcoal pr-4">
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <ChevronUp className="h-6 w-6 text-rose-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-rose-gold flex-shrink-0" />
                )}
              </button>
              
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-charcoal/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal/70 mb-6">
            Have more questions? We'd love to hear from you!
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center bg-rose-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-gold/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;