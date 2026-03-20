import { useScrollReveal } from "./useScrollReveal";
import { TrendingUp, Users, DollarSign, Star } from "lucide-react";

const stats = [
  { value: "+300%", label: "Aumento médio em leads", icon: TrendingUp },
  { value: "127+", label: "Lojas atendidas", icon: Users },
  { value: "R$2.4M", label: "Faturamento gerado para clientes", icon: DollarSign },
  { value: "4.9★", label: "Avaliação no Google", icon: Star },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resultados" className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Resultados Reais</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Números que <span className="text-primary text-glow-gold">falam por si</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group text-center glass-surface rounded-2xl p-8 transition-all duration-500 hover:border-glow hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.1)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-primary tabular-nums">
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
