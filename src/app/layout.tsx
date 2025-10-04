"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Función para cerrar sidebar al hacer click en un link
  const closeSidebar = () => setSidebarOpen(false);

  // Función para verificar si el link está activo
  const isActive = (path: string) => pathname === path;

  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen relative">
          {/* --- BARRA LATERAL (SIDEBAR) --- */}
          <aside
            className={`fixed top-0 left-0 h-full bg-[var(--surface)] border-r border-[var(--border)] p-6 transition-transform duration-300 z-40 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } w-64`}
          >
            <nav className="mt-16">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    onClick={closeSidebar}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive("/")
                        ? "bg-[var(--primary)] text-white font-semibold"
                        : "text-[var(--foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                    }`}
                  >
                    🏠 Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/configuracion"
                    onClick={closeSidebar}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive("/configuracion")
                        ? "bg-[var(--primary)] text-white font-semibold"
                        : "text-[var(--foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                    }`}
                  >
                    ⚙️ Configuración
                  </Link>
                </li>
                <li>
                  <Link
                    href="/historial"
                    onClick={closeSidebar}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive("/historial")
                        ? "bg-[var(--primary)] text-white font-semibold"
                        : "text-[var(--foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                    }`}
                  >
                    📋 Historial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ayuda"
                    onClick={closeSidebar}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive("/ayuda")
                        ? "bg-[var(--primary)] text-white font-semibold"
                        : "text-[var(--foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                    }`}
                  >
                    ❓ Ayuda
                  </Link>
                </li>
                
                {/* Separador */}
                <li className="border-t border-[var(--border)] my-4"></li>
                
                <li>
                  <Link
                    href="/sobre-nosotros"
                    onClick={closeSidebar}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive("/sobre-nosotros")
                        ? "bg-[var(--primary)] text-white font-semibold"
                        : "text-[var(--foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                    }`}
                  >
                    👥 Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    onClick={closeSidebar}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActive("/contacto")
                        ? "bg-[var(--primary)] text-white font-semibold"
                        : "text-[var(--foreground)] hover:bg-[var(--primary)] hover:bg-opacity-20"
                    }`}
                  >
                    📧 Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* --- OVERLAY PARA CERRAR SIDEBAR --- */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 backdrop-blur-md z-30"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}

          {/* --- ÁREA PRINCIPAL --- */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* ENCABEZADO SUPERIOR (HEADER) */}
            <header className="flex-shrink-0 bg-[var(--surface)] border-b border-[var(--border)] p-4 grid grid-cols-3 items-center relative">
              {/* BOTÓN HAMBURGUESA */}
              <div className="flex justify-start">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 rounded-lg hover:bg-[var(--primary)] transition-colors z-50"
                  aria-label="Toggle sidebar"
                >
                  {sidebarOpen ? (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* LOGO CENTRADO */}
              <div className="flex justify-center">
                <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                  <Image
                    src="/voaya_logo.png"
                    alt="Logo de Voaya"
                    width={280}
                    height={80}
                    priority
                  />
                </Link>
              </div>

              {/* BOTÓN COMPARTIR */}
              {/* <div className="flex justify-end">
                <button className="px-4 py-2 bg-[var(--primary)] text-white font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity">
                  Compartir
                </button>
              </div> */}
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