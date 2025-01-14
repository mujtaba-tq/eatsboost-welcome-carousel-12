import React from "react";
import Logo from "../components/Logo";

const CallToAction = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-6 gradient-background overflow-hidden">
      <div className="w-full max-w-4xl mx-auto text-center space-y-12">
        <div className="animate-scale-in">
          <Logo />
        </div>
        
        <h1 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-black/90 to-black text-transparent bg-clip-text animate-fade-up opacity-0"
          style={{ animationDelay: "0.3s" }}
        >
          Join EatsBoost and Redefine Your Eating Out Experience
        </h1>

        <div 
          className="relative animate-fade-up opacity-0"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-eatsboost-orange/20 to-eatsboost-yellow/20 blur-xl rounded-full" />
          <p className="text-2xl md:text-3xl font-semibold relative">
            Available on both iOS and Android
          </p>
        </div>

        <div 
          className="flex justify-center space-x-6 pt-8 animate-fade-up opacity-0"
          style={{ animationDelay: "0.7s" }}
        >
          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/lovable-uploads/22a107bc-6629-4c14-8c56-70ac137de28f.png" 
              alt="Download on App Store" 
              className="h-16 md:h-20"
            />
          </a>
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/lovable-uploads/7415354b-1912-441f-9a80-713ba069abd7.png" 
              alt="Get it on Google Play" 
              className="h-16 md:h-20"
            />
          </a>
        </div>

        <div 
          className="pt-12 animate-fade-up opacity-0"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
            <p className="text-xl md:text-2xl font-medium text-black">
              Get your Boost Card today and start earning amazing rewards at your favorite eateries!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;