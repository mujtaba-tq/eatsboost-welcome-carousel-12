import React from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const WhatIsEatsBoost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <BackButton />
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-black animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            A Loyalty App Like No Other. Built to Redefine the Dining Experience.
          </h1>

          <p 
            className="text-2xl md:text-3xl text-black font-medium animate-fade-up opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            Rethink loyalty altogether, EatsBoost is a completly different experience, no boring points per dollar
          </p>

          <div className="space-y-6 text-left animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg md:text-xl text-black">
              We haven't been completly honest with you. You'll notice that nowhere have we stated that we're a loyalty app, because we're not. EatsBoost is a completely different platform, that abandons the same old points per dollar format that has existed for years
            </p>
            
            <p className="text-lg md:text-xl text-black font-medium">
              Even though we're different, our goals for you remain the same:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl text-black">
              <li>Help you make more money</li>
              <li>Make your customers happy and retain them</li>
              <li>Put something in your customers hand that revitalizes the way they experience dining</li>
            </ul>
          </div>
          
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