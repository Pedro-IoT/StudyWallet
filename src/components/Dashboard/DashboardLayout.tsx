import * as React from 'react';
import { Link } from '@tanstack/react-router';
import { LuBookMarked, LuNotebook, LuSettings, LuLogOut, LuSearch, LuPlus } from 'react-icons/lu';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, to, active }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
        ${active 
          ? 'bg-white/10 text-white font-medium border border-white/5' 
          : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
        }`}
    >
      <span className={`${active ? 'text-accent' : 'text-zinc-500 group-hover:text-zinc-300'} transition-colors`}>
        {icon}
      </span>
      {label}
    </Link>
  );
};

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-text-primary flex overflow-hidden">
      {/* Background Effects */}
      <div className="glow-bg -top-40 -left-40 opacity-40"></div>
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-card-border bg-background/50 backdrop-blur-xl flex flex-col justify-between hidden md:flex relative z-10">
        <div>
          {/* Brand */}
          <div className="h-20 flex items-center px-8 border-b border-card-border/50">
            <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center shadow-[0_0_15px_rgba(10,132,255,0.4)]">
                <LuBookMarked className="text-white w-3 h-3" />
              </div>
              StudyWallet
            </Link>
          </div>

          {/* Search/Quick Action */}
          <div className="p-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LuSearch className="text-zinc-500 group-focus-within:text-accent transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Buscar acervo..." 
                className="w-full bg-card-background border border-card-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
              />
            </div>
            <button className="mt-4 w-full bg-white/5 hover:bg-white/10 border border-white/5 text-zinc-300 rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-all hover:border-white/10">
              <LuPlus className="w-4 h-4 text-accent" />
              Novo Material
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-4 py-2 flex flex-col gap-1">
            <div className="px-4 text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2 mt-4">Menu</div>
            <SidebarItem icon={<LuBookMarked size={18} />} label="O Acervo" to="/dashboard" active />
            <SidebarItem icon={<LuNotebook size={18} />} label="Meus Cadernos" to="#" />
          </nav>
        </div>

        {/* User Area */}
        <div className="p-4 border-t border-card-border/50">
          <nav className="flex flex-col gap-1 mb-4">
            <SidebarItem icon={<LuSettings size={18} />} label="Configurações" to="#" />
          </nav>
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-card-border bg-card-background/50">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-blue-400 flex items-center justify-center text-sm font-bold text-white shadow-inner">
              PL
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">Pedro Lucas</p>
              <p className="text-xs text-zinc-500 truncate">Pro Plan</p>
            </div>
            <button className="text-zinc-500 hover:text-red-400 transition-colors">
              <LuLogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative z-0 overflow-y-auto overflow-x-hidden">
        {/* Subtle top gradient */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-card-background/50 to-transparent pointer-events-none z-0"></div>
        <div className="relative z-10 p-6 md:p-10 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
