import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center space-y-12 animate-in fade-in duration-1000 relative">
      
      {/* Comets / Shooting Stars for Home Only */}
      <div className="absolute top-10 left-10 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-40 transform rotate-45 pointer-events-none animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-foreground to-transparent opacity-20 transform -rotate-45 pointer-events-none animate-[pulse_4s_ease-in-out_infinite_1s]"></div>

      {/* Hero Badge */}
      <div className="hero-badge inline-flex items-center space-x-3 bg-foreground/[0.03] border border-accent/20 rounded-full px-5 py-2 text-sm w-max mb-2 shadow-[0_0_15px_rgba(226,194,117,0.15)] backdrop-blur-md relative z-10 reveal visible">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-[0_0_8px_rgba(226,194,117,1)]"></span>
        </span>
        <span className="text-gray-300 font-medium tracking-wide">Navigating the Data Universe</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-6 max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground leading-[1.1]">
          Faiz Iqbal <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-foreground to-accent animate-gradient-text">Itishom</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted max-w-3xl">
          I'm a <span className="text-foreground glow-text font-semibold tracking-wide">Data Science & Technology</span> Student.
        </h2>
        <p className="text-lg md:text-xl text-muted max-w-2xl mt-6 leading-relaxed">
          Currently studying at Universitas Airlangga. Blending statistical rigor with modern technology to discover brilliant insights hidden in the data galaxy.
        </p>
      </div>

      {/* Abstract Animated Centerpiece (Star / Astrolabe) */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center my-12 pointer-events-none">
        {/* Outer Orbit */}
        <div className="absolute inset-0 rounded-full border border-accent/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
        {/* Inner Orbit */}
        <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]">
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-foreground rounded-full shadow-[0_0_10px_white] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        {/* Deep Glow */}
        <div className="absolute inset-12 rounded-full bg-accent/10 blur-2xl animate-pulse"></div>
        {/* Core Star */}
        <div className="relative z-10 text-7xl text-accent drop-shadow-[0_0_25px_rgba(226,194,117,0.8)] animate-[pulse_3s_ease-in-out_infinite]">
          ✦
        </div>
        {/* Data Nodes */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-foreground rounded-full shadow-[0_0_5px_white] animate-twinkle stagger-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent rounded-full shadow-[0_0_8px_rgba(226,194,117,1)] animate-twinkle stagger-3"></div>
        <div className="absolute top-1/2 right-4 w-1 h-1 bg-foreground/60 rounded-full animate-twinkle stagger-2"></div>
        <div className="absolute bottom-1/3 left-8 w-1.5 h-1.5 bg-accent/60 rounded-full animate-twinkle stagger-4"></div>
      </div>

      {/* Bottom CTA / Info */}
      <div className="flex flex-col items-center space-y-8 pt-8 relative z-10">
        <p className="text-gray-400 text-sm md:text-base max-w-md">
          I'm currently looking to join a <span className="text-accent glow-text font-medium">stellar</span> team that values improving people's lives through data & technology.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/profile" className="btn-primary px-8 py-3.5 rounded-full bg-accent text-background font-bold shadow-[0_0_20px_var(--star-glow-strong)]">
            Explore My Journey
          </Link>
          <Link href="/projects" className="btn-primary px-8 py-3.5 rounded-full backdrop-blur-sm border border-border-light text-foreground font-bold hover:shadow-[0_0_20px_var(--star-glow)]">
            View Projects
          </Link>
        </div>
      </div>

    </div>
  );
}
