import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Uses from './pages/Uses';
import { translations } from './locales';
import { Globe, Github, Linkedin, Twitter, Mail } from 'lucide-react';

function useClickEffect() {
  useEffect(() => {
    const clickSound = new Audio('/click.wav');

    const handleClick = (e) => {
      // Ignora os cliques do menu Navbar / Botoes pra não conflitar sons de navegação
      if (e.target.closest('nav') || e.target.closest('button')) {
        return;
      }

      clickSound.currentTime = 0;
      clickSound.play().catch(() => { });

      const numParticles = 6;
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;

        const angle = Math.random() * Math.PI * 2;
        const velocity = 20 + Math.random() * 30;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        document.body.appendChild(particle);

        particle.addEventListener('animationend', () => {
          particle.remove();
        });
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
}

function SubNavBar({ t }) {
  const location = useLocation();

  const links = [
    { name: t.nav.about, path: '/' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.contact, path: '/uses' }
  ];

  return (
    <nav className="flex items-center gap-6 mt-6 pb-4 border-b border-white/10 text-xl font-sans tracking-wide">
      {links.map(link => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`transFition-colors relative pb-1 ${isActive ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'}`}
          >
            {link.name}
            {isActive && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-full"></span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}

export default function App() {
  useClickEffect();
  const [lang, setLang] = useState('pt');
  const t = translations[lang] || translations['pt'];

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 flex justify-center pb-20">

      {/* Floating Lang Switcher - Minimalist */}
      <button
        onClick={toggleLang}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded text-zinc-500 hover:text-zinc-100 hover:border-white/30 transition-all font-mono text-xs uppercase"
      >
        <Globe className="w-3 h-3" />
        {lang}
      </button>

      {/* Main Container */}
      <div className="w-full max-w-[720px] flex flex-col min-h-screen relative pt-8 px-6 border-x border-white/5">

        {/* Header/Banner Section */}
        <div className="w-full h-[220px] rounded-lg overflow-hidden border border-white/10 relative">
          <img
            src="/fild.gif"
            alt="Home Banner"
            className="w-full h-full object-cover filter brightness-75 transition-all duration-700 hover:brightness-100"
          />
        </div>

        {/* Profile Info Overlaying Banner */}
        <div className="flex justify-between items-end -mt-14 px-4 relative z-10 w-full">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#09090b] bg-[#09090b]">
            <img
              src="https://avatars.githubusercontent.com/u/162385602?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="pb-1 text-right">
            <h1 className="text-zinc-100 tracking-wider -mr-2" style={{ fontFamily: '"Great Vibes", cursive', fontSize: '2.5rem', lineHeight: '1' }}>
              João Vitor Portolan
            </h1>
          </div>
        </div>

        {/* Dynamic Navigation */}
        <SubNavBar t={t} />

        {/* Content Area */}
        <main className="flex-1 mt-6">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/projects" element={<Projects t={t} />} />
            <Route path="/uses" element={<Uses t={t} />} />
          </Routes>
        </main>

        {/* Universal Footer */}
        <footer className="relative mt-8 pt-8 pb-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Peeking Mascot */}
          <div className="absolute -top-[19px] left-1/2 -translate-x-1/2 pointer-events-none">
            <img 
              src="/kilroy-removebg-preview.png" 
              alt="Peeking Mascot" 
              className="w-16 h-auto invert opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer" 
            />
          </div>

          {/* Social Icons (Left) */}
          <div className="flex gap-4">
            <a href="https://github.com/JoaoVitorPortolan" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://x.com/Joji26716" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-portolan-129a25206" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:joaovitorportolan@gmail.com" className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Terminal & Music (Right/Center) */}
          <div className="flex flex-col items-center md:items-end text-right font-mono text-[11px] md:text-xs">
            
            {/* Corgi Mascot */}
            <div className="mt-4 flex justify-start md:justify-end">
              <img 
                src="/Corgi Cute Dog GIF - Corgi Cute Dog Walking - Discover & Share GIFs.gif" 
                alt="Walking Corgi" 
                className="h-14 object-contain opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
              />
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
