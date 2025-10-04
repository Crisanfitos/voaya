export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[var(--foreground)] text-center">
          Hola, ¿en qué puedo ayudarte hoy?
        </h2>

        <div className="space-y-6">
          {/* --- BARRA DE BÚSQUEDA PRINCIPAL --- */}
          <div className="relative">
            <input
              type="text"
              placeholder="Escribe tu consulta o pregunta aquí..."
              className="w-full p-5 pl-14 text-lg bg-[var(--surface)] text-[var(--foreground)] border-2 border-[var(--border)] rounded-full outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition"
            />
            <svg
              className="w-6 h-6 absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          {/* --- BOTÓN ENVIAR --- */}
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-md">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}