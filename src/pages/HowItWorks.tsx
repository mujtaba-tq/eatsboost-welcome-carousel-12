import React from "react";
import Logo from "../components/Logo";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <BackButton />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center">
          <Logo />
        </div>
        
        <div className="mt-12 space-y-8 text-center">
          <h1 
            className="text-2xl md:text-4xl font-bold text-black animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Buy a Boost Card, Complete & Log Visits, Enter a Boost Cycle, Generate Offers, Redeem, Repeat.
            <span className="block mt-2 text-xl md:text-2xl italic">Reshape Your Dining Experience</span>
          </h1>

          <div 
            className="mt-16 space-y-24 text-left animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">1</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Buy a Boost Card</h2>
                <p className="text-black text-lg">Each eatery has an <span className="font-bold">exclusive</span> Boost Card available for purchase. Buy your very own for <span className="font-bold">$4.99</span>. The Boost Card is a one time purchase, and pays for itself when you use about 5 offers!</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
                    <span className="font-bold">Note:</span> Each eatery has a limited number of Boost Cards. Once they're gone, they're gone!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">2</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Scan the QR Code in the App</h2>
                <p className="text-black text-lg">Add the eatery by scanning the QR code on the back of your <span className="font-bold">Boost Card</span></p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
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
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Complete Regular Visits</h2>
                <p className="text-black text-lg">Each eatery will have a few number of regular visits (with a minimum spend) to complete being able to generate offers. Log your visits in the app to enter a <span className="font-bold">Boost Cycle</span>, and generate 2 offers every <span className="font-bold">7 days</span>!</p>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">4</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Generate Offers</h2>
                <p className="text-black text-lg">Generate offers once every 7 days (redeem before they expire!). Offers get better over time, so keep generating and redeeming!</p>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">5</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Redeem</h2>
                <p className="text-black text-lg">When ready to redeem, activate the offer in the app and show the server</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button 
            className="animate-fade-up opacity-0 bg-white text-black hover:bg-gray-100"
            style={{ animationDelay: "0.6s" }}
            onClick={() => navigate("/download")}
          >
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
