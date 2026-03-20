import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Quero falar com um especialista da M Solution Digital";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Energy lines flowing to CTA */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(210 100% 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(48 100% 50%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(48 100% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 200 Q 200 180 400 300 Q 600 420 800 350 Q 1000 280 1200 500"
            fill="none"
            stroke="url(#energyGrad)"
            strokeWidth="1"
            className="animate-circuit-dash"
            strokeDasharray="1000"
          />
          <path
            d="M 100 100 Q 300 250 500 200 Q 700 150 900 400 Q 1100 600 1300 550"
            fill="none"
            stroke="url(#energyGrad)"
            strokeWidth="0.5"
            className="animate-circuit-dash"
            strokeDasharray="1000"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow-blue glass-surface">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-sm text-muted-foreground tracking-wider uppercase">
                Método Exclusivo de Aquisição Digital
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight">
              Transformamos sua empresa em uma{" "}
              <span className="text-primary text-glow-yellow">máquina de clientes</span>{" "}
              no WhatsApp
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed" style={{ textWrap: "pretty" }}>
              Através de estratégia, tecnologia e posicionamento digital — 
              conectamos sua marca aos clientes certos, todos os dias.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] animate-glow-pulse"
            >
              <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              FALAR COM ESPECIALISTA NO WHATSAPP
            </a>

            {/* Social proof mini */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["M.R", "A.S", "C.L", "P.F"].map((initials, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-secondary-foreground">
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">+127 empresas</span> já usam nosso método
              </p>
            </div>
          </div>

          {/* Right - Abstract Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-primary/5 animate-[spin_25s_linear_infinite]" />

              {/* Center glow */}
              <div className="absolute inset-12 rounded-full bg-primary/5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full animate-glow-pulse" />
                <span className="font-display text-5xl font-bold text-primary text-glow-yellow">M</span>
              </div>

              {/* Floating dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/60"
                  style={{
                    top: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.cos((deg * Math.PI) / 180)}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
