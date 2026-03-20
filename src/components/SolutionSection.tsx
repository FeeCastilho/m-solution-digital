import { useScrollReveal } from "./useScrollReveal";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Subtle bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(48 100% 50%) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">A Solução</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Nós criamos{" "}
            <span className="text-primary text-glow-yellow">VISIBILIDADE</span>,{" "}
            geramos{" "}
            <span className="text-primary text-glow-yellow">DESEJO</span>{" "}
            e convertemos em{" "}
            <span className="text-primary text-glow-yellow">CLIENTES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ textWrap: "pretty" }}>
            Um sistema completo de aquisição digital que transforma sua presença online 
            em uma máquina previsível de geração de oportunidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
