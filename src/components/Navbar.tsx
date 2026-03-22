"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const playSciFiSound = (isGoingDark: boolean) => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const audioCtx = new AudioContext();
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      if (isGoingDark) {
        // Deep power-down sweep
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.4);
      } else {
        // Bright power-up chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.3);
      }

      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch(e) {
      console.warn("Audio Context not supported or blocked", e);
    }
  };

  const applyTheme = (nextTheme: string) => {
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  const toggleTheme = (e: React.MouseEvent) => {
    const isDark = theme === "dark";
    const nextTheme = isDark ? "light" : "dark";

    playSciFiSound(nextTheme === "dark");

    if (!document.startViewTransition) {
      applyTheme(nextTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Experience & Skills", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-center p-4 md:p-6 backdrop-blur-xl bg-background/80 md:bg-background/60 border-b border-border-light transition-colors duration-500 shadow-sm">
      
      {/* Mobile Hamburger */}
      <div className="md:hidden ml-2 z-50">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground focus:outline-none hover:text-accent transition-colors" aria-label="Toggle Navigation">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-8 px-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-all duration-300 hover:text-foreground flex items-center space-x-1.5 ${
                isActive ? "text-accent glow-text shadow-accent/50 drop-shadow-[0_0_8px_rgba(226,194,117,0.8)]" : "text-muted"
              }`}
            >
              <span className={`transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 hidden"}`}>✦</span>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
      
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="md:ml-4 mr-2 md:mr-0 flex items-center justify-center w-10 h-10 md:w-9 md:h-9 rounded-full bg-border-light/50 border border-border-light hover:bg-border-light/80 hover:text-accent transition-all duration-300 shadow-[0_0_15px_var(--star-glow)] overflow-hidden z-50"
        title="Toggle Theme"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center text-lg drop-shadow-md"
          >
            {theme === 'dark' ? '⭐' : '☄️'}
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-border-light shadow-2xl overflow-hidden z-40"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                 const isActive = pathname === link.path;
                 return (
                   <Link 
                     key={link.name} 
                     href={link.path} 
                     onClick={() => setIsMobileMenuOpen(false)} 
                     className={`text-lg font-medium py-3 border-b border-border-light/30 flex items-center ${isActive ? "text-accent" : "text-muted hover:text-foreground"}`}
                   >
                     {isActive && <span className="mr-2 text-accent">✦</span>}
                     {link.name}
                   </Link>
                 )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
