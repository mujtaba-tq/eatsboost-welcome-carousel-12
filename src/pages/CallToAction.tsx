import React from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CallToAction = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  const handleDownload = () => {
    if (isIOS) {
      window.location.href = "https://apps.apple.com/app/eatsboost"; // Replace with actual App Store URL
    } else {
      window.location.href = "https://play.google.com/store/apps/details?id=com.eatsboost"; // Replace with actual Play Store URL
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center p-6 gradient-background">
      <div className="w-full max-w-4xl mx-auto text-center">
        <Logo />
        
        <div className="mt-12 space-y-8">
          <h1 
            className="text-3xl md:text-5xl font-bold text-black animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Ask the staff for a Boost Card, and download the app
          </h1>

          <div 
            className="mt-8 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={handleDownload}
              className="bg-white text-eatsboost-orange hover:bg-white/90 transform hover:scale-105 transition-transform duration-200 text-xl px-8 py-6 rounded-full shadow-lg"
            >
              <Download className="mr-2 h-6 w-6" />
              Download {isIOS ? "on the App Store" : "on Google Play"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;