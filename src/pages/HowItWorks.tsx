import React from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <div className="w-full max-w-4xl mx-auto">
        <Logo />
        
        <div className="mt-12 space-y-8 text-center">
          <h1 
            className="text-2xl md:text-4xl font-bold text-white animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Buy Your Boost Card, Complete Your Monthly Visits, Generate Offers, Redeem.
            <span className="block mt-2 text-xl md:text-2xl italic">As Amazing as it Seems</span>
          </h1>

          <div 
            className="mt-16 space-y-12 text-left animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">1</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Buy a Boost Card</h2>
                <p className="text-white text-lg">Each Eatery has their own Boost Card, priced at just $2.49.</p>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">2</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Scan the QR Code in the App</h2>
                <p className="text-white text-lg">Add the eatery by scanning the QR code on the back</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-white text-sm italic">
                    Note: Keep your Boost Card safe, each boost card is unique to you and you will need it for exciting new features, soon to be launched.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">3</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Complete Regular Visits</h2>
                <p className="text-white text-lg">Each eatery has a predetermined number of visits that must be completed before you can generate offers, log visits in the app!</p>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">4</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Generate Offers</h2>
                <p className="text-white text-lg">Generate offers once every 7 days (redeem before they expire!). Offers get better over time, so keep generating and redeeming!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => navigate("/")}
            className="bg-white text-eatsboost-orange hover:bg-white/90 animate-fade-up opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            Back to Home <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;