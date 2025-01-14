import React from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center">
          <Logo />
        </div>
        
        <div className="mt-12 space-y-8 text-center">
          <h1 
            className="text-2xl md:text-4xl font-bold text-black animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Buy Your Boost Card, Complete Your Monthly Visits, Generate Offers, Redeem.
            <span className="block mt-2 text-xl md:text-2xl italic">As Amazing as it Seems</span>
          </h1>

          <div 
            className="mt-16 space-y-24 text-left animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">1</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Buy a Boost Card</h2>
                <p className="text-black text-lg">Each Eatery has their own Boost Card, priced at just <span className="font-bold">$2.49</span>.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
                    Note: Each eatery has a limited number of Boost Cards. Once they're gone, they're gone!
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f" 
                  alt="Boost Card" 
                  className="mt-6 w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">2</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Scan the QR Code in the App</h2>
                <p className="text-black text-lg">Add the eatery by scanning the QR code on the back</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
                    Note: Keep your Boost Card safe, each boost card is unique to you and you will need it for exciting new features, soon to be launched.
                  </p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1438565434616-3ef039228b15" 
                  alt="QR Code scanning" 
                  className="mt-6 w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">3</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Complete Regular Visits</h2>
                <p className="text-black text-lg">Each eatery has a predetermined number of visits that must be completed before you can generate offers, log visits in the app!</p>
                <img 
                  src="https://images.unsplash.com/photo-1501286353178-1ec881214838" 
                  alt="Regular visits" 
                  className="mt-6 w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">4</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Generate Offers</h2>
                <p className="text-black text-lg">Generate offers once every 7 days (redeem before they expire!). Offers get better over time, so keep generating and redeeming!</p>
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
                  alt="Generate offers" 
                  className="mt-6 w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">5</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Redeem</h2>
                <p className="text-black text-lg">When ready to redeem, activate the offer in the app and show the server</p>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Redeeming offer" 
                  className="mt-6 w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-24 text-center space-y-12">
          <div 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black/80 to-black text-transparent bg-clip-text animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            Ready to Join EatsBoost?
          </div>
          
          <div className="space-y-8">
            <div 
              className="text-xl md:text-2xl font-semibold animate-fade-up opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              1) Ask the Staff for a Boost Card
            </div>
            
            <div 
              className="space-y-4 animate-fade-up opacity-0"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-xl md:text-2xl font-semibold">
                2) Download the app
              </div>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://apps.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/22a107bc-6629-4c14-8c56-70ac137de28f.png" 
                    alt="Download on App Store" 
                    className="h-12"
                  />
                </a>
                <a 
                  href="https://play.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/lovable-uploads/7415354b-1912-441f-9a80-713ba069abd7.png" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
