import { useScrollReveal } from "./useScrollReveal";
import { TrendingDown, Users, Clock, DollarSign, Search, ShieldOff } from "lucide-react";

const problems = [
  { icon: TrendingDown, text: "Poucas vendas e clientes que só pesquisam preço" },
  { icon: Users, text: "Clientes não encontram sua loja no Google" },
  { icon: Clock, text: "Investimento em panfleto e rádio sem retorno" },
  { icon: DollarSign, text: "Concorrentes grandes dominando a região" },
  { icon: Search, text: "WhatsApp parado — sem mensagens de clientes novos" },
  { icon: ShieldOff, text: "Presença digital fraca ou inexistente" },
];

const ProblemsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Você se identifica?</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Sua loja de construção ou móveis{" "}
            <span className="text-primary text-glow-gold">enfrenta isso?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`group glass-surface rounded-2xl p-7 cursor-default transition-all duration-500 hover:border-glow hover:shadow-[0_8px_30px_hsl(45_95%_48%/0.08)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
                <p.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="text-foreground font-medium leading-snug">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
