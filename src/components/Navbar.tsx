"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Experience & Skills", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-6 backdrop-blur-md bg-background/60 border-b border-border-light transition-colors duration-500">
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 px-2 md:px-0">
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
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="ml-2 md:ml-4 flex items-center justify-center w-9 h-9 rounded-full bg-border-light/50 border border-border-light hover:bg-border-light/80 hover:text-accent transition-all duration-300 shadow-[0_0_15px_var(--star-glow)]"
          title="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
