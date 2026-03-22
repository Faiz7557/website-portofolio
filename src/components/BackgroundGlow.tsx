export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Deep Space Milky Way Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-star-glow blur-[150px] opacity-40"></div>
      <div className="absolute top-[40%] right-[-10%] w-[40%] h-[60%] rounded-full bg-star-glow blur-[150px] opacity-30"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full bg-star-glow blur-[150px] opacity-40"></div>

      {/* Constellation / Astrolabe SVG Pattern */}
      <div className="absolute inset-0 bg-astrolabe pointer-events-none z-[-1]"></div>

      {/* Scattered Stars / Data Nodes */}
      <div className="absolute top-[15%] left-[25%] w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_var(--color-accent)] animate-pulse"></div>
      <div className="absolute top-[35%] left-[10%] w-1 h-1 bg-foreground rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-[60%] left-[30%] w-2 h-2 bg-accent/80 rounded-full shadow-[0_0_10px_var(--color-accent)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[80%] left-[15%] w-1 h-1 bg-foreground/80 rounded-full shadow-[0_0_15px_var(--color-foreground)] animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-accent rounded-full shadow-[0_0_12px_var(--color-accent)] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[50%] right-[10%] w-1 h-1 bg-foreground/50 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
      <div className="absolute top-[75%] right-[25%] w-1.5 h-1.5 bg-accent/90 rounded-full shadow-[0_0_10px_var(--color-accent)] animate-pulse" style={{ animationDuration: '2.5s' }}></div>
      <div className="absolute top-[10%] right-[40%] w-1 h-1 bg-foreground/70 rounded-full animate-pulse"></div>

      {/* Orbit Rings (Astrolabe Element) */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border border-border-light pointer-events-none animate-[spin_60s_linear_infinite] transition-colors duration-500"></div>
      <div className="absolute top-[-5%] right-[-10%] w-[800px] h-[800px] rounded-full border border-border-light pointer-events-none animate-[spin_90s_linear_infinite_reverse] transition-colors duration-500"></div>
      
      {/* Comets / Shooting Stars — proper translateX sweep */}
      <div
        className="absolute top-[10%] right-0 w-40 h-px bg-gradient-to-l from-transparent via-accent to-transparent opacity-60 transform -rotate-[30deg] pointer-events-none"
        style={{ animation: 'cometFly 8s ease-in-out infinite 1s' }}
      ></div>
      <div
        className="absolute top-[45%] left-0 w-56 h-px bg-gradient-to-r from-transparent via-foreground/60 to-transparent opacity-40 transform rotate-[15deg] pointer-events-none"
        style={{ animation: 'cometFlyReverse 12s ease-in-out infinite 4s' }}
      ></div>
    </div>
  );
}
