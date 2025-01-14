import React from "react";
import Logo from "../components/Logo";

const CallToAction = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white to-gray-100">
      <div className="w-full max-w-4xl mx-auto text-center space-y-12">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <Logo />
        </div>
        
        <div className="space-y-8">
          <h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            Join EatsBoost and Redefine Your Eating Out Experience
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            Available on both iOS and Android
          </p>
        </div>

        <p 
          className="text-2xl md:text-3xl font-semibold text-gray-800 mt-12 animate-fade-up opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          Ask the server for a Boost Card and Download the App!
        </p>
      </div>
    </div>
  );
};

export default CallToAction;