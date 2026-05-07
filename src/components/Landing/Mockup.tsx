import { LuLibrary, LuMap, LuBookOpen, LuActivity } from 'react-icons/lu';

export const Mockup = () => {
  return (
    <div className="animate-fade-in-up relative mx-auto mt-24 max-w-4xl opacity-0 delay-300">
      <div className="glass overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        {/* Toolbar/Header Mock */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <div className="mx-auto h-4 w-32 rounded bg-white/5"></div>
        </div>

        <div className="flex min-h-100">
          {/* Sidebar Mock */}
          <div className="hidden w-1/4 border-r border-white/5 p-4 sm:block">
            <div className="mb-8 space-y-4">
              <div className="bg-accent/10 text-accent flex items-center gap-3 rounded-lg px-3 py-2">
                <LuLibrary size={18} />
                <span className="text-sm font-medium">Acervo</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-zinc-500">
                <LuMap size={18} />
                <span className="text-sm font-medium">O Mapa</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="h-2 w-12 rounded bg-zinc-800"></div>
              <div className="h-2 w-20 rounded bg-zinc-800/50"></div>
              <div className="h-2 w-16 rounded bg-zinc-800/50"></div>
            </div>
          </div>

          {/* Main Content Mock */}
          <div className="flex-1 bg-[#0f0f0f] p-6">
            <div className="mb-8 h-6 w-32 rounded bg-zinc-800"></div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Card 1 */}
              <div className="glass rounded-xl border border-zinc-800 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-orange-500/20">
                  <LuBookOpen className="text-orange-500" size={20} />
                </div>
                <div className="mb-2 h-4 w-full rounded bg-zinc-800"></div>
                <div className="h-3 w-2/3 rounded bg-zinc-800/50"></div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div className="bg-accent h-full w-[75%]"></div>
                  </div>
                  <span className="text-[10px] text-zinc-500">75%</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass rounded-xl border border-zinc-800 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-purple-500/20">
                  <LuActivity className="text-purple-500" size={20} />
                </div>
                <div className="mb-2 h-4 w-full rounded bg-zinc-800"></div>
                <div className="h-3 w-1/2 rounded bg-zinc-800/50"></div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div className="bg-accent h-full w-[33%]"></div>
                  </div>
                  <span className="text-[10px] text-zinc-500">33%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
