import { useScrollReveal } from "./useScrollReveal";
import { Store, Globe, Camera, Palette, Target, MapPin, Star, BarChart } from "lucide-react";

const blocks = [
  {
    title: "Para Lojas",
    subtitle: "Aumente o fluxo de clientes na sua loja física e online",
    icon: Store,
    services: [
      { icon: Camera, name: "Produção de Conteúdo" },
      { icon: Palette, name: "Identidade Visual" },
      { icon: Target, name: "Tráfego Pago (Meta)" },
      { icon: MapPin, name: "Google Meu Negócio" },
    ],
  },
  {
    title: "Para Empresas",
    subtitle: "Domine o Google e atraia clientes que já buscam por você",
    icon: Globe,
    services: [
      { icon: Target, name: "Google Ads" },
      { icon: Star, name: "SEO Local" },
      { icon: BarChart, name: "Análise de Dados" },
      { icon: Palette, name: "Landing Pages" },
    ],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Serviços</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Soluções sob medida para <span className="text-primary text-glow-yellow">seu segmento</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blocks.map((block, i) => (
            <div
              key={i}
              className={`glass-surface rounded-2xl p-8 border-glow-blue transition-all duration-500 hover:border-primary/20 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <block.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{block.title}</h3>
                  <p className="text-sm text-muted-foreground">{block.subtitle}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {block.services.map((s, j) => (
                  <div key={j} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 transition-colors duration-300 hover:bg-primary/10">
                    <s.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
