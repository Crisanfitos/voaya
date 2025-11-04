"use client";

import React, { useState, useCallback } from 'react';
import ChatView from './components/ChatView';
import PlanningView from './components/PlanningView';
import ResultsView from './components/ResultsView';
import { TravelBrief, TravelPlan } from './types';
import { generatePlan } from './services/geminiService'; // Asumiremos que esta función existe

// Definimos los estados posibles de la aplicación
type AppPhase = 'SEARCH' | 'CHAT' | 'PLANNING' | 'RESULTS';

export default function Home() {
  // --- ESTADOS ---
  // El estado 'phase' controla qué componente principal se muestra
  const [phase, setPhase] = useState<AppPhase>('SEARCH');
  
  // Almacena el resumen del chat para pasarlo a la generación del plan
  const [brief, setBrief] = useState<TravelBrief | null>(null);
  
  // Almacena el plan de viaje final
  const [plan, setPlan] = useState<TravelPlan | null>(null);
  
  // Almacena el mensaje de error, si lo hay
  const [error, setError] = useState<string | null>(null);
  
  // Almacena la consulta inicial del usuario desde la barra de búsqueda
  const [initialQuery, setInitialQuery] = useState("");
  
  // Almacena el valor del input de la barra de búsqueda
  const [searchInputValue, setSearchInputValue] = useState("");

  // --- MANEJADORES DE EVENTOS ---

  /**
   * Se llama cuando el usuario envía la barra de búsqueda inicial.
   * Guarda la consulta y cambia la fase a 'CHAT'.
   */
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInputValue.trim()) return;
    
    setInitialQuery(searchInputValue);
    setPhase('CHAT');
  };

  /**
   * Se llama cuando el componente ChatView ha finalizado.
   * Recibe el resumen ('brief'), lo guarda, y pasa a la fase 'PLANNING'.
   */
  const handleChatComplete = useCallback(async (completedBrief: TravelBrief) => {
    setBrief(completedBrief);
    setPhase('PLANNING');
    setError(null);

    try {
      // Llama a la función que genera el plan
      // Esta es la lógica que tenías en App.tsx
      const generatedPlan = await generatePlan(completedBrief);
      setPlan(generatedPlan);
      setPhase('RESULTS');
    } catch (e: any) {
      console.error(e);
      setError('Sorry, something went wrong while creating your plan. Please try again.');
      // Si falla, volvemos a la fase de chat
      setPhase('CHAT');
    }
  }, []); // El array de dependencias vacío asegura que la función no se recrea

  /**
   * Se llama desde ResultsView para reiniciar la aplicación.
   * Vuelve a la fase 'SEARCH' y resetea todos los estados.
   */
  const handleReset = () => {
    setPhase('SEARCH');
    setBrief(null);
    setPlan(null);
    setError(null);
    setInitialQuery("");
    setSearchInputValue("");
  };

  // --- RENDERIZADO CONDICIONAL ---

  /**
   * Renderiza el contenido principal basado en la 'phase' actual.
   */
  const renderContent = () => {
    switch (phase) {
      case 'SEARCH':
        return (
          // Tu HTML original de la barra de búsqueda, ahora dentro de un <form>
          <div className="w-full max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)] text-center">
              ¡Hola! Soy Voaya. Describe el viaje de tus sueños y te ayudaré a planificarlo.
            </h2>
            <div className="space-y-6">
              <form onSubmit={handleSearchSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="'Un viaje a Japón para 3 personas en verano'"
                    value={searchInputValue}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    className="w-full p-5 pl-14 text-lg bg-[var(--surface)] text-[var(--foreground)] border-2 border-[var(--border)] rounded-full outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
                  />
                  <svg
                    className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-md"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        );

      case 'CHAT':
        return (
          <ChatView 
            onChatComplete={handleChatComplete} 
            error={error}
            initialQuery={initialQuery} // Pasamos la consulta inicial al chat
          />
        );
        
      case 'PLANNING':
        return <PlanningView />;

      case 'RESULTS':
        return plan ? <ResultsView plan={plan} onReset={handleReset} /> : null;
        
      default:
        // Por defecto, volvemos a la búsqueda
        setPhase('SEARCH');
        return null;
    }
  };

  return (
    // Contenedor principal
    <main className="flex items-center justify-center min-h-full">
      {renderContent()}
    </main>
  );
}

