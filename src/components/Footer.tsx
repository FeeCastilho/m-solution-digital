const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-xl font-bold text-primary text-glow-yellow mb-2">M Solution Digital</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} M Solution Digital. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
