
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
          A Smarter, Simpler Way to Engage With Your Customers, and <span className="font-bold">Boost</span> your sales
        </h2>
        <p className="text-lg md:text-xl text-black max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          <span className="font-bold">McDonald's</span> and <span className="font-bold">Starbucks</span> have beautiful loyalty programs that help them make billions by driving <span className="font-bold">repeat</span> business - both huge companies with lots of technical expertise and money. <span className="font-bold">But what about local restaurants?</span>
        </p>
        <p className="text-lg md:text-xl text-black max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.45s" }}>
          Loyalty programs are <span className="font-bold">extremely</span> beneficial and <span className="font-bold">boost</span> sales. Every restaurant/cafe should be able to benefit from them, but it should be seamless, and require no extra effort.
        </p>
        <p className="text-lg md:text-xl text-black max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: "0.47s" }}>
          EatsBoost is a <span className="font-bold">one-of-a-kind</span> <span className="font-bold underline">customer engagement platform</span> that does all the <span className="font-bold">heavy-lifting</span> to provide you with all the benefits, but <span className="font-bold">none of the work</span>. We manage everything, so you can focus on what <span className="font-bold">really</span> matters
        </p>
        <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          <p className="text-2xl md:text-3xl font-bold text-black">
            All the benefits. Set it and Forget it. You'll love it, your customers will love it
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
