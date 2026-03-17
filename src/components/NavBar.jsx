import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  const links = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Uses', path: '/uses' }
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-4 md:px-8 border-b border-white/5 bg-transparent text-sm font-mono">
      <Link to="/" className="text-zinc-100 font-bold hover:text-cyan-400 transition-colors">JoãoPortolan</Link>
      <div className="flex gap-4 md:gap-6 text-zinc-500">
        {links.map(link => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`transition-colors lowercase ${location.pathname === link.path ? 'text-zinc-100 font-bold' : 'hover:text-cyan-400'}`}
          >
            [{link.name}]
          </Link>
        ))}
      </div>
    </nav>
  )
}
