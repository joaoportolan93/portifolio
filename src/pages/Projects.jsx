import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const ImageCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative group overflow-hidden rounded-lg w-full bg-zinc-900 border border-white/5 aspect-video flex items-center justify-center">
      {currentSlide.type === 'video' ? (
        <video
          src={currentSlide.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      ) : (
        <img
          src={currentSlide.src}
          alt={`Project slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      )}
      
      {slides.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {slides.map((_, idx) => (
              <span 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Projects({ t }) {
  if (!t || !t.projects || !t.projects.list) return null;

  return (
    <div className="flex flex-col animate-in fade-in duration-700 w-full pb-20 mt-4">
      <div className="mb-12">
        <h1 className="text-2xl font-bold font-sans text-zinc-100 mb-4">{t.projects.title1} {t.projects.title2}</h1>
        <p className="text-zinc-500 font-mono text-sm">{t.projects.desc}</p>
      </div>

      <div className="flex flex-col gap-16">
        {t.projects.list.map((project, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            
            {/* Header do Projeto */}
            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
              <span className="text-zinc-500 flex items-center justify-center">
                {project.icon}
              </span>
              <h2 className="text-xl font-bold text-zinc-100">{project.name}</h2>
            </div>
            
            {/* Descrição */}
            <p className="text-zinc-400 text-sm font-mono leading-relaxed">
              {project.desc}
            </p>

            {/* Carrossel de Imagens e Vídeos */}
            <ImageCarousel slides={project.slides} />

            {/* Stack & Link */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 border border-white/5 px-2 py-1 rounded">
                  {project.tech}
                </span>
              </div>
              
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors bg-[#18181A] border border-white/5 px-3 py-1.5 rounded-lg"
              >
                <Github className="w-4 h-4" /> Source code
              </a>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
