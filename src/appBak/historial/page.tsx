import { PageContainer } from "../components/PageContainer";

export default function HistorialPage() {
  const historial = [
    { id: 1, fecha: "2025-10-04", consulta: "¿Cómo crear una aplicación en Next.js?", respuestas: 3 },
    { id: 2, fecha: "2025-10-03", consulta: "Mejores prácticas de CSS", respuestas: 5 },
    { id: 3, fecha: "2025-10-02", consulta: "Diferencias entre React y Vue", respuestas: 2 },
    { id: 4, fecha: "2025-10-01", consulta: "Optimización de rendimiento web", respuestas: 4 },
  ];

  return (
    <PageContainer title="📋 Historial">
      <div className="space-y-4">
        <p className="text-[var(--text-secondary)] mb-6">
          Aquí puedes revisar todas tus consultas anteriores
        </p>

        {historial.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)] hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {item.consulta}
              </h3>
              <span className="text-sm text-[var(--text-secondary)]">
                {item.fecha}
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              {item.respuestas} respuestas generadas
            </p>
          </div>
        ))}

        <button className="w-full mt-6 px-4 py-3 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity">
          Cargar más
        </button>
      </div>
    </PageContainer>
  );
}
