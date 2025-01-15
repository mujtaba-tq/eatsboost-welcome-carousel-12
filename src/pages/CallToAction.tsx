import React from "react";
import Logo from "../components/Logo";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center flex-grow">
            <Logo />
          </div>
          <Button 
            onClick={() => navigate("/eatery-search")}
            className="bg-eatsboost-orange hover:bg-eatsboost-yellow text-white hover:text-black transition-all duration-300"
          >
            <Search className="mr-2 h-4 w-4" />
            Eatery Search
          </Button>
        </div>

        <div className="mt-12 space-y-8 text-center">
          <h1 className="text-4xl font-bold text-black animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Ask the server for a Boost Card and Download the App!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;