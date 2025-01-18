import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-between p-6 gradient-background">
      <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 py-12">
        <Logo />
        <h1 className="text-4xl md:text-6xl font-bold text-black animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Introducing EatsBoost
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-black max-w-4xl animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
          A Smarter, Simpler Way to Reap the Benefits of Loyalty Programs
        </h2>
        <p className="text-lg md:text-xl text-black max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          McDonald's and Starbucks have beautiful loyalty programs that help them make billions by driving repeat business. Huge companies with lots of technical talent and money. But what about local restaurants?
        </p>
        <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 animate-pulse">
            Rewards for Regulars. You Deserve it.
          </p>
        </div>
        <img 
          src="/lovable-uploads/7415354b-1912-441f-9a80-713ba069abd7.png" 
          alt="Star Badge"
          className="w-24 h-24 animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        />
      </div>
      <Button 
        className="animate-fade-up opacity-0 bg-white text-black hover:bg-gray-100"
        style={{ animationDelay: "0.7s" }}
        onClick={() => navigate("/what-is-eatsboost")}
      >
        Next
        <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default Hero;