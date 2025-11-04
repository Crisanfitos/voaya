"use client";

import React, { useState, useEffect } from 'react';

const messages = [
  "Finding the best flights for you...",
  "Discovering hidden gems and local secrets...",
  "Mapping out your perfect route...",
  "Checking for the best travel deals...",
  "Crafting your personalized itinerary...",
  "Optimizing your travel times...",
  "Putting the final touches on your adventure...",
];

const PlanningView: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center p-8 bg-[#f5f0e8] rounded-2xl shadow-2xl border border-[#c4b5a0] h-[80vh]">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 border-t-[#c89550] border-4 rounded-full animate-spin"></div>
        <div className="w-full h-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#c89550]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-[#d4a574] mb-4">Planning your trip...</h2>
      <div className="h-10"> {/* Contenedor para altura fija */}
        <p className="text-[#6b5d4f] text-lg h-8 transition-opacity duration-500">
          {messages[currentMessageIndex]}
        </p>
      </div>
    </div>
  );
};

export default PlanningView;
