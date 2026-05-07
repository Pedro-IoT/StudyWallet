import { Button } from '@/components/Button/Button';

export const CTA = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24">
      <div className="bg-accent/5 absolute inset-0"></div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Pronto para organizar sua mente?
        </h2>
        <p className="mb-10 text-xl text-zinc-400">
          Pare de perder informações valiosas. Comece a construir seu patrimônio
          intelectual hoje mesmo.
        </p>
        <div className="flex justify-center">
          <Button
            to="/cadastro"
            className="bg-white px-10 py-5 text-lg font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 hover:bg-zinc-200"
          >
            Comece a Investir Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
