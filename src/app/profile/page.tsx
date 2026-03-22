"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Read initial theme
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);

    // Listen for toggle-theme events dispatched by Navbar
    const handleThemeChange = () => {
      const current = localStorage.getItem("theme") ?? "dark";
      setTheme(current);
    };
    window.addEventListener("storage", handleThemeChange);

    // Also listen via MutationObserver on <html> class changes
    const observer = new MutationObserver(() => {
      const isLight = document.documentElement.classList.contains("light-mode");
      setTheme(isLight ? "light" : "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  const [profilePhoto, setProfilePhoto] = useState<string>("");

  useEffect(() => {
    const baseName = theme === "light" ? "profile-light" : "profile-dark";

    const tryLoad = (extensions: string[]) => {
      if (extensions.length === 0) {
        setProfilePhoto(""); // show fallback star
        return;
      }
      const [ext, ...rest] = extensions;
      const img = new window.Image();
      img.src = `/${baseName}.${ext}`;
      img.onload = () => setProfilePhoto(`/${baseName}.${ext}`);
      img.onerror = () => tryLoad(rest);
    };

    tryLoad(["jpg", "jpeg", "png", "webp"]);
  }, [theme]);
  return (
    <div className="flex flex-col space-y-16 animate-in fade-in duration-1000 mt-12 relative z-10">
      
      {/* Bio Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 relative px-4 md:px-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[120%] bg-accent/5 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>

        {/* Text Content */}
        <div className="flex-1 space-y-8 relative z-10 w-full">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-md shadow-[0_0_20px_rgba(226,194,117,0.1)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Open for Collaboration</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-tight">
            Bridging Data with <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 dark:via-[#f0d588] to-accent drop-shadow-sm">Human Impact.</span>
          </h1>
          
          <div className="space-y-4 max-w-2xl relative">
            <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-accent/80 to-transparent rounded-full"></div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-normal pl-6">
              I am <span className="font-bold text-foreground">Faiz Iqbal Itishom</span>, a Data Science & Technology undergraduate at Universitas Airlangga. I specialize in transforming complex datasets into intuitive, actionable insights that drive decision-making.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed font-light pl-6">
              Beyond the algorithms, my deep interest in <span className="text-foreground font-medium">social science</span> fuels my leadership and organizational endeavors. Over the past five semesters, I've actively led teams and academically competed in both international and national levels, forming a firm belief that the best technological solutions are those built with a profound understanding of the people they serve.
            </p>
          </div>
          
          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
             <div className="flex flex-col p-4 md:p-5 rounded-2xl bg-foreground/5 border border-border-light backdrop-blur-sm hover:border-accent/40 transition-colors">
               <span className="text-3xl font-black text-accent mb-1 drop-shadow-md">30+</span>
               <span className="text-xs text-muted uppercase tracking-wider font-semibold">Competitions</span>
             </div>
             <div className="flex flex-col p-4 md:p-5 rounded-2xl bg-foreground/5 border border-border-light backdrop-blur-sm hover:border-accent/40 transition-colors">
               <span className="text-3xl font-black text-accent mb-1 drop-shadow-md">3.50</span>
               <span className="text-xs text-muted uppercase tracking-wider font-semibold">Current GPA</span>
             </div>
             <div className="flex flex-col p-4 md:p-5 rounded-2xl bg-foreground/5 border border-border-light backdrop-blur-sm hover:border-accent/40 transition-colors col-span-2 md:col-span-1">
               <span className="text-3xl font-black text-accent mb-1 drop-shadow-md">5+</span>
               <span className="text-xs text-muted uppercase tracking-wider font-semibold">Organizations</span>
             </div>
          </div>
        </div>

        {/* Squircle Image Layout */}
        <div className="w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] relative flex-shrink-0 group mx-auto lg:mx-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-700"></div>
          
          {/* Main Photo Card - Squircle */}
          <div className="absolute inset-0 rounded-[3rem] border border-border-light shadow-2xl overflow-hidden bg-white/40 dark:bg-[#0c0d14] backdrop-blur-xl z-10 transform transition-transform duration-700 group-hover:-rotate-2 group-hover:scale-[1.03]">
            {profilePhoto ? (
              <Image 
                src={`${profilePhoto}?v=${new Date().getTime()}`}
                alt="Faiz Iqbal Itishom"
                fill
                unoptimized={process.env.NODE_ENV === 'development'}
                className="object-cover object-top opacity-100 transition-transform duration-[2000ms] group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-foreground/5">
                <span className="text-8xl text-accent/50 drop-shadow-[0_0_15px_rgba(226,194,117,0.5)]">✦</span>
              </div>
            )}
            {/* Inner Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 dark:from-black/80 dark:via-black/10 to-transparent opacity-80 z-20 pointer-events-none"></div>
          </div>
          
          {/* Floating Badge Area */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 z-30 bg-black/80 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 p-3 md:p-4 rounded-2xl shadow-2xl transform transition-transform duration-700 group-hover:-translate-y-2 group-hover:translate-x-2 flex items-center gap-3 md:gap-4">
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 dark:bg-accent/20 flex items-center justify-center border border-accent/40 text-xl md:text-2xl shadow-[0_0_15px_rgba(226,194,117,0.3)]">
                🚀
             </div>
             <div>
               <p className="text-white font-bold text-xs md:text-sm">Data Science</p>
               <p className="text-accent text-[10px] md:text-xs font-mono uppercase tracking-widest mt-0.5">Surabaya, ID</p>
             </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        
        {/* Education */}
        <section className="space-y-8 relative">
          <div className="absolute top-[40px] md:top-[60px] bottom-0 left-[15px] md:left-[23px] w-[2px] bg-gradient-to-b from-accent via-accent/20 to-transparent -z-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-black text-foreground flex items-center mb-10 tracking-tight relative z-10 bg-background/0 w-fit">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/40 shadow-[0_0_15px_rgba(226,194,117,0.3)] mr-4 md:mr-5">
              🎓
            </div>
            Education Orbit
          </h2>

          <div className="space-y-8 pl-10 md:pl-16 relative">
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="relative glass-card p-6 md:p-8 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border-light shadow-lg hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(226,194,117,0.15)] hover:border-accent/50 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              
              <div className="absolute top-1/2 -left-[44px] md:-left-[68px] w-4 h-4 bg-accent border-4 border-background rounded-full shadow-[0_0_15px_rgba(226,194,117,0.8)] -translate-y-1/2 transition-transform duration-500 group-hover:scale-125 z-10"></div>
              
              <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-accent transition-all duration-300">Universitas Airlangga</h3>
              <p className="text-accent font-semibold mt-2 text-sm md:text-base">Data Science and Technology Major</p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-sm text-muted font-mono gap-2">
                <span className="flex items-center"><span className="mr-2">📍</span> Surabaya, Indonesia</span>
                <span className="bg-foreground/5 shadow-sm px-3 py-1.5 rounded-md border border-border-light text-xs font-bold tracking-wider uppercase">Aug 2023 - Aug 2027 <span className="text-accent">(Expected)</span></span>
              </div>
              
              <ul className="mt-6 space-y-3 text-foreground/85 text-sm md:text-base">
                <li className="flex items-start"><span className="text-accent mr-3 font-bold drop-shadow-[0_0_5px_rgba(226,194,117,0.5)]">✦</span> <span className="font-semibold text-foreground">GPA: 3.50/4.00</span></li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold drop-shadow-[0_0_5px_rgba(226,194,117,0.5)]">✦</span> Awardee of BSI Prestasi Scholarship (2024)</li>
              </ul>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
               className="relative glass-card p-6 md:p-8 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border-light shadow-lg hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] hover:border-foreground/30 group overflow-hidden">
              <div className="absolute top-1/2 -left-[44px] md:-left-[68px] w-4 h-4 bg-foreground/40 border-4 border-background rounded-full -translate-y-1/2 transition-colors duration-500 group-hover:bg-foreground/80 z-10"></div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground transition-colors duration-300">SMKN 3 Surabaya</h3>
              <p className="text-foreground/80 font-medium mt-2 text-sm md:text-base">High School Diploma</p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-sm text-muted font-mono gap-2">
                <span className="flex items-center"><span className="mr-2">🎥</span> Multimedia Major</span>
                <span className="bg-foreground/5 shadow-sm px-3 py-1.5 rounded-md border border-border-light text-xs font-bold tracking-wider uppercase">May 2020 - Jun 2023</span>
              </div>
              
              <div className="mt-6 inline-flex items-center px-4 py-2 bg-foreground/5 rounded-xl border border-border-light shadow-sm">
                <span className="text-accent mr-3 font-bold drop-shadow-[0_0_5px_rgba(226,194,117,0.5)]">✦</span>
                <span className="text-sm md:text-base font-medium">Final Score: <span className="font-bold text-foreground">88.64/100.00</span></span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="space-y-8 relative mt-12 md:mt-0">
          <div className="absolute top-[40px] md:top-[60px] bottom-0 left-[15px] md:left-[23px] w-[2px] bg-gradient-to-b from-accent via-accent/20 to-transparent -z-10"></div>

          <h2 className="text-3xl md:text-4xl font-black text-foreground flex items-center mb-10 tracking-tight relative z-10 bg-background/0 w-fit">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/40 shadow-[0_0_15px_rgba(226,194,117,0.3)] mr-4 md:mr-5">
              🏆
            </div>
            Achievements
          </h2>
          
          <div className="space-y-8 pl-10 md:pl-16 relative">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="relative glass-card p-6 md:p-8 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border-light shadow-lg hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(226,194,117,0.15)] hover:border-accent/50 group overflow-hidden">
               <div className="absolute top-10 -left-[44px] md:-left-[68px] w-4 h-4 bg-accent border-4 border-background rounded-full shadow-[0_0_15px_rgba(226,194,117,0.8)] animate-pulse z-10"></div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -mr-16 -mt-16 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
               
              <div className="flex items-center space-x-3 mb-6 border-b border-border-light/50 pb-4">
                 <span className="text-2xl drop-shadow-md">📜</span>
                 <h3 className="text-xl md:text-2xl font-black text-foreground">Certifications Array</h3>
              </div>
              
              <ul className="space-y-5 text-foreground/85 text-sm md:text-base">
                <li className="flex items-start group/item">
                  <span className="text-accent mr-3 font-bold mt-0.5 drop-shadow-[0_0_5px_rgba(226,194,117,0.5)] transition-transform group-hover/item:scale-125">✦</span>
                  <a href="#" className="font-medium hover:text-accent transition-colors leading-relaxed">Samsung Innovation Campus IoT Certification <span className="text-[10px] sm:text-xs ml-1 bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20 align-middle">Stage 1-4</span></a>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-accent mr-3 font-bold mt-0.5 drop-shadow-[0_0_5px_rgba(226,194,117,0.5)] transition-transform group-hover/item:scale-125">✦</span>
                  <a href="#" className="font-medium hover:text-accent transition-colors leading-relaxed">Multimedia Competency Certification (LSP)</a>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-accent mr-3 font-bold mt-0.5 drop-shadow-[0_0_5px_rgba(226,194,117,0.5)] transition-transform group-hover/item:scale-125">✦</span>
                  <a href="#" className="font-medium hover:text-accent transition-colors leading-relaxed">Basic Occupational Health & Safety (K3)</a>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-accent mr-3 font-bold mt-0.5 drop-shadow-[0_0_5px_rgba(226,194,117,0.5)] transition-transform group-hover/item:scale-125">✦</span>
                  <a href="#" className="font-medium hover:text-accent transition-colors leading-relaxed">TOEFL ITP (Prediction): <span className="font-black text-foreground">520</span></a>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-accent mr-3 font-bold mt-0.5 drop-shadow-[0_0_5px_rgba(226,194,117,0.5)] transition-transform group-hover/item:scale-125">✦</span>
                  <a href="#" className="font-medium hover:text-accent transition-colors leading-relaxed flex items-center flex-wrap gap-2">UKBI: <span className="font-black text-foreground">681</span> <span className="text-[10px] sm:text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full border border-accent/20">Sangat Unggul</span></a>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
               className="relative glass-card p-6 md:p-8 rounded-[2rem] bg-card/40 backdrop-blur-xl border border-border-light shadow-lg hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(226,194,117,0.15)] hover:border-accent/50 group overflow-hidden">
              <div className="absolute top-10 -left-[44px] md:-left-[68px] w-4 h-4 bg-foreground/60 border-4 border-background rounded-full z-10 transition-colors duration-500 group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(226,194,117,0.8)]"></div>
              
              <div className="flex items-center space-x-3 mb-6 border-b border-border-light/50 pb-4">
                 <span className="text-2xl drop-shadow-md">✨</span>
                 <h3 className="text-xl md:text-2xl font-black text-foreground">Constellation of Awards</h3>
              </div>
              
              <ul className="space-y-6 text-foreground/85 text-sm md:text-base">
                <li className="flex items-start group/item">
                  <span className="text-accent mr-4 text-xl leading-none drop-shadow-[0_0_8px_rgba(226,194,117,0.8)] mt-1 transition-transform group-hover/item:rotate-180 duration-500">★</span>
                  <div className="font-medium leading-relaxed">Various Fields of Competition:<br/><span className="text-muted text-sm block mt-1">Data Visualization, Statistics Infographic, Machine Learning, IoT, Statistics Essay, and many more.</span></div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-accent mr-4 text-xl leading-none drop-shadow-[0_0_8px_rgba(226,194,117,0.8)] mt-0.5 transition-transform group-hover/item:rotate-180 duration-500">★</span>
                  <div className="font-medium leading-relaxed"><span className="text-2xl font-black text-foreground mr-1">3</span> International Achievements</div>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-accent mr-4 text-xl leading-none drop-shadow-[0_0_8px_rgba(226,194,117,0.8)] mt-0.5 transition-transform group-hover/item:rotate-180 duration-500">★</span>
                  <div className="font-medium leading-relaxed"><span className="text-2xl font-black text-foreground mr-1">12</span> National Achievements</div>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
