import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 gradient-background">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
        <Logo />
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Introducing EatsBoost
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Get Rewarded for your loyalty with personalized offers from the eateries you love
        </p>
      </div>
      <Button 
        className="animate-fade-up opacity-0 bg-white text-black hover:bg-gray-100"
        style={{ animationDelay: "0.6s" }}
      >
        Next
        <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default Hero;