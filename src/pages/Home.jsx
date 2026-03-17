import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 10, transformOrigin: 'bottom left' }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: 10, transition: { duration: 0.2 } }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="bg-[#18181A] border border-white/5 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5 w-max relative shadow-sm"
  >
    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
    
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-3 -left-1 text-[#18181A] -z-10">
      <path d="M0 0V24L24 0H0Z" fill="currentColor"/>
    </svg>
  </motion.div>
);

const ChatBubble = ({ text, isLastBubble }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom left' }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="bg-[#18181A] border border-white/10 rounded-[1.5rem] rounded-bl-sm p-4 md:p-5 text-zinc-300 text-[14px] md:text-[15px] font-sans leading-relaxed shadow-lg relative max-w-[95%] md:max-w-[480px]"
  >
    <p>{text}</p>
    {isLastBubble && (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-4 -left-1 text-[#18181A] -z-10">
        <path d="M0 0V24L24 0H0Z" fill="currentColor"/>
        <path d="M0 0V24L24 0" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      </svg>
    )}
  </motion.div>
);

export default function Home({ t }) {
  const hasAnimatedBefore = sessionStorage.getItem('chatAnimated') === 'true';

  // Parágrafos do sobre com a saudação inicial do UX Writing
  const paragraphs = [t.about.intro1, t.about.intro2, t.about.p1, t.about.p2, t.about.p3].filter(Boolean);

  const [messagesCount, setMessagesCount] = useState(hasAnimatedBefore ? paragraphs.length : 0);
  const [isTyping, setIsTyping] = useState(!hasAnimatedBefore);

  useEffect(() => {
    if (messagesCount < paragraphs.length) {
      setIsTyping(true);
      const delay = messagesCount === 0 ? 1200 : 2500;
      
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setMessagesCount(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(typingTimer);
    } else {
      setIsTyping(false);
      sessionStorage.setItem('chatAnimated', 'true');
    }
  }, [messagesCount, paragraphs.length]);

  return (
    <div className="flex flex-col animate-in fade-in duration-700 w-full mt-2 pb-12">
      <div className="flex flex-col items-start gap-4 w-full">
        {paragraphs.slice(0, messagesCount).map((p, i) => (
          <ChatBubble 
            key={i} 
            text={p} 
            isLastBubble={i === messagesCount - 1 && !isTyping && i === paragraphs.length - 1} 
          />
        ))}
        
        <AnimatePresence mode="wait">
          {isTyping && <TypingIndicator key="typing-indicator" />}
        </AnimatePresence>
      </div>

      {messagesCount >= paragraphs.length && !isTyping && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 w-full flex flex-col pt-8 border-t border-white/5"
        >
          {/* Main Stack */}
          <div className="mb-10">
            <h2 className="text-zinc-100 font-bold mb-2">{t.tools.title1} {t.tools.title2}</h2>
            <p className="text-zinc-400 text-sm font-mono">{t.tools.desc}</p>
          </div>

          <div className="flex flex-col gap-4 mb-20 w-full">
            {t.tools.list.map((tool, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-white/5 pb-3 group">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-500 group-hover:text-amber-400 transition-colors">
                    {tool.icon}
                  </span>
                  <span className="text-zinc-300 font-medium text-sm">{tool.text}</span>
                </div>
                <span className="text-zinc-500 text-xs font-mono">{tool.desc}</span>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-10 w-full">
            <h2 className="text-zinc-100 font-bold mb-2">{t.process.titleLine1} {t.process.titleLine2}</h2>
            <p className="text-zinc-400 text-sm font-mono">{t.process.desc}</p>
          </div>

          <div className="flex flex-col gap-4 mb-4 w-full">
            {t.process.steps.map((step, idx) => (
              <div key={`proc-${idx}`} className="flex items-start gap-4 border-b border-white/5 pb-4 group">
                <span className="text-zinc-600 font-mono text-xs mt-1">0{idx + 1}</span>
                <div>
                  <h3 className="text-zinc-300 font-medium text-sm mb-1">{step.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="flex flex-col items-center justify-center mt-6 w-full gap-4">
            <p className="text-zinc-400 text-sm font-mono text-center max-w-sm">
              {t.footer.ctaMessage}
            </p>
            <Link 
              to="/uses" 
              className="group flex items-center gap-2 px-6 py-3 bg-[#18181A] hover:bg-zinc-800 border border-white/5 hover:border-cyan-500/30 text-zinc-300 hover:text-cyan-400 transition-all duration-300 rounded-full font-medium text-sm shadow-sm hover:shadow-cyan-900/10"
            >
              {t.footer.btnPrimary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
