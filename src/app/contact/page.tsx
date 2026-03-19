import React from "react";

export default function Contact() {
  const socials = [
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/faiziqbal.i?igsh=bndiNGlkYmJhNm9q",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-10 h-10 mb-5 text-gray-300 group-hover:text-accent transition-colors">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "GITHUB",
      url: "https://github.com/Faiz7557",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-10 h-10 mb-5 text-gray-300 group-hover:text-accent transition-colors">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: "WHATSAPP",
      url: "https://wa.me/6285872037795",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-10 h-10 mb-5 text-gray-300 group-hover:text-accent transition-colors">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      name: "EMAIL",
      url: "mailto:faiz.iqbal.itishom-2023@ftmm.unair.ac.id",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-10 h-10 mb-5 text-gray-300 group-hover:text-accent transition-colors">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/faiz-iqbal-itishom",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-10 h-10 mb-5 text-gray-300 group-hover:text-accent transition-colors">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "KAGGLE",
      url: "https://www.kaggle.com/faiz7557",
      icon: (
        <div className="w-10 h-10 mb-5 flex items-center justify-center text-gray-300 group-hover:text-accent transition-colors">
          <span className="text-[2.75rem] font-bold font-sans">k</span>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] animate-in fade-in duration-1000 py-12">
      
      {/* Header section based on design */}
      <div className="text-center space-y-6 mb-16 relative w-full">
        {/* Glow effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-accent/20 rounded-[100%] blur-[80px] -z-10 pointer-events-none transition-colors duration-500"></div>
        
        <h4 className="uppercase tracking-[0.3em] text-sm text-muted font-semibold px-4 py-1">
          Get In Touch
        </h4>
        <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter">
          Let's Connect<span className="text-accent">.</span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center bg-card/60 border border-border-light rounded-[2rem] hover:border-accent/40 relative overflow-hidden backdrop-blur-md shrink-0"
            >
              {/* Subtle gradient inside the card overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.02] to-transparent pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                {social.icon}
                <span className="text-xs md:text-sm font-bold tracking-[0.15em] text-muted group-hover:text-foreground transition-colors">
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
    </div>
  );
}
