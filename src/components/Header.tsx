import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const WHATSAPP_LINK = "https://wa.me/5511930093582?text=Olá! Quero falar com um especialista da M Solution Digital";

const NAV_ITEMS = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-brand-navy/20 shadow-[0_4px_30px_hsl(215_55%_25%/0.15)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo — prominent */}
        <a href="#" className="relative group flex items-center gap-3">
          <img
            src={logoHorizontal}
            alt="M Solution Digital"
            className={`transition-all duration-500 ${scrolled ? "h-9 sm:h-10" : "h-11 sm:h-12"}`}
          />
          {/* Glow behind logo on hover */}
          <div className="absolute -inset-3 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] box-glow-gold"
          >
            <MessageCircle className="w-4 h-4" />
            FALE CONOSCO
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-1 bg-background/95 backdrop-blur-xl border-t border-border mt-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-display font-bold text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            FALE CONOSCO
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
