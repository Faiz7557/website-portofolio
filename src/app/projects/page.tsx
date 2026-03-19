"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const HeroProjectCard = ({ project }: { project: any }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="relative glass-card group p-0.5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_var(--star-glow-strong)] rounded-2xl mb-12">
      {/* Gradient border shimmer */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
      <div className="bg-background/60 backdrop-blur-xl rounded-[14px] h-full flex flex-col md:flex-row p-8 md:p-12 relative z-10 items-center gap-8 md:gap-12">
        
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 rounded-xl bg-foreground/5 border border-border-light mb-8 md:mb-0 md:mr-10 overflow-hidden relative shadow-2xl group-hover:border-accent/40 transition-colors shrink-0" style={{aspectRatio: '16/9'}}>
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-0"></div>
          
          {/* Images */}
          {project.images.map((img: string, idx: number) => (
             <img 
               key={idx}
               src={img} 
               alt={`${project.title} - Image ${idx + 1}`} 
               className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${currentImageIdx === idx ? "opacity-90 group-hover:opacity-100 z-10 group-hover:scale-105" : "opacity-0 z-0"}`}
               onError={(e) => {
                 const src = e.currentTarget.src;
                 if (src.endsWith('.jpg') || src.endsWith('.jpeg')) {
                   e.currentTarget.onerror = (e2) => {
                     (e2 as any).currentTarget.onerror = null;
                     (e2 as any).currentTarget.src = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231f1f2e'/%3E%3Ccircle cx='400' cy='300' r='100' fill='%23a855f7' opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%236b7280'%3ENo image found%3C/text%3E%3C/svg%3E`;
                   };
                   e.currentTarget.src = src.replace(/\.(jpg|jpeg)$/, '.png');
                 } else if (src.endsWith('.png')) {
                   e.currentTarget.onerror = (e2) => {
                     (e2 as any).currentTarget.onerror = null;
                     (e2 as any).currentTarget.src = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231f1f2e'/%3E%3Ccircle cx='400' cy='300' r='100' fill='%23a855f7' opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%236b7280'%3ENo image found%3C/text%3E%3C/svg%3E`;
                   };
                   e.currentTarget.src = src.replace('.png', '.jpg');
                 } else {
                   e.currentTarget.onerror = null;
                   e.currentTarget.src = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%231f1f2e'/%3E%3Ccircle cx='400' cy='300' r='100' fill='%23a855f7' opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%236b7280'%3ENo image found%3C/text%3E%3C/svg%3E`;
                 }
               }}
             />
          ))}

          {/* Dots Indicator */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-0 w-full flex justify-center space-x-2 z-20">
              {project.images.map((_: any, idx: number) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all duration-500 ${currentImageIdx === idx ? "w-6 bg-accent shadow-[0_0_10px_rgba(226,194,117,0.8)]" : "w-2 bg-foreground/40 hover:bg-foreground/60 cursor-pointer"}`}
                  onClick={() => setCurrentImageIdx(idx)}
                ></div>
              ))}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1 justify-center space-y-6">
          <div className="inline-flex items-center space-x-2">
            <span className="text-accent text-sm md:text-base font-bold tracking-widest uppercase bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20 shadow-[0_0_10px_rgba(226,194,117,0.2)]">Featured Project</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">{project.title}</h2>
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-xs md:text-sm px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium shadow-sm backdrop-blur-md hover:bg-accent/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-8 flex gap-4 flex-wrap">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center space-x-3 bg-accent text-background px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_var(--star-glow-strong)]">
              <span>View GitHub Repository</span>
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-accent/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0"></div>
    </div>
  );
};

const FallbackImage = ({ repo, alt, className }: { repo: string, alt: string, className?: string }) => {
  const [src, setSrc] = useState(`/projects/${repo}.jpg`);
  
  useEffect(() => {
    let isMounted = true;
    
    // Explicitly test file existence in browser memory behind the scenes
    const imgJPG = new Image();
    imgJPG.src = `/projects/${repo}.jpg`;
    imgJPG.onload = () => { if (isMounted) setSrc(`/projects/${repo}.jpg`); };
    imgJPG.onerror = () => {
      const imgPNG = new Image();
      imgPNG.src = `/projects/${repo}.png`;
      imgPNG.onload = () => { if (isMounted) setSrc(`/projects/${repo}.png`); };
      imgPNG.onerror = () => {
        const imgJPEG = new Image();
        imgJPEG.src = `/projects/${repo}.jpeg`;
        imgJPEG.onload = () => { if (isMounted) setSrc(`/projects/${repo}.jpeg`); };
        imgJPEG.onerror = () => {
          if (isMounted) {
            setSrc(`data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%231f1f2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%236b7280'%3EUpload: public/projects/${repo}.jpg / .png%3C/text%3E%3C/svg%3E`);
          }
        };
      };
    };
    
    return () => { isMounted = false; };
  }, [repo]);

  return <img src={src} alt={alt} className={className} />;
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
    { id: "01", title: "Rasio 9.0 University Infographic Competition", category: "Statistic Infographic", host: "Universitas Padjajaran", level: "Internasional", award: "1st Place", repo: "Rasio", icon: "🥇" },
    { id: "02", title: "Poisson Statistics Infographic Competition", category: "Data Visualization", host: "STIS", level: "International", award: "Honorable Mention", repo: "Poisson", icon: "⭐" },
    { id: "03", title: "Dokter Data International Competition", category: "Machine Learning", host: "Universitas Diponegoro", level: "Internasional", award: "Top 10", repo: "Dokter-Data", icon: "⭐" },
    { id: "04", title: "Hasanuddin Statistics Events I", category: "Statistic Infographic", host: "Universitas Hasanuddin", level: "Nasional", award: "1st Place", repo: "HSE", icon: "🥇" },
    { id: "05", title: "Data Visualization ACW Stan", category: "Statistic Infographic", host: "PKN STAN", level: "Nasional", award: "1st Place", repo: "acw-stan", icon: "🥇" },
    { id: "06", title: "Hi-Tech Data Visualization 7", category: "Statistic Infographic", host: "Politeknik Caltex Riau", level: "Nasional", award: "1st Place", repo: "Hitech", icon: "🥇" },
    { id: "07", title: "Visual Quest Airnology 3.0", category: "Statistic Infographic", host: "Universitas Airlangga", level: "Nasional", award: "2nd Place", repo: "Airnology", icon: "🥈" },
    { id: "08", title: "PsyAcc 2.0 Psychology Competition", category: "Psychology Infographic", host: "Universitas Sumatra Utara", level: "Nasional", award: "2nd Place", repo: "PsyAcc", icon: "🥈" },
    { id: "09", title: "IoT Tech Blue Tech Fest", category: "IoT", host: "Universitas Telkom", level: "Nasional", award: "3rd Place", repo: "BTF", icon: "🥉" },
    { id: "10", title: "Nacoesta Data Visualization", category: "Statistic Infographic", host: "Universitas Muhammadiyah Solo", level: "Nasional", award: "3rd Place", repo: "Nacoesta", icon: "🥉" },
    { id: "11", title: "SSF SSIC", category: "Statistic Infographic", host: "Universitas Negeri Sebelas Maret", level: "Nasional", award: "3rd Place", repo: "SSF", icon: "🥉" },
    { id: "12", title: "Falcon x Qatar Airways AI Infographic", category: "Machine Learning x Infographic", host: "UPH x Qatar Airways", level: "Nasional", award: "Finalist", repo: "Falcon", icon: "⭐" },
    { id: "13", title: "Shine Machine Learning Competition", category: "Machine Learning", host: "Universitas Binus", level: "Nasional", award: "Top 10", repo: "Shine", icon: "⭐" },
    { id: "14", title: "Airlangga Statistics Competition", category: "Statistic Infographic", host: "Universitas Airlangga", level: "Nasional", award: "Top 15", repo: "Arsen", icon: "⭐" },
    { id: "15", title: "Kompetisi Infografis Statistik ANAVA UGM", category: "Statistic Infographic", host: "Universitas Gadjah Mada", level: "Nasional", award: "Top 15", repo: "anava-ugm", icon: "⭐" },
    { id: "16", title: "Kaggle Clash 3", category: "Machine Learning", host: "IRIS Unair", level: "Internal IRIS", award: "1st Place", repo: "kaggle-clash-3", icon: "🥇" }
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

  return (
    <div className="flex flex-col space-y-20 animate-in fade-in duration-1000 mt-12 pb-24">
      {/* Header */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Featured <span className="text-accent glow-text">Projects</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          A selection of my recent works in data science, predictive modeling, data visualization, and web applications.
        </p>
      </section>

      {/* Hero Sections - Maps over hero projects */}
      <section>
        {heroProjects.map((project, index) => (
          <HeroProjectCard key={index} project={project} />
        ))}
      </section>

      {/* Competition Projects Section */}
      <section className="space-y-16 pt-8">
        <div className="text-center space-y-6">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-accent/50 to-yellow-500/50 mb-2">
            <div className="bg-black/50 backdrop-blur-md rounded-full px-6 py-2 border border-white/5 shadow-2xl">
              <h2 className="text-3xl font-bold text-foreground tracking-wide">🏆 Competition <span className="text-accent">Projects</span></h2>
            </div>
          </div>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            A diverse collection of multi-disciplinary works tackling real-world problems through data science, machine learning, and visual analytics.
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
                  .map((comp) => (
                    <a 
                      key={comp.id} 
                      href={`https://github.com/Faiz7557/competition-projects/tree/main/${comp.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card group flex flex-col p-6 rounded-2xl hover:border-accent/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_var(--star-glow)] w-full relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

                      {/* Image container with 4:5 aspect ratio (Compact Portrait) */}
                      <div className="relative w-full aspect-[4/5] mb-6 rounded-xl overflow-hidden bg-foreground/5 border border-border-light group-hover:border-accent/40 transition-colors shrink-0 z-10 flex items-center justify-center">
                        <FallbackImage 
                          repo={comp.repo} 
                          alt={comp.title} 
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                      </div>

                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <span className="text-3xl drop-shadow-md" title={comp.award}>{comp.icon}</span>
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-foreground/5 text-gray-300 border border-border-light group-hover:border-accent/50 group-hover:text-accent group-hover:bg-accent/10 transition-all shadow-sm">
                          {comp.award}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2 relative z-10">{comp.title}</h4>
                      
                      <div className="mt-auto pt-6 space-y-3 relative z-10">
                        <div className="flex items-center text-sm text-muted">
                          <span className="mr-3 opacity-80 text-lg">🏢</span> 
                          <span className="truncate group-hover:text-gray-300 transition-colors" title={comp.host}>{comp.host}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted">
                          <span className="mr-3 opacity-80 text-lg">
                            {comp.level.includes("Internasional") || comp.level.includes("International") ? "🌍" : 
                             comp.level.includes("Internal") ? "🏠" : "🇮🇩"}
                          </span> 
                          <span className="group-hover:text-gray-300 transition-colors shadow-none bg-transparent py-0 px-0">{comp.level}</span>
                        </div>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* College Projects Section */}
      <section className="space-y-16 pt-16">
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
          {collegeProjects.map((comp) => (
            <a 
              key={comp.id} 
              href={`https://github.com/Faiz7557/Collage-Project/tree/main/${comp.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex flex-col p-6 rounded-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_var(--star-glow)] hover:border-accent/40 w-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -mr-12 -mt-12 transition-opacity duration-500 opacity-0 group-hover:opacity-100 relative z-0"></div>

              {/* Image container with 4:5 aspect ratio (Compact Portrait) */}
              <div className="relative w-full aspect-[4/5] mb-6 rounded-xl overflow-hidden bg-foreground/5 border border-border-light group-hover:border-accent/40 transition-colors shrink-0 z-10 flex items-center justify-center">
                <FallbackImage 
                  repo={comp.repo} 
                  alt={comp.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-3xl drop-shadow-[0_0_8px_rgba(226,194,117,0.3)]">{comp.icon}</span>
                <span className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-foreground/5 text-gray-300 border border-border-light group-hover:border-accent/40 group-hover:text-accent transition-all shadow-[0_0_10px_rgba(226,194,117,0)] group-hover:shadow-[0_0_10px_rgba(226,194,117,0.2)]">
                  College
                </span>
              </div>
              
              <h4 className="text-lg font-bold text-foreground mt-auto pt-6 group-hover:text-accent transition-colors line-clamp-2 relative z-10 leading-snug">{comp.title}</h4>
            </a>
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
