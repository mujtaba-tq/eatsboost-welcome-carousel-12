import React from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhatIsEatsBoost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-black animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            One App. All Your Favourite Eateries. Personalized Rewards
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-black leading-relaxed animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            With EatsBoost, complete regular visits to the eateries you love, and generate weekly offers that reward you for your loyalty
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            className="animate-fade-up opacity-0 bg-eatsboost-orange text-white hover:bg-eatsboost-orange/90"
            style={{ animationDelay: "0.8s" }}
            onClick={() => navigate("/how-it-works")}
          >
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatIsEatsBoost;