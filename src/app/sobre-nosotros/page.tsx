import { PageContainer } from "../components/PageContainer";

export default function SobreNosotrosPage() {
  return (
    <PageContainer title="👥 Sobre Nosotros">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            Nuestra Misión
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            En Voaya, nos dedicamos a crear experiencias de inteligencia artificial
            que transformen la manera en que las personas acceden y utilizan la información.
            Creemos en la tecnología como herramienta para empoderar a las personas y
            facilitar su día a día.
          </p>
        </section>

        <section className="pt-6 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--background)] rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">
                🎯 Innovación
              </h3>
              <p className="text-[var(--text-secondary)]">
                Buscamos constantemente nuevas formas de mejorar y evolucionar.
              </p>
            </div>
            
            <div className="p-4 bg-[var(--background)] rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">
                🤝 Confianza
              </h3>
              <p className="text-[var(--text-secondary)]">
                Construimos relaciones basadas en la transparencia y la honestidad.
              </p>
            </div>
            
            <div className="p-4 bg-[var(--background)] rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">
                🌟 Excelencia
              </h3>
              <p className="text-[var(--text-secondary)]">
                Nos comprometemos a ofrecer la mejor calidad en todo lo que hacemos.
              </p>
            </div>
            
            <div className="p-4 bg-[var(--background)] rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">
                🌍 Accesibilidad
              </h3>
              <p className="text-[var(--text-secondary)]">
                Creemos que la tecnología debe estar al alcance de todos.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-6 border-t border-[var(--border)]">
          <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
            Nuestro Equipo
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Somos un equipo diverso de ingenieros, diseñadores y expertos en IA,
            unidos por la pasión de crear productos que realmente marquen la diferencia
            en la vida de las personas.
          </p>
        </section>
      </div>
    </PageContainer>
  );
}