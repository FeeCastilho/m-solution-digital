import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Quero falar com um especialista da M Solution Digital";

const FinalCtaSection = () => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, hsl(48 100% 50%) 0%, transparent 70%)" }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center space-y-10">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Quer clientes chamando no seu WhatsApp{" "}
          <span className="text-primary text-glow-yellow">todos os dias?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Fale com um especialista agora e descubra como o Método M System™ pode funcionar para o seu negócio.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-10 py-6 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] animate-glow-pulse"
        >
          <MessageCircle className="w-7 h-7 transition-transform duration-300 group-hover:rotate-12" />
          FALAR COM ESPECIALISTA AGORA
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
