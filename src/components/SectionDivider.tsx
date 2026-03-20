interface SectionDividerProps {
  variant?: "wave" | "curve" | "slant";
  from?: string;
  to?: string;
  flip?: boolean;
}

const SectionDivider = ({ variant = "wave", from = "hsl(220 20% 97%)", to = "hsl(220 18% 94%)", flip = false }: SectionDividerProps) => {
  const paths = {
    wave: "M0,64 C320,120 480,0 720,48 C960,96 1200,16 1440,64 L1440,128 L0,128Z",
    curve: "M0,96 Q720,0 1440,96 L1440,128 L0,128Z",
    slant: "M0,96 L1440,32 L1440,128 L0,128Z",
  };

  return (
    <div className={`relative w-full h-16 sm:h-20 lg:h-24 ${flip ? "rotate-180" : ""}`} style={{ marginTop: -1, marginBottom: -1 }}>
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="128" fill={from} />
        <path d={paths[variant]} fill={to} />
      </svg>
    </div>
  );
};

export default SectionDivider;
