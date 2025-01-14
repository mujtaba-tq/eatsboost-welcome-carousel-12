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
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="aspect-[9/16] bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Phone Display 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Phone Display 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                alt="Phone Display 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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