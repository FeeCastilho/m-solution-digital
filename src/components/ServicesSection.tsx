import { useScrollReveal } from "./useScrollReveal";
import { Store, Wrench, Sofa, Palette, Target, MapPin, BarChart, Globe, Hammer, PaintBucket, Truck, Armchair, Ruler, ShoppingBag } from "lucide-react";
import CircuitDecoration from "./CircuitDecoration";

const blocks = [
  {
    title: "Lojas de Material de Construção",
    subtitle: "Atraia quem está construindo ou reformando na sua região",
    icon: Hammer,
    color: "from-amber-500/10 to-orange-500/5",
    borderColor: "hover:border-amber-500/30",
    visual: [
      { icon: PaintBucket, label: "Tintas" },
      { icon: Wrench, label: "Ferramentas" },
      { icon: Truck, label: "Materiais" },
      { icon: Ruler, label: "Acabamentos" },
    ],
    services: [
      { icon: Target, name: "Google Ads Local", desc: "Apareça no topo quando buscarem na sua cidade" },
      { icon: MapPin, name: "Google Meu Negócio", desc: "Domine o mapa da sua região" },
      { icon: Globe, name: "Landing Page de Conversão", desc: "Página que transforma clique em cliente" },
      { icon: BarChart, name: "Funil de WhatsApp", desc: "Automatize o primeiro contato" },
    ],
  },
  {
    title: "Lojas de Móveis",
    subtitle: "Mostre seus produtos para quem está pronto para mobiliar",
    icon: Sofa,
    color: "from-blue-500/10 to-indigo-500/5",
    borderColor: "hover:border-blue-400/30",
    visual: [
      { icon: Sofa, label: "Sofás" },
      { icon: Armchair, label: "Poltronas" },
      { icon: ShoppingBag, label: "Decoração" },
      { icon: Store, label: "Ambientes" },
    ],
    services: [
      { icon: Palette, name: "Produção de Conteúdo", desc: "Fotos e vídeos que vendem" },
      { icon: Target, name: "Tráfego Pago (Meta + Google)", desc: "Anúncios que atraem compradores reais" },
      { icon: Store, name: "Catálogo Digital", desc: "Seu showroom online no WhatsApp" },
      { icon: MapPin, name: "Posicionamento Local", desc: "Seja referência na sua região" },
    ],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="relative py-24 lg:py-36" ref={ref}>
      <CircuitDecoration className="absolute top-0 right-16 h-[200px] w-10 opacity-20 hidden lg:block" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 circuit-line-vertical" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Serviços</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Soluções sob medida para <span className="text-primary text-glow-gold">seu segmento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estratégias específicas para cada tipo de loja — porque vender cimento é diferente de vender sofás.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blocks.map((block, i) => (
            <div
              key={i}
              className={`relative group glass-surface rounded-3xl overflow-hidden border border-border/50 transition-all duration-700 ${block.borderColor} hover:shadow-[0_8px_60px_hsl(45_95%_52%/0.08)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Gradient header with icon grid */}
              <div className={`relative px-8 pt-8 pb-6 bg-gradient-to-br ${block.color}`}>
                {/* Icon visual grid — represents the niche */}
                <div className="flex items-center gap-3 mb-6">
                  {block.visual.map((v, j) => (
                    <div
                      key={j}
                      className="flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] transition-all duration-300 group-hover:border-primary/15"
                    >
                      <v.icon className="w-5 h-5 text-primary" />
                      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{v.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy/30 border border-brand-navy/40 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/15 group-hover:border-primary/30">
                    <block.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold leading-tight">{block.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{block.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Services list */}
              <div className="px-8 py-6 space-y-3">
                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">O que fazemos</p>
                {block.services.map((s, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-brand-navy/5 border border-transparent transition-all duration-300 hover:bg-primary/[0.06] hover:border-primary/15"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-navy/15 flex items-center justify-center shrink-0 mt-0.5">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
