"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const HeroProjectCard = ({ project }: { project: any }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="relative glass-card group p-1 overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_var(--star-glow-strong)] rounded-[2rem] mb-12">
      {/* Animated Conic Gradient Border Shimmer */}
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(226,194,117,1)_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-700 pointer-events-none z-0"></div>
      
      <div className="bg-card/90 backdrop-blur-2xl rounded-[1.8rem] h-full flex flex-col xl:flex-row p-8 md:p-10 relative z-10 items-center justify-between gap-10 lg:gap-14">
        
        {/* Image Carousel & MacOS Mockup */}
        <div className="w-full xl:w-[55%] relative shrink-0">
          
          {/* Floating Stat 1 - Top Left */}
          <div className="hidden md:block absolute -top-6 -left-6 z-30 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transform -rotate-[4deg] group-hover:rotate-0 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
            <div className="text-[10px] text-muted font-bold tracking-[0.2em] mb-1">EFFICIENCY</div>
            <div className="text-lg font-black text-accent drop-shadow-[0_0_8px_rgba(226,194,117,0.5)]">1 Hour ➔ 1 Min</div>
          </div>

          {/* Floating Stat 2 - Bottom Right */}
          <div className="hidden md:flex absolute -bottom-6 -right-6 z-30 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-[0_15px_30px_rgba(0,0,0,0.5)] transform rotate-[4deg] group-hover:rotate-0 transition-transform duration-500 items-center space-x-3 group-hover:scale-105 group-hover:-translate-y-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
            </span>
            <div className="text-sm font-bold tracking-wide text-white">Live Dashboard</div>
          </div>

          {/* MacOS Window Mockup */}
          <div className="w-full rounded-t-2xl rounded-b-xl bg-[#0f111a] border border-white/10 overflow-hidden shadow-2xl relative z-20 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-shadow duration-700">
            {/* Toolbar */}
            <div className="h-10 bg-gradient-to-r from-white/5 to-transparent flex items-center px-4 space-x-2 border-b border-white/5 backdrop-blur-md">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_5px_#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_5px_#27c93f]"></div>
            </div>
            
            {/* Image Area */}
            <div className="relative w-full aspect-video flex items-center justify-center bg-[#07090e]">
              {project.images.map((img: string, idx: number) => (
                 <Image 
                   key={idx}
                   src={img} 
                   alt={`${project.title} - Preview`} 
                   fill
                   className={`object-contain transition-all duration-[1500ms] ease-out ${currentImageIdx === idx ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-[1.02]"}`}
                 />
              ))}

              {/* Dots */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2 z-20">
                  {project.images.map((_: any, idx: number) => (
                    <div 
                      key={idx} 
                      className={`h-2 rounded-full transition-all duration-700 ${currentImageIdx === idx ? "w-8 bg-white shadow-[0_0_10px_white]" : "w-2 bg-white/30 backdrop-blur-md hover:bg-white/50 cursor-pointer"}`}
                      onClick={() => setCurrentImageIdx(idx)}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1 justify-center space-y-6">
          <div className="inline-flex items-center space-x-3">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase bg-accent/10 px-4 py-2 rounded-full border border-accent/30 shadow-[0_0_15px_rgba(226,194,117,0.1)]">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-accent transition-all duration-500 leading-tight">{project.title}</h2>
          <p className="text-muted leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs md:text-sm px-4 py-2 bg-node border border-border-light rounded-xl text-foreground font-medium shadow-sm hover:border-accent/40 hover:text-accent transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-6">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-foreground hover:bg-accent text-background px-8 py-3.5 rounded-2xl font-bold shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_rgba(226,194,117,0.4)] transition-all duration-300 hover:-translate-y-1">
              <span>Explore GitHub Repository</span>
              <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 rounded-full blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0"></div>
    </div>
  );
};

const FallbackImage = ({ repo, alt, className }: { repo: string, alt: string, className?: string }) => {
  const [src, setSrc] = useState(`/projects/${repo}.jpg`);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    // Reset image sequence if the repository identifier changes
    setSrc(`/projects/${repo}.jpg`);
    setErrorCount(0);
  }, [repo]);
  
  return (
    <Image 
      src={errorCount < 2 ? src : `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%231f1f2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%236b7280'%3EUpload: public/projects/${repo}.jpg%3C/text%3E%3C/svg%3E`} 
      alt={alt} 
      fill 
      className={className} 
      onError={() => {
        if (errorCount === 0) {
          // Immediately try PNG if JPG fails, triggering only a single fallback request
          setSrc(`/projects/${repo}.png`);
          setErrorCount(1);
        } else {
          // Both failed, yield to SVG placeholder
          setErrorCount(2);
        }
      }}
    />
  );
};

