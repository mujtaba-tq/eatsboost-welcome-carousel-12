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
          McDonald's and Starbucks have beautiful loyalty programs that help them make billions by driving repeat business. Huge companies with lots of technical talent and money. <span className="font-bold text-xl">But what about local restaurants?</span>
        </p>
        <p className="text-lg md:text-xl text-black max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.45s" }}>
          Loyalty programs are extremely beneficial and make a real difference. But running a successful loyalty program is really hard, and shouldn't be something you should worry about. Your focus should be on serving <span className="font-bold">amazing</span> food and delivering <span className="font-bold">excellent</span> service.
        </p>
        <p className="text-lg md:text-xl text-black max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.47s" }}>
          We built EatsBoost to help you with your mission. We want you to focus on what matters, while you leave the complexities of running a loyalty program to us
        </p>
        <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 animate-pulse">
            Enjoy the benefits, let us do the heavy lifting, just focus on serving great food
          </p>
        </div>
        <img 
          src="/lovable-uploads/8f2ff72b-8d92-4050-bab7-8373c2b55105.png" 
          alt="Heart Icon"
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