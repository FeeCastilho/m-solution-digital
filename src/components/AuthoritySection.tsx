import { useScrollReveal } from "./useScrollReveal";

const AuthoritySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto text-center space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Sobre nós</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Somos especialistas em transformar{" "}
            <span className="text-primary text-glow-gold">lojas em referência digital</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" as any }}>
            A M Solution Digital nasceu focada em um único segmento: lojas de material de construção e lojas de móveis.
            Conhecemos os desafios, o público e as oportunidades desse mercado como ninguém. 
            Nosso time combina tecnologia, dados e criatividade para entregar o que importa — 
            clientes reais no seu WhatsApp, prontos para comprar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
