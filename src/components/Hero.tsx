import React from "react";
import Logo from "./Logo";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gradient-background">
      <div className="text-center space-y-8">
        <Logo />
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Introducing EatsBoost
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Get Rewarded for your loyalty with personalized offers from the eateries you love
        </p>
      </div>
    </div>
  );
};

export default Hero;