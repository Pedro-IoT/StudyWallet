import * as React from 'react';

export type StatusType = 'Para Começar' | 'Em Andamento' | 'Concluído';
export type MediaType = 'Livro' | 'Curso' | 'Vídeo' | 'Artigo' | 'Doc';

export interface AcervoItem {
  id: string;
  title: string;
  author: string;
  type: MediaType;
  status: StatusType;
  progress?: number; // 0 to 100
  imageUrl?: string;
}

interface AcervoCardProps {
  item: AcervoItem;
}

const typeColors: Record<MediaType, string> = {
  'Livro': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'Curso': 'text-accent bg-accent/10 border-accent/20',
  'Vídeo': 'text-rose-400 bg-rose-400/10 border-rose-400/20',
  'Artigo': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'Doc': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
};

export const AcervoCard = ({ item }: AcervoCardProps) => {
  return (
    <div className="group relative flex flex-col glass rounded-xl border border-card-border overflow-hidden transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1">
      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Cover Area */}
      <div className="relative h-40 w-full bg-card-background overflow-hidden">
        {item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 border-b border-card-border">
            <span className="text-zinc-600 font-mono text-4xl opacity-50">{item.title.charAt(0)}</span>
          </div>
        )}
        
        {/* Type Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border backdrop-blur-md ${typeColors[item.type]}`}>
            {item.type}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-white leading-tight mb-1 line-clamp-2 group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-400 font-medium mb-4">{item.author}</p>
        </div>
        
        {/* Progress Bar (if in progress) */}
        {item.status === 'Em Andamento' && item.progress !== undefined && (
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-medium text-zinc-500">Progresso</span>
              <span className="text-xs font-bold text-zinc-300">{item.progress}%</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-accent to-blue-400 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
