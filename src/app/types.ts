// --- Tipos para el Chat ---

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TravelBrief {
  initialQuery: string;
  chatHistory: ChatMessage[];
}

// --- Tipos para el Plan de Viaje (Resultados) ---

export interface TravelPlanSummary {
  destination: string;
  dates: string;
  travelers: string;
  style: string;
}

export interface FlightOption {
  type: string;
  price: string;
  details: string;
  link: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  accommodation: string;
}

export interface GroundingAttribution {
  uri: string;
  title: string;
}

export interface TravelPlan {
  summary: TravelPlanSummary;
  flights: FlightOption[];
  itinerary: ItineraryDay[];
  mapUrl: string;
  groundingAttribution: GroundingAttribution[];
}
