import React from "react";
import Logo from "../components/Logo";

const CallToAction = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6">
      <div className="w-full max-w-4xl mx-auto">
        <Logo />
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