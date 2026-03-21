import { useScrollReveal } from "./useScrollReveal";
import { TrendingDown, Users, Clock, DollarSign, Search, ShieldOff } from "lucide-react";
import storeConstruction from "@/assets/store-construction.jpg";
import storeFurniture from "@/assets/store-furniture.jpg";

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
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Você se identifica?</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Sua loja de construção ou móveis{" "}
            <span className="text-primary text-glow-gold">enfrenta isso?</span>
          </h2>
        </div>

        {/* Store images showcase */}
        <div className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="relative group rounded-2xl overflow-hidden shadow-lg">
            <img
              src={storeConstruction}
              alt="Loja de material de construção"
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider">
                🧱 Material de Construção
              </span>
              <p className="text-white/90 text-sm mt-2 font-medium">
                Ajudamos lojas de construção a dominar a região digitalmente
              </p>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden shadow-lg" style={{ animationDelay: "150ms" }}>
            <img
              src={storeFurniture}
              alt="Loja de móveis"
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider">
                🛋️ Lojas de Móveis
              </span>
              <p className="text-white/90 text-sm mt-2 font-medium">
                Conectamos lojas de móveis com clientes prontos para comprar
              </p>
            </div>
          </div>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`group glass-surface rounded-2xl p-7 cursor-default transition-all duration-500 hover:border-glow hover:shadow-[0_8px_30px_hsl(45_95%_48%/0.08)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(45_95%_48%/0.15)]">
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
