import React from "react";
import Logo from "../components/Logo";
import { Button } from "../components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
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
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Sell a Boost Card</h2>
                <p className="text-black text-lg">Purchase Boost Cards from EatsBoost in bulk, and sell them for <span className="font-bold">$8</span>. This gives customers the ability to add your eatery to their profile.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-eatsboost-yellow flex-shrink-0 mt-1" />
                  <p className="text-black text-sm">
                    Think of it like a Costco-style model to access your eatery on the <span className="font-bold">EatsBoost Network</span>. If customers have already paid for the privilege of adding your eatery and generating offers, they are more likely to dine here, and as a result spend more.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">2</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Customer Complete Regular Visits</h2>
                <p className="text-black text-lg">Before users can enter a <span className="font-bold">Boost Cycle</span> and generate offers (more on that below), they must complete a <span className="font-bold">predetermined number of visits set by you</span>. Customers send us a picture of their receipts, and we approve their visits.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-eatsboost-yellow flex-shrink-0 mt-1" />
                  <p className="text-black text-sm">
                    This way, we target <span className="font-bold">regulars</span>, who are the <span className="font-bold">lifeblood</span> of your business. We filter out <span className="font-bold">deal-hunters</span> and make sure that we only target customers who have the highest <span className="font-bold">lifetime value</span>, and make it higher.
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
                <p className="text-black text-lg">Each eatery will have a few number of regular visits (with a minimum spend) to complete before being able to generate offers. Log your visits in the app to enter a <span className="font-bold">Boost Cycle</span>*, and begin generating offers.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
                    <span className="font-bold">Example:</span> Papa's Pizzeria - 2 regular visits & $9.99 spend per visit to unlock <span className="font-bold">Boost Cycle</span>.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
                    <span className="font-bold">Boost Cycle:</span> A period of 30 days where you can generate 2 offers every 7 days. Once a <span className="font-bold">Boost Cycle</span> ends, complete visits to begin a new <span className="font-bold">Boost Cycle</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">4</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Generate Offers</h2>
                <p className="text-black text-lg">You can generate <span className="font-bold">two offers</span> once every <span className="font-bold">7 days</span> (redeem before they expire!). Offers get better over time, so keep generating and redeeming!</p>
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
