"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
      const img = new Image();
      img.src = `/${baseName}.${ext}`;
      img.onload = () => setProfilePhoto(`/${baseName}.${ext}`);
      img.onerror = () => tryLoad(rest);
    };

    tryLoad(["jpg", "jpeg", "png", "webp"]);
  }, [theme]);
  return (
    <div className="flex flex-col space-y-16 animate-in fade-in duration-1000 mt-12 relative z-10">
      
      {/* Bio Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 relative">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[120%] bg-accent/5 rounded-[100%] blur-[80px] -z-10 pointer-events-none"></div>

        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-bold tracking-widest uppercase mb-2 shadow-[0_0_10px_rgba(226,194,117,0.1)]">
            ✦ Identity Module
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground">Me</span>
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            I am Faiz Iqbal Itishom, an undergraduate student at Universitas Airlangga majoring in Data Science and Technology. 
            I navigate the cosmos of data, seeking opportunities to enhance my competencies through organizational involvement, competitions, and constructing digital projects.
          </p>
          <p className="text-muted leading-relaxed font-light">
            Over the past four semesters, I have orbited various organizations to develop strong managerial and leadership skills, while
            simultaneously sharpening my hard skills and gravitational pull towards competitive excellence.
          </p>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 group">
          {/* Avatar with Astrolabe borders */}
          <div className="absolute -inset-4 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-accent/50 transition-colors"></div>
          <div className="absolute -inset-8 border border-foreground/5 border-dashed rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          
          <div className="absolute inset-0 rounded-full border-2 border-accent/40 shadow-[0_0_30px_var(--star-glow)] overflow-hidden flex items-center justify-center z-10 transition-colors duration-500 bg-node">
            {profilePhoto ? (
              <img 
                src={profilePhoto}
                alt="Faiz Iqbal Itishom"
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <span className="text-7xl text-accent/80 drop-shadow-[0_0_15px_rgba(226,194,117,0.8)] mix-blend-screen">✦</span>
            )}
          </div>
          <div className="absolute -inset-1 rounded-full bg-accent opacity-20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity"></div>
        </div>
      </section>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
        
        {/* Education */}
        <section className="space-y-8 relative">
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent -z-10"></div>
          
          <h2 className="text-3xl font-bold text-foreground flex items-center mb-8">
            <span className="text-accent text-2xl mr-4 drop-shadow-[0_0_8px_rgba(226,194,117,0.8)]">✦</span>
            Education Orbit
          </h2>
          <div className="space-y-8 pl-6 md:pl-10 relative">
            
            <div className="relative glass-card p-6 border-l-2 border-l-accent hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-1/2 -left-[45px] w-3 h-3 bg-node border-2 border-accent rounded-full shadow-[0_0_10px_var(--color-accent)] -translate-y-1/2 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-bold text-foreground">Universitas Airlangga</h3>
              <p className="text-accent font-medium mt-1">Bachelor of Data Science Technology</p>
              <div className="flex justify-between items-center mt-3 text-sm text-muted font-mono">
                <span>Surabaya, Indonesia</span>
                <span className="bg-foreground/5 px-2 py-1 rounded border border-border-light">Aug 2023 - Aug 2027</span>
              </div>
              <ul className="mt-5 space-y-2 text-foreground/80 text-sm">
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">✧</span> GPA: 3.56/4.00</li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">✧</span> Awardee, BSI Prestasi Scholarship (2024)</li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">✧</span> 6 Medals on National Level Data Science Competition</li>
                <li className="flex items-start"><span className="text-accent mr-3 font-bold">✧</span> Active Member of Student Executive Board FTMM & IRIS</li>
              </ul>
            </div>
            
            <div className="relative glass-card p-6 border-l-2 border-l-foreground/20 hover:-translate-y-1 transition-all duration-300 hover:border-l-accent/50">
              <div className="absolute top-1/2 -left-[45px] w-3 h-3 bg-node border-2 border-border-light rounded-full -translate-y-1/2 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-bold text-foreground">SMKN 3 Surabaya</h3>
              <p className="text-foreground/80 font-medium mt-1">High School Diploma</p>
              <div className="flex justify-between items-center mt-3 text-sm text-muted font-mono">
                <span>Multimedia Major</span>
                <span className="bg-foreground/5 px-2 py-1 rounded border border-border-light">May 2020 - Jun 2023</span>
              </div>
              <p className="mt-5 text-muted text-sm flex items-center"><span className="text-accent mr-3 font-bold">✧</span> Score: 88.64/100.00</p>
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="space-y-8 relative">
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent -z-10"></div>

          <h2 className="text-3xl font-bold text-foreground flex items-center mb-8">
            <span className="text-accent text-2xl mr-4 drop-shadow-[0_0_8px_rgba(226,194,117,0.8)]">✦</span>
            Stellar Achievements
          </h2>
          <div className="space-y-8 pl-6 md:pl-10 relative">
            <div className="relative glass-card p-6 hover:-translate-y-1 transition-all duration-300">
               <div className="absolute top-6 -left-[45px] w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(226,194,117,1)] animate-pulse"></div>
               
              <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border-light pb-2">Certifications Array</h3>
              <ul className="space-y-4 text-foreground/80 text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">✧</span>
                  <div className="font-medium">TOEFL ITP (Prediction): 520</div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">✧</span>
                  <div className="font-medium">UKBI: 681 <span className="text-foreground/60 font-normal">(Sangat Unggul)</span></div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">✧</span>
                  <div className="font-medium">Basic Occupational Health & Safety (K3)</div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">✧</span>
                  <div className="font-medium">Certification Multimedia LSP Certification</div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">✧</span>
                  <div className="font-medium">Samsung Innovation Campus IoT Certification</div>
                </li>
              </ul>
            </div>
            
            <div className="relative glass-card p-6 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-6 -left-[45px] w-3 h-3 bg-foreground/60 rounded-full"></div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border-light pb-2">Constellation of Awards</h3>
              <ul className="space-y-4 text-foreground/80 text-sm">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-lg leading-none drop-shadow-[0_0_5px_rgba(226,194,117,0.8)]">★</span>
                  <div className="font-medium">1st Place Hi-Tech Data Visualization Competition</div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-lg leading-none drop-shadow-[0_0_5px_rgba(226,194,117,0.8)]">★</span>
                  <div className="font-medium">2nd Place Visual Quest, Airnology</div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-lg leading-none drop-shadow-[0_0_5px_rgba(226,194,117,0.8)]">★</span>
                  <div className="font-medium">2nd Place PsyAcc 2.0 Infographic Competition</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}
