import React, { useState } from "react";
import Logo from "../components/Logo";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";

// Mock data - in a real app, this would come from an API
const mockEateries = [
  { id: 1, name: "Roy's Pizza", boostCardsLeft: 50 },
  { id: 2, name: "Burger Palace", boostCardsLeft: 25 },
  { id: 3, name: "Sushi Haven", boostCardsLeft: 75 },
  { id: 4, name: "Taco Express", boostCardsLeft: 30 },
];

const EaterySearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center">
          <Logo />
        </div>
        
        <div className="mt-12 space-y-8 text-center">
          <h1 className="text-4xl font-bold text-black animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            View Eateries on the <span className="font-bold">EatsBoost Network</span>
          </h1>

          <div className="w-full max-w-xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Search eateries..." />
              <CommandGroup className="max-h-[300px] overflow-auto">
                {mockEateries.map((eatery) => (
                  <CommandItem
                    key={eatery.id}
                    value={eatery.name}
                    className="flex justify-between items-center cursor-pointer"
                  >
                    <span>{eatery.name}</span>
                    <span className="text-sm text-gray-500">
                      {eatery.boostCardsLeft} Boost Cards left
                    </span>
                  </CommandItem>
                ))}
                <CommandEmpty className="p-4 text-center">
                  Can't find your favorite eatery? Let us know, and we will notify you once we add it!
                </CommandEmpty>
              </CommandGroup>
            </Command>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EaterySearch;