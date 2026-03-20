import { useScrollReveal } from "./useScrollReveal";
import { Store, Wrench, Sofa, Palette, Target, MapPin, BarChart, Globe } from "lucide-react";

const blocks = [
  {
    title: "Lojas de Material de Construção",
    subtitle: "Atraia quem está construindo ou reformando na sua região",
    icon: Wrench,
    services: [
      { icon: Target, name: "Google Ads Local" },
      { icon: MapPin, name: "Google Meu Negócio" },
      { icon: Globe, name: "Landing Page de Conversão" },
      { icon: BarChart, name: "Funil de WhatsApp" },
    ],
  },
  {
    title: "Lojas de Móveis",
    subtitle: "Mostre seus produtos para quem está pronto para mobiliar",
    icon: Sofa,
    services: [
      { icon: Palette, name: "Produção de Conteúdo" },
      { icon: Target, name: "Tráfego Pago (Meta + Google)" },
      { icon: Store, name: "Catálogo Digital" },
      { icon: MapPin, name: "Posicionamento Local" },
    ],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="relative py-24 lg:py-32" ref={ref}>
      {/* Circuit divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 circuit-line-vertical" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Serviços</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Soluções sob medida para <span className="text-primary text-glow-gold">seu segmento</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blocks.map((block, i) => (
            <div
              key={i}
              className={`glass-surface rounded-2xl p-8 border-glow-navy transition-all duration-500 hover:border-primary/20 hover:box-glow-gold ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/20 border border-brand-navy/30 flex items-center justify-center">
                  <block.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{block.title}</h3>
                  <p className="text-sm text-muted-foreground">{block.subtitle}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {block.services.map((s, j) => (
                  <div key={j} className="flex items-center gap-3 p-3 rounded-lg bg-brand-navy/10 border border-brand-navy/10 transition-all duration-300 hover:bg-primary/10 hover:border-primary/20">
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
