import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voaya",
  description: "Tu asistente de IA personalizado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen">
          {/* --- BARRA LATERAL (SIDEBAR) --- */}
          <aside className="w-64 flex-shrink-0 bg-[var(--surface)] border-r border-[var(--border)] p-6">
            <nav>
              <ul className="space-y-4">
                <li className="font-semibold text-[var(--foreground)]">
                  Inicio
                </li>
                <li className="text-[var(--text-secondary)]">
                  Configuración
                </li>
              </ul>
            </nav>
          </aside>

          {/* --- ÁREA PRINCIPAL --- */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* ENCABEZADO SUPERIOR (HEADER) */}
            <header className="flex-shrink-0 bg-[var(--surface)] border-b border-[var(--border)] p-4 grid grid-cols-3 items-center">
              <div></div>
              <div className="flex justify-center">
                <Image
                  src="/voaya_logo.png"
                  alt="Logo de Voaya"
                  width={280}
                  height={80}
                  priority
                />
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-[var(--primary)] text-white font-semibold rounded-lg text-sm">
                  Compartir
                </button>
              </div>
            </header>

            {/* CONTENIDO DE LA PÁGINA ACTUAL */}
            <main className="flex-1 p-8 bg-[var(--background)]">
              {children}
            </main>

            {/* PIE DE PÁGINA (FOOTER) */}
            <footer className="flex-shrink-0 bg-[var(--surface)] border-t border-[var(--border)] p-4">
              <p className="text-center text-xs text-[var(--text-secondary)]">
                &copy; {new Date().getFullYear()} Voaya. Todos los derechos reservados.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

