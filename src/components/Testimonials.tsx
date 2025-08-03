import React from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Rajesh",
      location: "Vizianagaram",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      text: "Srinivas captured our wedding so beautifully! Every emotion, every laugh, every tear of joy - it's all there. We received over 800 photos in just 5 days, and each one tells our story perfectly.",
      rating: 5,
    },
    {
      name: "Meera & Vikram",
      location: "Vizianagaram",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      text: "The pre-wedding shoot was amazing and made us so comfortable. On our wedding day, we barely noticed him, but he caught every precious moment. Truly professional and artistic!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            What Our Couples Say
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Real testimonials from real couples who trusted us with their most
            important day
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-soft-gray p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-rose-gold/30" />

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-charcoal">
                    {testimonial.name}
                  </h4>
                  <p className="text-charcoal/60 text-sm">
                    {testimonial.location}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-rose-gold fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-charcoal/80 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
