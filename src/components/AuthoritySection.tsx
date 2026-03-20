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
            <span className="text-primary text-glow-yellow">presença digital em faturamento real</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed" style={{ textWrap: "pretty" }}>
            A M Solution Digital nasceu com uma missão: acabar com o marketing genérico que não gera resultado. 
            Nosso time combina tecnologia, dados e criatividade para entregar o que realmente importa — 
            clientes no seu WhatsApp, prontos para comprar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
