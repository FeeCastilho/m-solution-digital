import { useScrollReveal } from "./useScrollReveal";
import { TrendingDown, Users, Clock, DollarSign, Search, ShieldOff } from "lucide-react";

const problems = [
  { icon: TrendingDown, text: "Poucas vendas e leads sem qualidade" },
  { icon: Users, text: "Clientes não encontram sua empresa online" },
  { icon: Clock, text: "Tempo investido sem retorno previsível" },
  { icon: DollarSign, text: "Dinheiro desperdiçado em tráfego mal feito" },
  { icon: Search, text: "Não aparece no Google quando pesquisam" },
  { icon: ShieldOff, text: "Concorrência está passando na frente" },
];

const ProblemsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Você se identifica?</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Se algum desses problemas é seu,{" "}
            <span className="text-primary text-glow-yellow">você está no lugar certo</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`group glass-surface glass-surface-hover rounded-xl p-6 cursor-default transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p.icon className="w-8 h-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
              <p className="text-foreground font-medium leading-snug">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
