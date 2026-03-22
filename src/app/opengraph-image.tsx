import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Faiz Iqbal Itishom - Navigation the Data Universe';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#07090e',
          backgroundImage: 'radial-gradient(circle at 80% -20%, #1a2235 0%, #07090e 70%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
          padding: '70px',
        }}
      >
        {/* Deep Glowing Orbs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(226,194,117,0.08) 0%, transparent 60%)' }}></div>
        <div style={{ position: 'absolute', bottom: '-30%', right: '-10%', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)' }}></div>

        {/* SVG Dot Grid Pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.15, display: 'flex' }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#e2c275" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Diagonal Light Ray */}
        <div style={{ position: 'absolute', bottom: '-40%', left: '-20%', width: '1500px', height: '300px', background: 'radial-gradient(ellipse, rgba(226,194,117,0.12) 0%, transparent 70%)', transform: 'rotate(-20deg)' }}></div>

        {/* Premium Top Line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #07090e, #e2c275, #07090e)' }}></div>

        {/* Layout Container */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', zIndex: 10 }}>
          
          {/* Top Row: Badge & Logo */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
            {/* Navigating the Data Universe Badge */}
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(226,194,117,0.25)', padding: '12px 28px', borderRadius: '100px', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#e2c275', marginRight: '16px', boxShadow: '0 0 10px #e2c275' }}></div>
              <span style={{ color: '#d1d5db', fontSize: '20px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>Get to Know Me</span>
            </div>

            {/* Logo/Icon */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'linear-gradient(135deg, #2a2d3c, #11131a)', border: '2px solid rgba(226,194,117,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <span style={{ color: '#e2c275', fontSize: '36px', fontWeight: '900', letterSpacing: '-2px' }}>FI</span>
              </div>
            </div>
          </div>

          {/* Center: Main Title */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ display: 'flex', flexWrap: 'wrap', fontSize: '100px', fontWeight: '900', color: '#ffffff', letterSpacing: '-3px', margin: '0 0 16px 0', lineHeight: 1.1 }}>
              Faiz Iqbal <span style={{ color: '#e2c275', marginLeft: '24px' }}>Itishom</span>
            </h1>
            <h2 style={{ fontSize: '38px', fontWeight: '600', color: '#ffffff', margin: '0 0 24px 0', letterSpacing: '0px' }}>
              Data Science student who loves  <span style={{ color: '#e2c275' }}> social science.</span>
            </h2>
            <p style={{ fontSize: '26px', color: '#9ca3af', margin: 0, maxWidth: '900px', lineHeight: 1.5, fontWeight: '500' }}>
              Driven by data, fueled by innovation, solving problems through actionable insights and transformative solutions.
            </p>
          </div>

          {/* Bottom Row: Links / Details */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%' }}>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(226,194,117,0.08)', border: '1px solid rgba(226,194,117,0.4)', padding: '12px 24px', borderRadius: '12px', color: '#e2c275', fontSize: '22px', fontWeight: '600', boxShadow: '0 0 20px rgba(226,194,117,0.05)' }}>
                Portfolio Website
              </div>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '12px', color: '#ffffff', fontSize: '22px', fontWeight: '600' }}>
                github.com/Faiz7557
              </div>
            </div>
          </div>

        </div>
      </div>
    ),
    { ...size }
  );
}
