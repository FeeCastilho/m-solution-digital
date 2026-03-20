import { useScrollReveal } from "./useScrollReveal";
import CircuitDecoration from "./CircuitDecoration";

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <CircuitDecoration className="absolute top-0 right-16 h-[200px] w-10 opacity-20 hidden lg:block" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(215 55% 30%) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">A Solução</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Nós criamos{" "}
            <span className="text-primary text-glow-gold">VISIBILIDADE</span>,{" "}
            geramos{" "}
            <span className="text-primary text-glow-gold">DESEJO</span>{" "}
            e convertemos em{" "}
            <span className="text-primary text-glow-gold">CLIENTES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ textWrap: "pretty" as any }}>
            Sua loja de material de construção ou móveis merece ser encontrada por quem está pronto para comprar.
            Nosso sistema conecta seus produtos aos clientes certos, direto no WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
