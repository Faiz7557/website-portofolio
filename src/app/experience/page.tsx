"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Data Analyst Intern",
      org: "PERUM LPPNPI (AirNav Indonesia)",
      period: "Feb 2026 - Mar 2026",
      logo: "airnav-logo.png",
      points: [
        "Analyzed large-scale air navigation and flight traffic datasets using Excel, SQL, and Python to identify operational bottlenecks and enhance route efficiency.",
        "Developed automated data reporting and interactive dashboards in Laravel Framework to monitor real-time safety metrics and operational performance for management decision-making.",
        "Collaborated with cross-functional teams to streamline data reporting processes, reducing manual processing time by an hour process to a minute through the implementation of automated scripts."
      ]
    },
    {
      role: "Inspectorate General",
      org: "Student Executive Board FTMM Airlangga University",
      period: "Jan 2025 - Present",
      logo: "bem-peta-logo.png",
      points: [
        "Conduct supervision, guidance, and evaluation of ministries: Kekraf, PBSO, and PSDM",
        "Assist ministries in executing and achieving their work program goals",
        "Responsible for the talent tracker and selecting Staff & Ministry of the Month"
      ]
    },
    {
      role: "Researcher 2023",
      org: "Innovative Research on Intelligence System (IRIS)",
      period: "Feb 2025 - Present",
      logo: "iris-logo.png",
      points: [
        "1st Winner of Kaggle Clash 3 and Complete IRIS short-term research projects",
        "Competed in 13 Data Science competitions, and won 4 of them",
        "Represented IRIS as a podcast speaker at the JAIS BEM FTMM event"
      ]
    },
    {
      role: "Coordinator",
      org: "BSI Scholarship Awardee Association of Universitas Airlangga",
      period: "Oct 2024 - Present",
      logo: "unair-logo.png",
      points: [
        "Coordinated awardee activities of the BSI Scholarship UNAIR",
        "Led the Workshop & Sharing Session of BSI Scholarship 2025",
        "Acted as mediator between awardees, mentors, and BSI representatives"
      ]
    },
    {
      role: "Staff Ministry of Student Advocacy and Welfare",
      org: "Student Executive Board FTMM Universitas Airlangga",
      period: "Feb 2024 - Jan 2025",
      logo: "bem-aksara-logo.png",
      points: [
        "Collected and conveyed student aspirations to the university",
        "Served as Chief of Committee (CoC) for Monthly Discussions (DILAN)",
        "Participated in 13 programs: 2 as KOC, 5 as coordinator, 6 as staff"
      ]
    }
  ];

  const hardSkills = [
    { name: "Python", icon: "🐍" },
    { name: "Next.js", icon: "⚙️" },
    { name: "R", icon: "📊" },
    { name: "Laravel", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "Tableau", icon: "📈" },
    { name: "Figma", icon: "🎨" },
    { name: "Canva", icon: "🖌️" },
    { name: "Excel & Office", icon: "📗" }
  ];

  const softSkills = [
    { name: "Public speaking", icon: "🎤" },
    { name: "Leadership", icon: "👑" },
    { name: "Effective communication", icon: "💬" },
    { name: "Critical thinking", icon: "🧠" },
    { name: "Teamwork", icon: "🤝" }
  ];

  return (
    <div className="flex flex-col space-y-24 animate-in fade-in duration-1000 mt-12 relative z-10 pb-20">
      
      {/* Experience Section (Constellation Timeline) */}
      <section>
        <div className="text-center mb-16 space-y-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-accent/10 rounded-[100%] blur-[60px] -z-10"></div>
          <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">
            Constellation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-foreground to-accent">Experience</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto font-light">Navigating through organizational orbits, developing leadership, and connecting the dots of teamwork.</p>
        </div>

        {/* Vertical Constellation Connector */}
        <div className="relative max-w-5xl mx-auto px-4 md:px-8">
          {/* Main vertical line */}
          <div className="absolute top-8 bottom-8 left-[24px] md:left-1/2 w-0.5 bg-gradient-to-b from-transparent via-accent/30 to-transparent md:-translate-x-1/2 z-0"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-stretch group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal stagger-${(idx % 5) + 1}`}>
                
                {/* Star Node pointing to the timeline */}
                <div className="timeline-node absolute left-[19px] md:left-1/2 w-3 h-3 bg-node border-2 border-accent rounded-full shadow-[0_0_12px_var(--color-accent)] md:-translate-x-1/2 mt-10 md:mt-12 z-10 group-hover:bg-accent"></div>
                
                {/* Connector Line (Horizontal) - Only visible on MD */}
                <div className={`hidden md:block absolute top-[52px] w-[calc(50%-24px)] h-px bg-gradient-to-r from-accent/20 to-accent/5 z-0 ${idx % 2 === 0 ? 'right-1/2 bg-gradient-to-l' : 'left-1/2'}`}></div>

                {/* Card */}
                <div className={`w-[calc(100%-44px)] ml-[44px] md:w-5/12 md:ml-0 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} relative z-10`}>
                  <div className="glass-card p-6 md:p-8 hover:border-accent/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_15px_40px_var(--star-glow)] relative overflow-hidden group/card bg-card/80 backdrop-blur-xl border border-border-light h-full">
                    
                    <div className="absolute top-0 right-0 w-48 h-48 bg-foreground/5 rounded-full blur-3xl -mr-24 -mt-24 group-hover/card:bg-accent/10 transition-all duration-700"></div>
                    
                    {/* Header: Logo and Title */}
                    <div className="flex flex-col items-start gap-4 mb-5 md:mb-6 border-b border-border-light pb-5 md:pb-6 relative z-20">
                      
                      <div className="flex items-start md:items-center gap-4 w-full">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl overflow-hidden bg-node border border-border-light shrink-0 flex items-center justify-center p-2 group-hover/card:border-accent/50 transition-all duration-500 shadow-inner group-hover/card:shadow-[0_0_15px_rgba(226,194,117,0.2)]">
                          <img 
                            src={`/experience/${exp.logo}`} 
                            alt={`${exp.org} Logo`} 
                            className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover/card:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = `data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23050B14'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%236b7280'%3EUnggah%3C/text%3E%3C/svg%3E`;
                            }}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-gradient-to-r group-hover/card:from-foreground group-hover/card:to-accent transition-all duration-500 leading-snug">{exp.role}</h3>
                          <p className="text-muted text-xs sm:text-sm mt-1 font-medium">{exp.org}</p>
                        </div>
                      </div>

                      {/* Display Date safely below info on Mobile */}
                      <span className="md:hidden mt-2 inline-flex items-center text-[10px] sm:text-xs font-mono py-1 px-2.5 rounded-full text-accent bg-accent/5 border border-accent/20 shadow-[0_0_15px_rgba(226,194,117,0.1)] group-hover/card:bg-accent/10 transition-colors w-max">
                         <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse"></span>
                         {exp.period}
                      </span>
                    </div>
                    
                    {/* Points list strictly following Suisei aesthetics */}
                    <ul className="space-y-3 md:space-y-4 text-xs sm:text-sm text-foreground/80 relative z-10 w-full">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start group/item relative">
                          <div className="absolute left-[3px] top-4 bottom-[-12px] md:bottom-[-16px] w-[1px] bg-gradient-to-b from-accent/30 to-transparent group-hover/item:from-accent/60 transition-colors last:hidden"></div>
                          <span className="text-accent mr-3 mt-[1px] md:mt-[2px] font-bold text-xs sm:text-sm drop-shadow-[0_0_5px_rgba(226,194,117,0.5)] group-hover/item:text-foreground group-hover/item:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 relative z-10 bg-transparent md:bg-card">✦</span>
                          <span className="leading-normal md:leading-relaxed group-hover/item:text-foreground transition-colors">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Opposite Side Date Label - Only visible on MD */}
                <div className={`hidden md:flex flex-1 w-5/12 ${idx % 2 === 0 ? 'justify-start md:pl-4' : 'justify-end md:pr-4'}`}>
                  {/* We align the date pill exactly with the horizontal string, matching the mt-12 of the star + 6px to center. We can use margin-top or flex alignment. */}
                  <div className="mt-[34px]">
                     <div className="inline-flex items-center h-10 px-5 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm shadow-[0_0_20px_rgba(226,194,117,0.1)] group-hover:-translate-y-1 group-hover:bg-accent/10 transition-all duration-500 hover:border-accent">
                        <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse shadow-[0_0_8px_rgba(226,194,117,1)]"></span>
                        <span className="font-mono text-sm text-accent tracking-wide">{exp.period}</span>
                     </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Data Nodes Section */}
      <section className="pt-20">
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Skills & <span className="text-accent glow-text">Superpowers</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg font-light">
            The technical and interpersonal instruments powering my data-driven explorations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          
          <div className="flex-1 glass-card p-10 relative overflow-hidden group hover:border-accent/40 transition-colors duration-500">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors"></div>
            <h3 className="text-2xl font-bold text-foreground mb-10 flex items-center border-b border-border-light pb-4">
              <span className="mr-4 text-accent text-3xl drop-shadow-[0_0_8px_rgba(226,194,117,0.8)]">✦</span> Technical Instruments
            </h3>
            <div className="flex flex-wrap gap-5 relative z-10">
              {hardSkills.map((skill) => (
                <div key={skill.name} className="skill-tag flex items-center px-6 py-3.5 rounded-2xl bg-node border border-border-light text-foreground/90 text-base md:text-lg font-medium cursor-default">
                  <span className="text-2xl mr-3 drop-shadow-md">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 glass-card p-10 relative overflow-hidden group hover:border-accent/40 transition-colors duration-500">
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-foreground/5 rounded-full blur-3xl group-hover:bg-accent/5 transition-colors"></div>
            <h3 className="text-2xl font-bold text-foreground mb-10 flex items-center border-b border-border-light pb-4">
              <span className="mr-4 text-foreground/50 text-3xl">✧</span> Interpersonal Traits
            </h3>
            <div className="flex flex-wrap gap-5 relative z-10">
              {softSkills.map((skill) => (
                <div key={skill.name} className="skill-tag flex items-center px-6 py-3.5 rounded-2xl bg-node border border-border-light text-foreground/90 text-base md:text-lg font-medium cursor-default">
                  <span className="text-2xl mr-3 drop-shadow-md">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
