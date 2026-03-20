import { useScrollReveal } from "./useScrollReveal";
import { Crosshair, Layers, Zap, BarChart3 } from "lucide-react";
import CircuitDecoration from "./CircuitDecoration";

const steps = [
  { icon: Crosshair, num: "01", title: "Diagnóstico", desc: "Analisamos sua loja, concorrência local e oportunidades reais na região." },
  { icon: Layers, num: "02", title: "Estratégia", desc: "Criamos o plano de ataque personalizado para seu segmento." },
  { icon: Zap, num: "03", title: "Ativação", desc: "Implementamos campanhas, Google Ads e automações de WhatsApp." },
  { icon: BarChart3, num: "04", title: "Escala", desc: "Otimizamos resultados e escalamos o que gera mais clientes." },
];

const MethodSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="metodo" className="relative py-24 lg:py-32" ref={ref}>
      <CircuitDecoration className="absolute top-0 left-10 h-[180px] w-10 opacity-15 hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Nosso Método</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            O Método <span className="text-primary text-glow-gold">M System™</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo proprietário de 4 etapas que transforma lojas em referência digital na região.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line with energy flow */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-energy-flow"
              style={{ backgroundSize: "200% 100%" }} />
          </div>
          {/* Circuit dots on the line */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 justify-between px-[12%]">
            {[0,1,2].map(i => <div key={i} className="circuit-dot" />)}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`group relative glass-surface rounded-xl p-6 text-center transition-all duration-500 hover:border-glow hover:box-glow-gold ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <span className="text-brand-navy/40 font-display text-5xl font-bold absolute top-3 right-4">{step.num}</span>
                <div className="relative z-10 space-y-4">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-brand-navy/20 flex items-center justify-center border border-brand-navy/30 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/30">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
