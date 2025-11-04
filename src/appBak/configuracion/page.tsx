import { PageContainer } from "../components/PageContainer";

export default function ConfiguracionPage() {
  return (
    <PageContainer title="⚙️ Configuración">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            Preferencias de usuario
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--foreground)]">Tema</span>
              <select className="px-4 py-2 rounded-lg border border-[var(--border)] bg-white">
                <option>Claro</option>
                <option>Oscuro</option>
                <option>Automático</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--foreground)]">Idioma</span>
              <select className="px-4 py-2 rounded-lg border border-[var(--border)] bg-white">
                <option>Español</option>
                <option>English</option>
                <option>Français</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 bg-[var(--background)] rounded-lg">
              <span className="text-[var(--foreground)]">Notificaciones</span>
              <input type="checkbox" className="w-5 h-5" defaultChecked />
            </div>
          </div>
        </section>

        <section className="pt-6 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            Cuenta
          </h2>
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity">
              Cambiar contraseña
            </button>
            <button className="w-full px-4 py-3 bg-red-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Cerrar sesión
            </button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}