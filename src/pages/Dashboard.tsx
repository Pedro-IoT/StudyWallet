import { DashboardLayout } from '@/components/Dashboard/DashboardLayout';
import { AcervoCard, AcervoItem } from '@/components/Dashboard/AcervoCard';

const mockAcervo: AcervoItem[] = [
  { id: '1', title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', type: 'Livro', status: 'Em Andamento', progress: 45 },
  { id: '2', title: 'The Joy of React', author: 'Josh W. Comeau', type: 'Curso', status: 'Em Andamento', progress: 82, imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop' },
  { id: '3', title: 'Understanding CSS Grid', author: 'Rachel Andrew', type: 'Artigo', status: 'Para Começar' },
  { id: '4', title: 'Supabase Crash Course', author: 'Fireship', type: 'Vídeo', status: 'Concluído', progress: 100 },
  { id: '5', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', type: 'Livro', status: 'Para Começar' },
  { id: '6', title: 'React Query Documentation', author: 'Tanner Linsley', type: 'Doc', status: 'Em Andamento', progress: 20 },
];

export const Dashboard = () => {
  const inProgress = mockAcervo.filter(item => item.status === 'Em Andamento');
  const todo = mockAcervo.filter(item => item.status === 'Para Começar');
  const done = mockAcervo.filter(item => item.status === 'Concluído');

  return (
    <DashboardLayout>
      <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-2">
            O Acervo
          </h1>
          <p className="text-zinc-400 text-lg font-medium max-w-2xl">
            Sua coleção central de conhecimento. Organize e acesse seus materiais de estudo.
          </p>
        </div>
        <div className="flex gap-2">
          {/* Filter/Sort mocks */}
          <button className="px-4 py-2 rounded-lg bg-card-background border border-card-border text-sm font-medium text-zinc-300 hover:bg-white/5 transition-colors">
            Filtrar
          </button>
          <button className="px-4 py-2 rounded-lg bg-card-background border border-card-border text-sm font-medium text-zinc-300 hover:bg-white/5 transition-colors">
            Ordenar
          </button>
        </div>
      </header>

      <div className="space-y-12">
        {/* Em Andamento Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <h2 className="text-xl font-bold text-white tracking-tight">Em Andamento</h2>
            <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 text-xs font-bold border border-white/10">{inProgress.length}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {inProgress.map(item => (
              <AcervoCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Para Começar Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
            <h2 className="text-xl font-bold text-zinc-300 tracking-tight">Para Começar</h2>
            <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 text-xs font-bold border border-white/10">{todo.length}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-80 hover:opacity-100 transition-opacity">
            {todo.map(item => (
              <AcervoCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Concluído Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <h2 className="text-xl font-bold text-zinc-400 tracking-tight">Concluído</h2>
            <span className="px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 text-xs font-bold border border-white/10">{done.length}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            {done.map(item => (
              <AcervoCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};
