import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 py-3">
      <button 
        onClick={onClick}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-zinc-300 font-medium text-sm group-hover:text-cyan-400 transition-colors pr-4">{question}</span>
        <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-500 text-sm leading-relaxed pt-3 pb-2">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Uses({ t }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col animate-in fade-in duration-700 w-full pb-20">
      
      {/* Contact Links */}
      <div className="mb-14">
        <h2 className="text-zinc-100 font-bold mb-2">{t.contact.title}</h2>
        <p className="text-zinc-400 text-sm font-mono mb-6">{t.contact.desc}</p>
        
        <div className="flex flex-wrap gap-3">
          <a href="mailto:joaovitorportolan@gmail.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition-colors bg-[#18181A] border border-white/5 p-3 rounded-lg shadow-sm hover:shadow-cyan-900/10">
            <Mail className="w-4 h-4" /> {t.contact.email}
          </a>
          <a href="https://github.com/JoaoVitorPortolan" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition-colors bg-[#18181A] border border-white/5 p-3 rounded-lg shadow-sm hover:shadow-cyan-900/10">
            <Github className="w-4 h-4" /> {t.contact.github}
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-portolan-129a25206" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition-colors bg-[#18181A] border border-white/5 p-3 rounded-lg shadow-sm hover:shadow-cyan-900/10">
            <Linkedin className="w-4 h-4" /> {t.contact.linkedin}
          </a>
          <a href="https://x.com/Joji26716" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-cyan-400 transition-colors bg-[#18181A] border border-white/5 p-3 rounded-lg shadow-sm hover:shadow-cyan-900/10">
            <Twitter className="w-4 h-4" /> {t.contact.twitter}
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-zinc-100 font-bold mb-4 flex items-center gap-2">
          {t.faq.title}
        </h2>
        <div className="flex flex-col border-t border-white/5">
          {t.faq.list.map((item, idx) => (
            <AccordionItem 
              key={idx}
              question={item.q}
              answer={item.a}
              isOpen={openFaqIndex === idx}
              onClick={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
