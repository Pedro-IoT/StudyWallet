import {
  LuLibrary,
  LuBrain,
  LuMap,
  LuChevronRight,
  LuCheck,
} from 'react-icons/lu';

export const Features = () => {
  return (
    <section id="recursos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Projetado para o foco absoluto.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Chega de dezenas de abas abertas e anotações perdidas em cadernos
            diferentes. Centralize sua evolução.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Acervo */}
          <div className="glass group relative overflow-hidden rounded-3xl border border-zinc-800 p-8 transition-colors hover:border-zinc-700 md:col-span-1">
            <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
              <LuLibrary size={100} strokeWidth={1} />
            </div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
              <span className="text-accent text-lg font-bold">01</span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold">O Acervo</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Sua Biblioteca Central. Salve vídeos do YouTube, artigos, PDFs e
              cursos. Classifique o que você já consumiu e o que está na fila.
              Tudo visual, limpo e organizado.
            </p>
          </div>

          {/* Card 2: Cérebro (Destaque) */}
          <div className="glass relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl border border-zinc-800 p-8 transition-colors hover:border-zinc-700 sm:flex-row md:col-span-2">
            <div className="from-accent/5 absolute inset-0 z-0 bg-linear-to-br to-transparent"></div>
            <div className="relative z-10 flex-1">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <span className="text-accent text-lg font-bold">02</span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold">O Cérebro</h3>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                Crie cadernos inteligentes dentro de cada fonte. Anote por
                capítulos, salve timestamps exatos de aulas e conecte insights
                de diferentes matérias como um segundo cérebro.
              </p>
              <div className="text-accent inline-flex cursor-pointer items-center gap-2 text-sm font-medium transition-colors hover:text-white">
                Explorar Conexões <LuChevronRight size={16} />
              </div>
            </div>

            {/* Mini UI Element */}
            <div className="bg-card relative z-10 w-full rounded-xl border border-zinc-800 p-4 shadow-xl sm:w-64">
              <div className="mb-2 font-mono text-xs text-zinc-500">
                Aula_04.mp4 - 12:45
              </div>
              <div className="mb-3 h-2 w-full rounded-full bg-zinc-800">
                <div className="bg-accent h-full w-1/2 rounded-full"></div>
              </div>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span className="text-xs font-medium text-zinc-300">
                    Insight Chave
                  </span>
                </div>
                <div className="mb-1.5 h-2 w-full rounded bg-zinc-800"></div>
                <div className="h-2 w-4/5 rounded bg-zinc-800"></div>
              </div>
            </div>
          </div>

          {/* Card 3: O Mapa */}
          <div className="glass relative overflow-hidden rounded-3xl border border-zinc-800 p-8 text-center transition-colors hover:border-zinc-700 sm:p-12 md:col-span-3">
            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <span className="text-accent text-lg font-bold">03</span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">
                O Mapa de Objetivos
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-zinc-400">
                Trilhas de aprendizado visual. Quer passar no ENEM? Quer se
                tornar Desenvolvedor Sênior? Crie um objetivo macro, divida em
                pequenos checkpoints e veja sua barra de progresso encher.
              </p>
              {/* Visual representation of nodes/map */}
              <div className="flex items-center justify-center gap-4 text-zinc-600">
                <div className="bg-accent/10 border-accent text-accent flex h-12 w-12 items-center justify-center rounded-full border-2">
                  <LuCheck size={20} />
                </div>
                <div className="bg-accent/50 h-0.5 w-16"></div>
                <div className="glass flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-700 text-white">
                  2
                </div>
                <div className="h-0.5 w-16 border-b-2 border-dashed border-zinc-700"></div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-900">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
