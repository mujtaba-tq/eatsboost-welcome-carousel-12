import React from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
const WhatIsEatsBoost = () => {
  const navigate = useNavigate();
  return <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <BackButton />
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-black animate-fade-up opacity-0" style={{
          animationDelay: "0.2s"
        }}>
            A Loyalty App Like No Other. Built to Redefine the Dining Experience.
          </h1>

          <p className="text-2xl md:text-3xl text-black font-medium animate-fade-up opacity-0" style={{
          animationDelay: "0.3s"
        }}>
            <span className="font-bold">Reimagine</span> what a loyalty program can be. EatsBoost is a <span className="font-bold">completely</span> different experience. We're ditching the boring old points per dollar system
          </p>

          <div className="space-y-6 text-left animate-fade-up opacity-0" style={{
          animationDelay: "0.4s"
        }}>
            <p className="text-lg md:text-xl text-black">
              You'll notice that we haven't been calling ourselves a <span className="font-bold">loyalty program</span> - because that's not what <span className="font-bold">EatsBoost</span> is. <span className="font-bold">EatsBoost</span> is something <span className="font-bold">completely</span> different. We're calling ourselves a <span className="font-bold underline">customer engagement platform</span>.
            </p>
            
            <p className="text-lg md:text-xl text-black font-medium">
              Here are our goals for you:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl text-black">
              <li>Boost your sales</li>
              <li>Keep your customers happy and <span className="font-bold">keep them coming back</span></li>
              <li>Give your customers something that <span className="font-bold">reshapes</span> the way they experience dining</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button style={{
          animationDelay: "0.8s"
        }} onClick={() => navigate("/how-it-works")} className="animate-fade-up opacity-0 bg-eatsboost-orange hover:bg-eatsboost-orange/90 bg-slate-50 text-slate-950">
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>;
};
export default WhatIsEatsBoost;