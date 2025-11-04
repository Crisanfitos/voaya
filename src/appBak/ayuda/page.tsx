import { PageContainer } from "../components/PageContainer";

export default function AyudaPage() {
  return (
    <PageContainer title="❓ Ayuda">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-4">
            <details className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
              <summary className="font-semibold cursor-pointer text-[var(--foreground)]">
                ¿Cómo puedo hacer una pregunta?
              </summary>
              <p className="mt-3 text-[var(--text-secondary)]">
                Simplemente escribe tu consulta en la barra de búsqueda principal y presiona Enter.
                Nuestro asistente de IA procesará tu pregunta y te dará una respuesta detallada.
              </p>
            </details>

            <details className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
              <summary className="font-semibold cursor-pointer text-[var(--foreground)]">
                ¿Puedo guardar mis conversaciones?
              </summary>
              <p className="mt-3 text-[var(--text-secondary)]">
                Sí, todas tus conversaciones se guardan automáticamente en el historial.
                Puedes acceder a ellas en cualquier momento desde el menú lateral.
              </p>
            </details>

            <details className="p-4 bg-[var(--background)] rounded-lg border border-[var(--border)]">
              <summary className="font-semibold cursor-pointer text-[var(--foreground)]">
                ¿Cómo cambio el idioma?
              </summary>
              <p className="mt-3 text-[var(--text-secondary)]">
                Ve a Configuración desde el menú lateral y selecciona tu idioma preferido
                en la sección de Preferencias de usuario.
              </p>
            </details>
          </div>
        </section>

        <section className="pt-6 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            ¿Necesitas más ayuda?
          </h2>
          <p className="text-[var(--text-secondary)] mb-4">
            Si no encuentras la respuesta que buscas, no dudes en contactarnos.
          </p>
          <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity">
            Contactar soporte
          </button>
        </section>
      </div>
    </PageContainer>
  );
}