export default function Projects() {
  const heroProjects = [
    {
      title: "AirNav Operations Dashboard",
      description: "Developed an operational data dashboard for AirNav Indonesia during my internship. Features include interactive charts, drill-down capabilities, custom KPI comparisons, and comprehensive UI/UX improvements to provide actionable insights into core operational data.",
      tags: ["Laravel", "JavaScript", "UI/UX", "MySQL", "Dashboarding"],
      link: "https://github.com/Faiz7557/internship-airnav-project",
      images: [
        "/projects/airnav-1.png",
        "/projects/airnav-2.png",
        "/projects/airnav-3.png",
      ]
    }
    // You can add more hero projects here!
  ];

  const competitions = [
    // Statistic Infographic
    { id: "01", title: "Rasio 9.0 University Infographic Competition", category: "Statistic Infographic", host: "Universitas Padjajaran", level: "Internasional", award: "1st Place", repo: "Rasio", icon: "🥇" },
    { id: "03", title: "Dokter Data International Competition", category: "Statistic Infographic", host: "Universitas Diponegoro", level: "Internasional", award: "Top 10", repo: "Dokter-Data", icon: "⭐" },
    { id: "04", title: "Hasanuddin Statistics Events I", category: "Statistic Infographic", host: "Universitas Hasanuddin", level: "Nasional", award: "1st Place", repo: "HSE", icon: "🥇" },
    { id: "06", title: "Hi-Tech Data Visualization 7", category: "Statistic Infographic", host: "Politeknik Caltex Riau", level: "Nasional", award: "1st Place", repo: "Hitech", icon: "🥇" },
    { id: "07", title: "Visual Quest Airnology 3.0", category: "Statistic Infographic", host: "Universitas Airlangga", level: "Nasional", award: "2nd Place", repo: "Airnology", icon: "🥈" },
    { id: "10", title: "Nacoesta Data Visualization", category: "Statistic Infographic", host: "Universitas Muhammadiyah Solo", level: "Nasional", award: "3rd Place", repo: "Nacoesta", icon: "🥉" },
    { id: "11", title: "SSF SSIC", category: "Statistic Infographic", host: "Universitas Negeri Sebelas Maret", level: "Nasional", award: "3rd Place", repo: "SSF", icon: "🥉" },
    { id: "14", title: "Airlangga Statistics Competition", category: "Statistic Infographic", host: "Universitas Airlangga", level: "Nasional", award: "Top 15", repo: "Arsen", icon: "⭐" },
    { id: "15", title: "Kompetisi Infografis Statistik ANAVA UGM", category: "Statistic Infographic", host: "Universitas Gadjah Mada", level: "Nasional", award: "Top 15", repo: "anava-ugm", icon: "⭐" },

    // Data Visualization
    { id: "02", title: "Poisson Statistics Infographic Competition", category: "Data Visualization", host: "STIS", level: "International", award: "Honorable Mention", repo: "Poisson", icon: "⭐" },
    { id: "05", title: "Data Visualization ACW Stan", category: "Data Visualization", host: "PKN STAN", level: "Nasional", award: "1st Place", repo: "acw-stan", icon: "🥇" },

    // Machine Learning
    { id: "13", title: "Shine Machine Learning Competition", category: "Machine Learning", host: "Universitas Binus", level: "Nasional", award: "Top 10", repo: "Shine", icon: "⭐" },
    { id: "16", title: "Kaggle Clash 3", category: "Machine Learning", host: "IRIS Unair", level: "Internal IRIS", award: "1st Place", repo: "kaggle-clash-3", icon: "🥇" },

    // Machine Learning x Infographic
    { id: "12", title: "Falcon x Qatar Airways AI Infographic", category: "Machine Learning x Infographic", host: "UPH x Qatar Airways", level: "Nasional", award: "Finalist", repo: "Falcon", icon: "⭐" },

    // Psychology Infographic
    { id: "08", title: "PsyAcc 2.0 Psychology Competition", category: "Psychology Infographic", host: "Universitas Sumatra Utara", level: "Nasional", award: "2nd Place", repo: "PsyAcc", icon: "🥈" },

    // IoT
    { id: "09", title: "IoT Tech Blue Tech Fest", category: "IoT", host: "Universitas Telkom", level: "Nasional", award: "3rd Place", repo: "BTF", icon: "🥉" }
  ];

  const categories = Array.from(new Set(competitions.map((c) => c.category)));

  const collegeProjects = [
    { id: "c1", title: "Pengantar Kecerdasan Buatan", repo: "pengantar-kecerdasan-buatan", icon: "🧠" },
    { id: "c2", title: "Data Mining I", repo: "data-mining", icon: "⛏️" },
    { id: "c3", title: "Data Mining II", repo: "data mining ii", icon: "📊" },
    { id: "c4", title: "Natural Language Processing", repo: "natural-langguage-processing", icon: "🗣️" },
    { id: "c5", title: "Analisis Data Spasial", repo: "analisis-data-spasial", icon: "🗺️" },
    { id: "c6", title: "Basis Data", repo: "basis-data", icon: "🗄️" },
    { id: "c7", title: "Proses Stokastik", repo: "proses-stokastik", icon: "📈" },
    { id: "c8", title: "Multivariat", repo: "multivariat", icon: "📉" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col space-y-16 animate-in fade-in duration-1000 mt-8 pb-24">
      {/* Header */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Featured <span className="text-accent glow-text">Projects</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          A selection of my recent works in data science, predictive modeling, data visualization, and web applications.
        </p>

        {/* Jump To Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button onClick={() => scrollTo('competition-projects')} className="px-6 py-2.5 rounded-full bg-foreground/5 border border-border-light hover:border-accent/40 hover:bg-accent/10 transition-colors text-sm font-medium z-10 relative cursor-pointer shadow-sm">
            Jump To: Competition Projects
          </button>
          <button onClick={() => scrollTo('college-projects')} className="px-6 py-2.5 rounded-full bg-foreground/5 border border-border-light hover:border-accent/40 hover:bg-accent/10 transition-colors text-sm font-medium z-10 relative cursor-pointer shadow-sm">
            Jump To: College Projects
          </button>
        </div>
      </section>

      {/* Hero Sections - Maps over hero projects */}
      <section>
        {heroProjects.map((project, index) => (
          <HeroProjectCard key={index} project={project} />
        ))}
      </section>

      {/* Frameworks Bento Box Layout */}
      <section className="pt-16 pb-8">
        <div className="flex items-center space-x-4 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground flex items-center">
            <span className="text-accent text-3xl md:text-5xl mr-4 drop-shadow-[0_0_15px_rgba(226,194,117,0.5)]">✦</span> Tech Stack Integrations
          </h3>
          <div className="h-px bg-gradient-to-r from-accent/50 to-transparent flex-1"></div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 auto-rows-[160px] md:auto-rows-[180px] lg:auto-rows-[220px]">
          
          {/* Bento Box 1: Data Viz (Spans 4 cols, 2 rows) - THE BIGGEST ONE */}
          <div className="bg-card/60 backdrop-blur-xl border border-border-light shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] col-span-1 md:col-span-4 lg:col-span-4 row-span-2 md:row-span-2 rounded-[2rem] p-6 lg:p-10 flex flex-col justify-end relative overflow-hidden group hover:border-[#E97627]/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(233,118,39,0.1)]">
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#E97627]/0 via-[#E97627]/5 to-[#E97627]/10 opacity-30 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
             
             {/* Abstract Bar Chart Decoration in Background */}
             <div className="absolute right-0 bottom-0 pointer-events-none w-3/4 h-full flex items-end justify-end opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <svg viewBox="0 0 400 300" className="w-full h-full object-cover object-right-bottom transform translate-y-10 translate-x-10 group-hover:translate-y-0 transition-transform duration-1000">
                  <defs>
                     <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E97627" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#E97627" stopOpacity="0.0" />
                     </linearGradient>
                  </defs>
                  <path d="M0,300 L0,200 L50,180 L100,220 L150,120 L200,160 L250,50 L300,100 L350,20 L400,60 L400,300 Z" fill="url(#chartGlow)" />
                  <path d="M0,200 L50,180 L100,220 L150,120 L200,160 L250,50 L300,100 L350,20 L400,60" fill="none" stroke="#E97627" strokeWidth="4" className="drop-shadow-[0_0_10px_#E97627]" />
               </svg>
             </div>

             <div className="absolute top-8 right-8 md:top-10 md:right-10 text-6xl md:text-8xl opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none drop-shadow-[0_0_20px_#E97627]">📈</div>
             
             <div className="relative z-10 w-full md:w-3/4">
               <div className="flex items-center space-x-3 mb-4 md:mb-6">
                 <span className="px-4 py-1.5 bg-[#E97627]/10 border border-[#E97627]/30 text-[#E97627] text-xs font-bold rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(233,118,39,0.3)]">Tableau</span>
                 <span className="px-4 py-1.5 bg-[#3776AB]/10 border border-[#3776AB]/30 text-[#3776AB] text-xs font-bold rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(55,118,171,0.3)]">Python</span>
               </div>
               <h4 className="text-3xl md:text-5xl font-black text-foreground mb-3 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-[#E97627] transition-all duration-500">Data Visualization & Storytelling</h4>
               <p className="text-sm md:text-lg text-foreground/70 leading-relaxed font-medium">Exploratory Data Analysis, High-level Storytelling, and interactive dashboards mapped via Plotly, Seaborn, and native advanced Tableau metrics.</p>
             </div>
          </div>

          {/* Bento Box 2: Machine Learning */}
          <div className="bg-card/60 backdrop-blur-md border border-border-light shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] col-span-1 md:col-span-2 lg:col-span-2 min-h-[160px] md:min-h-0 row-span-1 p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden group hover:border-[#F7931E]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(247,147,30,0.1)] rounded-[2rem]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#F7931E]/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10 flex items-start justify-between h-full flex-col">
               <span className="px-3 py-1 bg-[#F7931E]/10 border border-[#F7931E]/20 text-[#F7931E] text-[10px] md:text-xs font-bold rounded-full mb-2 uppercase tracking-wider">Scikit-Learn</span>
               <h4 className="text-xl md:text-2xl font-bold text-foreground">Machine Learning</h4>
               <span className="absolute bottom-4 right-4 text-5xl md:text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(247,147,30,0.5)]">🤖</span>
            </div>
          </div>

          {/* Bento Box 3: Computer Vision */}
          <div className="bg-card/60 backdrop-blur-md border border-border-light shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] col-span-1 md:col-span-2 lg:col-span-2 min-h-[160px] md:min-h-0 row-span-1 p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden group hover:border-[#EE4C2C]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(238,76,44,0.1)] rounded-[2rem]">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-[#EE4C2C]/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10 flex items-start justify-between h-full flex-col">
               <span className="px-3 py-1 bg-[#EE4C2C]/10 border border-[#EE4C2C]/20 text-[#EE4C2C] text-[10px] md:text-xs font-bold rounded-full mb-2 uppercase tracking-wider">PyTorch</span>
               <h4 className="text-xl md:text-2xl font-bold text-foreground">Computer Vision</h4>
               <span className="absolute top-4 right-4 text-5xl md:text-6xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 drop-shadow-[0_0_15px_rgba(238,76,44,0.5)]">👁️</span>
            </div>
          </div>

          {/* Bento Box 4: NLP */}
          <div className="bg-card/60 backdrop-blur-md border border-border-light shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] col-span-1 md:col-span-2 lg:col-span-3 min-h-[160px] md:min-h-0 row-span-1 p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] rounded-[2rem]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10 flex flex-row items-center justify-between w-full">
               <div className="flex flex-col items-start space-y-2">
                 <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">Transformers</span>
                 <h4 className="text-lg md:text-2xl font-bold text-foreground">Natural Language Processing</h4>
               </div>
               <span className="text-5xl md:text-6xl opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">🧠</span>
            </div>
          </div>

          {/* Bento Box 5: Dashboarding */}
          <div className="bg-card/60 backdrop-blur-md border border-border-light shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] col-span-1 md:col-span-2 lg:col-span-3 min-h-[160px] md:min-h-0 row-span-1 p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden group hover:border-[#FF2D20]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,45,32,0.1)] rounded-[2rem]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#FF2D20]/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10 flex flex-row items-center justify-between w-full">
               <div className="flex flex-col items-start space-y-2">
                 <span className="px-3 py-1 bg-[#FF2D20]/10 border border-[#FF2D20]/20 text-[#FF2D20] text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">Laravel & JS</span>
                 <h4 className="text-lg md:text-2xl font-bold text-foreground">Interactive Dashboarding</h4>
               </div>
               <span className="text-5xl md:text-6xl opacity-30 group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-500 drop-shadow-[0_0_20px_rgba(255,45,32,0.8)]">⚡</span>
            </div>
          </div>

        </div>
      </section>

      {/* Competition Projects Section */}
      <section id="competition-projects" className="space-y-16 pt-8 scroll-mt-24">
        <div className="text-center space-y-6">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-accent/50 to-yellow-500/50 mb-2">
            <div className="bg-black/50 backdrop-blur-md rounded-full px-6 py-2 border border-white/5 shadow-2xl">
              <h2 className="text-3xl font-bold text-foreground tracking-wide">🏆 Competition <span className="text-accent">Projects</span></h2>
            </div>
          </div>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            A diverse collection of multi-disciplinary works tackling real-world problems through data science, machine learning, visual analytics, IoT, and more.
          </p>
          <div className="flex justify-center items-center gap-4 pt-4 flex-wrap">
            <span className="text-sm px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-full font-medium shadow-lg shadow-blue-500/5">30+ Competitions</span>
            <span className="text-sm px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 rounded-full font-medium shadow-lg shadow-yellow-500/5">9 Podium Finishes</span>
            <span className="text-sm px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-300 rounded-full font-medium shadow-lg shadow-red-500/5">National & Int. Level</span>
          </div>
        </div>

        <div className="space-y-20 pt-8">
          {categories.map((category) => (
            <div key={category} className="space-y-8 relative">
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent flex-1"></div>
                <h3 className="text-2xl font-bold text-foreground flex items-center px-4 bg-black/40 backdrop-blur-md rounded-xl border border-border-light py-2 shadow-xl">
                  <span className="mr-3 text-3xl">
                    {category === 'Statistic Infographic' ? '📈🎨' : 
                     category === 'Data Visualization' ? '📊' : 
                     category === 'Machine Learning' ? '🤖' : 
                     category === 'Psychology Infographic' ? '🧠🎨' : 
                     category === 'IoT' ? '⚙️' : '🤖🎨'}
                  </span> 
                  {category}
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competitions
                  .filter((c) => c.category === category)
                  .map((comp, idx) => (
                    <motion.a 
                      key={comp.id} 
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      href={`https://github.com/Faiz7557/competition-projects/tree/main/${comp.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card group flex flex-col p-4 md:p-5 rounded-[2rem] hover:border-accent/50 hover:-translate-y-2 transition-all duration-700 ease-in-out hover:shadow-[0_20px_40px_rgba(226,194,117,0.15)] w-full relative overflow-hidden bg-white/40 dark:bg-card/40 backdrop-blur-2xl border border-white/20 dark:border-border-light h-fit"
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

                      {/* Image container */}
                      <div className="relative w-full aspect-[4/3] mb-5 rounded-[1.5rem] overflow-hidden bg-[#0c0d14] border border-black/5 dark:border-white/5 group-hover:border-accent/30 transition-all duration-700 ease-in-out shrink-0 z-10 shadow-sm group-hover:shadow-[0_5px_20px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
                        {/* Shimmer Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-20 opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                        
                        {/* Base Cover Image (Fades out on hover) */}
                        <FallbackImage 
                          repo={comp.repo} 
                          alt={comp.title} 
                          className="w-full h-full object-cover object-top transition-all duration-700 opacity-95 group-hover:opacity-0 group-hover:scale-95 z-10"
                        />
                        {/* Hover Contain Image (Fades in & slightly scales up on hover) */}
                        <FallbackImage 
                          repo={comp.repo} 
                          alt={`${comp.title} Full`} 
                          className="absolute top-0 left-0 w-full h-full object-contain p-2 transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 z-15"
                        />

                        {/* Floating Badge Over Image */}
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-30 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
                           <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center space-x-2 shadow-xl">
                             <span className="text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] leading-none -mt-0.5">{comp.icon}</span>
                             <span className="text-[10px] md:text-xs font-bold text-white tracking-widest uppercase shadow-black drop-shadow-md">{comp.award}</span>
                           </div>
                        </div>
                      </div>
                      
                      <div className="px-1 flex flex-col flex-1 relative z-10">
                        <h4 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug">{comp.title}</h4>
                        
                        <div className="mt-auto flex flex-wrap gap-2 pt-2">
                          <div className="px-3 py-1.5 rounded-xl bg-foreground/5 dark:bg-white/5 border border-border-light flex items-center text-[10px] md:text-xs font-semibold text-muted font-mono tracking-tight group-hover:border-accent/30 group-hover:text-foreground transition-colors shadow-sm">
                            <span className="mr-1.5 opacity-80 text-sm">🏢</span> 
                            <span className="truncate max-w-[120px] md:max-w-max" title={comp.host}>{comp.host}</span>
                          </div>
                          <div className="px-3 py-1.5 rounded-xl bg-foreground/5 dark:bg-white/5 border border-border-light flex items-center text-[10px] md:text-xs font-semibold text-muted font-mono tracking-tight group-hover:border-accent/30 group-hover:text-accent transition-colors shadow-sm">
                            <span className="mr-1.5 opacity-80 text-sm">
                              {comp.level.includes("Internasional") || comp.level.includes("International") ? "🌍" : 
                               comp.level.includes("Internal") ? "🏠" : "🇮🇩"}
                            </span> 
                            {comp.level}
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* College Projects Section */}
      <section id="college-projects" className="space-y-16 pt-16 scroll-mt-24">
        <div className="text-center space-y-6">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-accent/50 to-yellow-500/50 mb-2">
            <div className="bg-black/50 backdrop-blur-md rounded-full px-6 py-2 border border-white/5 shadow-2xl">
              <h2 className="text-3xl font-bold text-foreground tracking-wide">🎓 College <span className="text-accent">Projects</span></h2>
            </div>
          </div>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Academic assignments and coursework implementations focused on data mining, statistics, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {collegeProjects.map((comp, idx) => (
            <motion.a 
              key={comp.id} 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              href={`https://github.com/Faiz7557/College-Project/tree/main/${comp.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex flex-col p-4 md:p-5 rounded-[2rem] hover:border-accent/50 hover:-translate-y-2 transition-all duration-700 ease-in-out hover:shadow-[0_20px_40px_rgba(226,194,117,0.15)] w-full relative overflow-hidden bg-white/40 dark:bg-card/40 backdrop-blur-2xl border border-white/20 dark:border-border-light h-fit"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

              {/* Image container */}
              <div className="relative w-full aspect-[4/3] mb-5 rounded-[1.5rem] overflow-hidden bg-[#0c0d14] border border-black/5 dark:border-white/5 group-hover:border-accent/30 transition-all duration-700 ease-in-out shrink-0 z-10 shadow-sm group-hover:shadow-[0_5px_20px_rgba(0,0,0,0.15)] dark:group-hover:shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
                {/* Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-20 opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Base Cover Image (Fades out on hover) */}
                <FallbackImage 
                  repo={comp.repo} 
                  alt={comp.title} 
                  className="w-full h-full object-cover object-top transition-all duration-700 opacity-95 group-hover:opacity-0 group-hover:scale-95 z-10"
                />
                {/* Hover Contain Image (Fades in & slightly scales up on hover) */}
                <FallbackImage 
                  repo={comp.repo} 
                  alt={`${comp.title} Full`} 
                  className="absolute top-0 left-0 w-full h-full object-contain p-2 transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 z-15"
                />

                {/* Floating Badge Over Image (Category) */}
                <div className="absolute bottom-3 left-3 flex justify-between items-center z-30 transform group-hover:-translate-y-1 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-100">
                    <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center space-x-2 shadow-xl">
                      <span className="text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] leading-none -mt-0.5">🎓</span>
                      <span className="text-[10px] md:text-xs font-bold text-white tracking-widest uppercase shadow-black drop-shadow-md">College Project</span>
                    </div>
                </div>
              </div>
              
              <div className="px-1 flex flex-col flex-1 relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2 leading-snug">{comp.title}</h4>
                
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <div className="px-3 py-1.5 rounded-xl bg-foreground/5 dark:bg-white/5 border border-border-light flex items-center text-[10px] md:text-xs font-semibold text-muted font-mono tracking-tight group-hover:border-accent/30 group-hover:text-foreground transition-colors shadow-sm">
                    <span className="mr-1.5 opacity-80 text-sm">📚</span> 
                    <span className="truncate max-w-[120px] md:max-w-max text-ellipsis">Coursework</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center pt-24 border-t border-white/5 space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Inspired by these projects?</h2>
        <Link href="/contact" className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-accent/10 border border-accent/40 text-accent font-semibold hover:bg-accent hover:text-foreground transition-all shadow-[0_0_20px_rgba(226,194,117,0.2)]">
          <span>Let's collaborate</span>
        </Link>
      </section>
      
    </div>
  );
}
