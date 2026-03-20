const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 50 H 40 V 20 H 60 V 80 H 100" fill="none" stroke="hsl(48 100% 50%)" strokeWidth="0.5" />
            <path d="M 50 0 V 30 H 80 V 70 H 20 V 100" fill="none" stroke="hsl(210 100% 50%)" strokeWidth="0.3" />
            <circle cx="40" cy="50" r="2" fill="hsl(48 100% 50%)" opacity="0.5" />
            <circle cx="60" cy="20" r="1.5" fill="hsl(210 100% 50%)" opacity="0.3" />
            <circle cx="80" cy="70" r="2" fill="hsl(48 100% 50%)" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(210 100% 50%) 0%, transparent 70%)" }} />
      <div className="absolute top-[60%] right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(48 100% 50%) 0%, transparent 70%)" }} />
    </div>
  );
};

export default CircuitBackground;
