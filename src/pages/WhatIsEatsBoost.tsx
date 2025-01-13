import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { removeBackground, loadImage } from "../utils/imageUtils";
import { useToast } from "@/components/ui/use-toast";

const WhatIsEatsBoost = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");

  useEffect(() => {
    const processImage = async () => {
      try {
        // Fetch the original image
        const response = await fetch("/lovable-uploads/22a107bc-6629-4c14-8c56-70ac137de28f.png");
        const blob = await response.blob();
        
        // Load the image
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error("Error processing image:", error);
        toast({
          title: "Error",
          description: "Failed to process image. Using original image instead.",
          variant: "destructive",
        });
        setProcessedImageUrl("/lovable-uploads/22a107bc-6629-4c14-8c56-70ac137de28f.png");
      }
    };

    processImage();

    // Cleanup
    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [toast]);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            One App. All Your Favourite Eateries. Personalized Rewards
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            With EatsBoost, complete regular visits to the eateries you love, and generate weekly offers that reward you for your loyalty
          </p>

          <div 
            className="w-full max-w-md mx-auto mt-12 animate-fade-up opacity-0 shadow-2xl rounded-[48px]"
            style={{ animationDelay: "0.6s" }}
          >
            <img 
              src={processedImageUrl || "/lovable-uploads/22a107bc-6629-4c14-8c56-70ac137de28f.png"}
              alt="EatsBoost App Interface showing various restaurant offers"
              className="w-full h-auto rounded-[48px]"
            />
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