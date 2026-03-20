import { useScrollReveal } from "./useScrollReveal";

const stats = [
  { value: "+300%", label: "Aumento médio em leads" },
  { value: "127+", label: "Lojas atendidas" },
  { value: "R$2.4M", label: "Faturamento gerado para clientes" },
  { value: "4.9★", label: "Avaliação no Google" },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Resultados Reais</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Números que <span className="text-primary text-glow-gold">falam por si</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center glass-surface rounded-xl p-8 border-glow transition-all duration-500 hover:box-glow-gold ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="font-display text-3xl sm:text-4xl font-bold text-primary text-glow-gold tabular-nums">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
