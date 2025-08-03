import React from "react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Happy couple wedding portrait",
    },
    {
      src: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Candid wedding moment",
    },
    {
      src: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Emotional wedding ceremony",
    },
    {
      src: "https://images.pexels.com/photos/1445253/pexels-photo-1445253.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Pre-wedding outdoor shoot",
    },
    {
      src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Traditional wedding ceremony",
    },
    {
      src: "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      alt: "Wedding ring exchange",
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-soft-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
            Our Wedding Portfolio
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            A glimpse into the beautiful moments we've captured for couples
            across Vizianagaram. Each photo tells a unique love story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-rose-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-gold/90 transition-colors"
          >
            See More & Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
