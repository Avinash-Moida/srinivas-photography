import React from "react";
import { Camera, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-charcoal/90"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Capture Your Perfect Day?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's create beautiful memories together. Get in touch today to
            check availability and discuss your wedding photography needs.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2 text-rose-gold" />
                <p className="font-semibold">Call or WhatsApp</p>
                <p className="text-white/80">+91 6305786134</p>
              </div>
              <div>
                <Mail className="h-8 w-8 mx-auto mb-2 text-rose-gold" />
                <p className="font-semibold">Email Us</p>
                <p className="text-white/80">hello@srinivasphotography.com</p>
              </div>
              <div>
                <MapPin className="h-8 w-8 mx-auto mb-2 text-rose-gold" />
                <p className="font-semibold">Based In</p>
                <p className="text-white/80">Vizianagaram, AP</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/916305786134?text=Hi%20Srinivas%2C%20I%27m%20interested%20in%20your%20wedding%20photography%20services.%20Can%20you%20please%20share%20your%20availability%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-rose-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Check My Availability
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Camera className="h-6 w-6 text-rose-gold" />
              <span className="text-lg font-serif font-bold">
                Srinivas Photography
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2024 Srinivas Photography. Capturing love stories in
                Vizianagaram.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Professional Wedding Photography | Candid & Traditional
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
