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
            Reward Your Regulars. Increase Lifetime Value. Boost Your Sales.
            <span className="block mt-2 text-xl md:text-2xl italic">You Focus on the Food, We Got the Loyalty</span>
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
                <p className="text-black text-lg">Purchase Boost Cards from EatsBoost in bulk, and sell them for <span className="font-bold">$8</span>. This gives customers the ability to add your eatery to their profile. <span className="font-bold">Cover the upfront investment</span>, and generate a nice profit.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-eatsboost-yellow flex-shrink-0 mt-1" />
                  <p className="text-black text-sm">
                    Think of it like a Costco-style model to access your eatery on the <span className="font-bold">EatsBoost Network</span>. If customers have already paid for the privilege of adding your eatery and generating offers, they are more likely to keep coming back, and as a result spend more.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">2</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Customers Complete Regular Visits</h2>
                <p className="text-black text-lg">Before users can enter a <span className="font-bold">Boost Cycle</span> and generate offers (more on that below), they must complete a <span className="font-bold">predetermined number of visits set by you</span>. Customers send us a picture of their receipts, and we approve their visits.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-eatsboost-yellow flex-shrink-0 mt-1" />
                  <p className="text-black text-sm">
                    This way, we target <span className="font-bold">regulars</span>, who are the <span className="font-bold">lifeblood</span> of your business. We filter out <span className="font-bold">deal-hunters</span> and make sure that we only target customers who have the highest <span className="font-bold">lifetime value</span>, and make it even higher.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">3</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Customers Generate Offers & Redeem</h2>
                <p className="text-black text-lg">This is our secret sauce. After completing visits, customers can start a <span className="font-bold">Boost Cycle*</span> and generate <span className="font-bold">2 offers</span> every <span className="font-bold">7 days</span>, which get loaded into their profile <span className="font-bold">but</span> also expire after <span className="font-bold">7 days</span>. When they are ready to use them, they activate the offer in the app, and show your staff to redeem. We'll schedule a short <span className="font-bold">10-min</span> meeting to set guidelines, and we'll take care of creating the best, <span className="font-bold">AI-driven</span> offers for you.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-eatsboost-yellow flex-shrink-0 mt-1" />
                  <p className="text-black text-sm">
                    Giving customers the ability to generate offers introduces a fun and exciting way to keep them coming back. Offer expiry adds an element of <span className="font-bold">urgency</span>.
                  </p>
                </div>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm">
                    <span className="font-bold">Boost Cycle:</span> A period of 30 days where users can generate 2 offers per week
                  </p>
                  <p className="text-black text-sm mt-2">
                    <span className="font-bold">Offer:</span> A discount on a regular priced item (i.e. 25% off a medium pizza). Offers can be either <span className="font-bold">Level 1</span>, <span className="font-bold">Level 2</span>, or <span className="font-bold">Level 3</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">4</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Billing</h2>
                <p className="text-black text-lg">Our billing cycle runs from the <span className="font-bold">1st</span> of the month to the <span className="font-bold">30th</span> or <span className="font-bold">31st</span> of the month. At the end of the billing cycle, we send you an invoice that details all the offers redeemed in the month.</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-eatsboost-yellow flex-shrink-0 mt-1" />
                  <p className="text-black text-sm">
                    Our total charges consist of a small monthly subscription, charges per offer redeemed, and charges for active user fees. Please contact sales in the next page for further details.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">5</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Boost Your Sales</h2>
                <p className="text-black text-lg">Enjoy the full benefits of <span className="font-bold">tapping</span> into the network of customers around you, and for the first time, engage with them in an <span className="font-bold">exciting</span> and <span className="font-bold">exclusive</span> way</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-eatsboost-yellow flex-shrink-0 mt-1" />
                  <p className="text-black text-sm">
                    Leave all the complex and time consuming efforts to us, and focus on delivering <span className="font-bold">excellent</span> food and service
                  </p>
                </div>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm">
                    The best part? We're offering a <span className="font-bold">90-day money back guarantee</span>. If at any point, you are unsatisfied with EatsBoost, we will issue you a 100% hassle-free refund
                  </p>
                </div>
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