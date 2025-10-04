import { PageContainer } from "../components/PageContainer";

export default function ContactoPage() {
  return (
    <PageContainer title="📧 Contacto">
      <div className="space-y-8">
        <section>
          <p className="text-[var(--text-secondary)] mb-6">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-[var(--foreground)] font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label className="block text-[var(--foreground)] font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-[var(--foreground)] font-semibold mb-2">
                Asunto
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none">
                <option>Consulta general</option>
                <option>Soporte técnico</option>
                <option>Sugerencia</option>
                <option>Reportar un problema</option>
                <option>Colaboración</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--foreground)] font-semibold mb-2">
                Mensaje
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white focus:ring-2 focus:ring-[var(--primary)] outline-none resize-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Enviar mensaje
            </button>
          </form>
        </section>

        <section className="pt-6 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            Otras formas de contacto
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-[var(--text-secondary)]">
              <span>📧</span>
              <span>contacto@voaya.com</span>
            </div>
            <div className="flex items-center space-x-3 text-[var(--text-secondary)]">
              <span>📱</span>
              <span>+34 900 123 456</span>
            </div>
            <div className="flex items-center space-x-3 text-[var(--text-secondary)]">
              <span>🌐</span>
              <span>www.voaya.com</span>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}