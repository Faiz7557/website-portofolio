import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-border-light bg-card/30 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Faiz Iqbal Itishom. All rights reserved.
        </p>
        <p className="text-muted text-xs md:text-sm text-center md:text-right flex items-center gap-2">
          Engineered w/ <span className="text-foreground font-semibold">Next.js</span> & <span className="text-accent font-semibold">TailwindCSS</span>
          <span className="hidden md:inline text-border-light mx-1">|</span> Orbiting from Surabaya, Indonesia
        </p>
      </div>
    </footer>
  );
}
