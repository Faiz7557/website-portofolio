"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const socials = [
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/faiziqbal.i?igsh=bndiNGlkYmJhNm9q",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-12 h-12 mb-6 text-muted group-hover:text-pink-500 transition-colors duration-500">
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
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-12 h-12 mb-6 text-muted group-hover:text-foreground transition-colors duration-500">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: "WHATSAPP",
      url: "https://wa.me/6285872037795",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-12 h-12 mb-6 text-muted group-hover:text-green-500 transition-colors duration-500">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      name: "EMAIL",
      url: "mailto:faiz.iqbal.itishom-2023@ftmm.unair.ac.id",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-12 h-12 mb-6 text-muted group-hover:text-red-500 transition-colors duration-500">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/faiz-iqbal-itishom",
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-12 h-12 mb-6 text-muted group-hover:text-blue-500 transition-colors duration-500">
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
        <div className="w-12 h-12 mb-6 flex items-center justify-center text-muted group-hover:text-sky-400 transition-colors duration-500">
          <span className="text-[3.25rem] font-bold font-sans">k</span>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] py-12 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header section */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 mb-20 relative w-full"
      >
        <h4 className="uppercase tracking-[0.4em] text-sm text-accent font-bold px-5 py-2 inline-block border border-accent/20 rounded-full bg-accent/5 backdrop-blur-sm shadow-[0_0_15px_rgba(226,194,117,0.1)]">
          Get In Touch
        </h4>
        <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter">
          Let's Connect<span className="text-accent animate-pulse">.</span>
        </h1>
        <p className="text-muted max-w-lg mx-auto text-sm md:text-base mt-4 font-medium leading-relaxed">
          Feel free to reach out for collaborations, project inquiries, or simply to say hi! I'm always open to discussing new opportunities.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full max-w-5xl mx-auto px-4 relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center"
        >
          {socials.map((social) => (
            <motion.a 
              variants={itemVariants}
              key={social.name} 
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group social-card w-full aspect-square max-w-[170px] md:max-w-[210px] flex flex-col items-center justify-center bg-white/40 dark:bg-card/40 border border-white/40 dark:border-white/5 rounded-[2.5rem] hover:border-accent/50 relative overflow-hidden backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 shadow-lg hover:shadow-[0_20px_40px_rgba(226,194,117,0.15)]"
            >
              {/* Animated Glow on Hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-accent/20 rounded-full blur-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full transform group-hover:scale-110 transition-transform duration-500 ease-out">
                {social.icon}
                <span className="text-xs md:text-sm font-extrabold tracking-[0.2em] text-muted group-hover:text-foreground transition-colors duration-500">
                  {social.name}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
