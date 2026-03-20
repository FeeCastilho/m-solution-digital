import { useScrollReveal } from "./useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Dono de restaurante",
    text: "Em 30 dias, meu WhatsApp não parava de receber pedidos. Triplicamos o faturamento no delivery.",
    initials: "RM",
  },
  {
    name: "Camila Ferreira",
    role: "Loja de roupas",
    text: "Antes eu não aparecia no Google. Hoje sou a primeira opção quando pesquisam na minha cidade.",
    initials: "CF",
  },
  {
    name: "Anderson Costa",
    role: "Clínica de estética",
    text: "O método deles é diferente de tudo que já vi. Resultado real, sem promessas vazias.",
    initials: "AC",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Depoimentos</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            O que nossos clientes <span className="text-primary text-glow-yellow">dizem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-surface glass-surface-hover rounded-xl p-6 space-y-4 transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
