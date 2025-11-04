"use client";

import React, { useState } from 'react';
import { TravelPlan } from '@/app/types';

interface ResultsViewProps {
    plan: TravelPlan;
    onReset: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ plan, onReset }) => {
    const [activeDay, setActiveDay] = useState<number | null>(1);

    return (
        <div className="w-full max-w-5xl mx-auto bg-[#f5f0e8] rounded-2xl shadow-2xl overflow-hidden border border-[#c4b5a0] my-8">
            <header className="p-8 bg-[#d4a574] border-b border-[#c4b5a0]">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-[#f5f0e8]">Your Itinerary is Ready!</h1>
                        <p className="text-[#f5f0e8]/90 mt-1 text-lg">{plan.summary.destination} for {plan.summary.travelers}</p>
                    </div>
                    <button
                        onClick={onReset}
                        className="px-6 py-2 rounded-full bg-[#c89550] text-[#f5f0e8] font-semibold hover:bg-[#c89550]/80 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#c89550]">
                        Plan Another Trip
                    </button>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 bg-[#f5f0e8]/90 rounded-lg border border-[#c4b5a0]">
                        <p className="text-sm text-[#6b5d4f]">Destination</p>
                        <p className="font-bold text-lg text-[#3d3d3d]">{plan.summary.destination}</p>
                    </div>
                    <div className="p-4 bg-[#f5f0e8]/90 rounded-lg border border-[#c4b5a0]">
                        <p className="text-sm text-[#6b5d4f]">Dates</p>
                        <p className="font-bold text-lg text-[#3d3d3d]">{plan.summary.dates}</p>
                    </div>
                    <div className="p-4 bg-[#f5f0e8]/90 rounded-lg border border-[#c4b5a0]">
                        <p className="text-sm text-[#6b5d4f]">Travelers</p>
                        <p className="font-bold text-lg text-[#3d3d3d]">{plan.summary.travelers}</p>
                    </div>
                    <div className="p-4 bg-[#f5f0e8]/90 rounded-lg border border-[#c4b5a0]">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Style</p>
                        <p className="font-bold text-lg">{plan.summary.style}</p>
                    </div>
                </div>
            </header>

            <main className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                            Flight Options
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {plan.flights.map((flight, index) => (
                                <div key={index} className="p-4 border border-[#c4b5a0] rounded-lg bg-[#f5f0e8]">
                                    <p className="font-semibold text-[#c89550]">{flight.type}</p>
                                    <p className="text-2xl font-bold my-1 text-[#3d3d3d]">{flight.price}</p>
                                    <p className="text-[#6b5d4f] text-sm mb-3">{flight.details}</p>
                                    <a href={flight.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center px-4 py-2 text-sm font-semibold rounded-md bg-[#c89550] text-[#f5f0e8] hover:bg-[#d4a574] transition">
                                        View Flight &rarr;
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v12a1 1 0 00.293.707L6 20.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v14.828L17.707 20.707A1 1 0 0018 20V4a1 1 0 00-.293-.707z" clipRule="evenodd" /></svg>
                            Day-by-Day Itinerary
                        </h2>
                        <div className="space-y-2">
                            {plan.itinerary.map((day) => (
                                <div key={day.day} className="border border-[#c4b5a0] rounded-lg overflow-hidden">
                                    <button onClick={() => setActiveDay(activeDay === day.day ? null : day.day)} className="w-full text-left p-4 bg-[#d4a574] hover:bg-[#c89550] transition flex justify-between items-center text-[#f5f0e8]">
                                        <span className="font-bold text-lg">Day {day.day}: {day.title}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform ${activeDay === day.day ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    {activeDay === day.day && (
                                        <div className="p-6 space-y-4 bg-[#f5f0e8]">
                                            <p><strong>Morning:</strong> {day.morning}</p>
                                            <p><strong>Afternoon:</strong> {day.afternoon}</p>
                                            <p><strong>Evening:</strong> {day.evening}</p>
                                            <p className="pt-2 border-t border-slate-200 dark:border-slate-700"><strong>Accommodation:</strong> <span className="text-slate-500 dark:text-slate-400">{day.accommodation}</span></p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="lg:col-span-1 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold mb-3 flex items-center gap-3 text-[#3d3d3d]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c89550]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                            Route Map
                        </h3>
                        <div className="aspect-w-1 aspect-h-1 bg-[#d4a574]/20 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/seed/travelmap/600/600" alt="Route map placeholder" className="w-full h-full object-cover" />
                        </div>
                        <a href={plan.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block w-full text-center px-4 py-3 font-semibold rounded-md bg-[#c89550] text-[#f5f0e8] hover:bg-[#d4a574] transition">
                            Open in Google Maps
                        </a>
                    </div>
                    {plan.groundingAttribution && plan.groundingAttribution.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
                                Sources
                            </h3>
                            <ul className="space-y-2 text-sm">
                                {plan.groundingAttribution.slice(0, 5).map((attr, index) => (
                                    <li key={index} className="truncate">
                                        <a href={attr.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-400 dark:hover:text-blue-300 transition" title={attr.title}>
                                            {attr.title || new URL(attr.uri).hostname}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>
            </main>
        </div>
    );
};

export default ResultsView;

