import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Para quem é", href: "#para-quem" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#metodo" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 shadow-line backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Energys">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-energys-navy text-sm font-bold text-white shadow-soft">
            EN
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold text-energys-navy">
              ENERGYS
            </span>
            <span className="mt-1 text-xs font-medium text-slate-500">
              Gestão Inteligente de Energia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm transition hover:text-energys-blue focus:outline-none focus:ring-4 focus:ring-energys-blue/15"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#lead-form-hero"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-energys-yellow px-4 text-sm font-bold text-energys-navy transition hover:bg-[#f5a414] focus:outline-none focus:ring-4 focus:ring-energys-yellow/35"
          aria-label="Solicitar análise energética"
        >
          <span className="hidden sm:inline">Solicitar análise</span>
          <span className="sm:hidden">Análise</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
