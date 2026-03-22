import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[85vh] text-left gap-12 lg:gap-20 animate-in fade-in duration-1000 relative max-w-7xl mx-auto px-4 md:px-8">
      
      {/* Comets / Shooting Stars for Home Only */}
      <div className="absolute top-10 left-10 w-px h-32 bg-gradient-to-b from-transparent via-accent to-transparent opacity-40 transform rotate-45 pointer-events-none animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-foreground to-transparent opacity-20 transform -rotate-45 pointer-events-none animate-[pulse_4s_ease-in-out_infinite_1s]"></div>

      {/* Left Column: Content & Buttons */}
      <div className="flex-1 space-y-8 relative z-10 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Hero Badge */}
        <div className="hero-badge inline-flex items-center space-x-3 bg-foreground/[0.03] border border-accent/20 rounded-full px-5 py-2 text-sm w-max shadow-[0_0_15px_rgba(226,194,117,0.15)] backdrop-blur-md reveal visible">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-[0_0_8px_rgba(226,194,117,1)]"></span>
          </span>
          <span className="text-gray-300 font-medium tracking-wide uppercase">Get to Know Me</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[1.1]">
            Faiz Iqbal <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-foreground to-accent animate-gradient-text">Itishom</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted">
            I'm a <span className="text-foreground glow-text font-semibold tracking-wide">Data Science student who loves social science.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
          Driven by data, fueled by innovation, solving problems through actionable insights and transformative solutions.
          </p>
        </div>

        {/* Bottom CTA / Info moved up */}
        <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
          <Link href="/profile" className="btn-primary px-8 py-3.5 rounded-full bg-accent text-background font-bold shadow-[0_0_20px_var(--star-glow-strong)] transition-all hover:scale-105">
            Explore My Journey
          </Link>
          <Link href="/projects" className="btn-primary px-8 py-3.5 rounded-full backdrop-blur-sm border border-border-light text-foreground font-bold hover:shadow-[0_0_20px_var(--star-glow)] transition-all hover:scale-105">
            View Projects
          </Link>
          <a href="/cv-faiz-iqbal.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5 rounded-full backdrop-blur-sm bg-foreground/5 border border-border-light text-foreground font-bold hover:border-accent/40 hover:bg-accent/10 transition-all hover:-translate-y-1 flex items-center gap-2 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-accent transition-colors"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Column: Abstract Animated Centerpiece (Star / Astrolabe) */}
      <div className="flex-1 flex items-center justify-center relative w-full max-w-md order-1 md:order-2">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center pointer-events-none">
          {/* Outer Orbit */}
          <div className="absolute inset-0 rounded-full border border-accent/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
          {/* Inner Orbit */}
          <div className="absolute inset-10 lg:inset-16 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-foreground rounded-full shadow-[0_0_15px_white] -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          {/* Deep Glow */}
          <div className="absolute inset-16 lg:inset-24 rounded-full bg-accent/10 blur-3xl animate-pulse"></div>
          {/* Core Star */}
          <div className="relative z-10 text-8xl lg:text-9xl text-accent drop-shadow-[0_0_35px_rgba(226,194,117,0.8)] animate-[pulse_3s_ease-in-out_infinite]">
            ✦
          </div>
          {/* Data Nodes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-foreground rounded-full shadow-[0_0_8px_white] animate-twinkle stagger-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_12px_rgba(226,194,117,1)] animate-twinkle stagger-3"></div>
          <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-foreground/60 rounded-full animate-twinkle stagger-2"></div>
          <div className="absolute bottom-1/3 left-4 w-2 h-2 bg-accent/60 rounded-full animate-twinkle stagger-4"></div>
        </div>
      </div>

    </div>
  );
}
