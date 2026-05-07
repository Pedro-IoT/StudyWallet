import { Header } from '@/components/Header/Header';
import { Button } from '@/components/Button/Button';
import { Footer } from '@/components/Footer/Footer';
import { Mockup } from '@/components/Landing/Mockup';
import { SocialProof } from '@/components/Landing/SocialProof';
import { Features } from '@/components/Landing/Features';
import { CTA } from '@/components/Landing/CTA';
import { LuPlay } from 'react-icons/lu';

export const Landing = () => {
  return (
    <>
      <div className="glow-bg -top-50 -left-50"></div>
      <div
        className="glow-bg top-[40%] -right-75 opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)',
        }}
      ></div>

      <Header />

      <main className="relative flex min-h-[95vh] flex-col justify-center overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-32">
        {/* Gradient Overlay */}
        <div className="from-background/60 via-background/40 to-background absolute inset-0 z-0 bg-linear-to-b"></div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="animate-fade-in-up mb-6 text-5xl font-bold tracking-tight opacity-0 delay-100 sm:text-6xl md:text-7xl">
            Seu maior ativo é o seu conhecimento.{' '}
            <br className="hidden lg:block" />
            <span className="text-gradient drop-shadow-lg">
              Trate-o como investimento.
            </span>
          </h1>

          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed font-light text-zinc-300 opacity-0 drop-shadow-md delay-200 sm:text-xl">
            Transforme o caos da informação em uma carteira de estudos
            organizada. A liberdade do Notion unida ao foco que sua evolução
            exige.
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 opacity-0 delay-300 sm:flex-row">
            <Button
              to="/cadastro"
              className="bg-accent w-full px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(10,132,255,0.3)] transition-all hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(10,132,255,0.5)] sm:w-auto"
            >
              Criar minha Carteira Grátis
            </Button>
            <Button
              to="#"
              variant="secondary"
              className="glass w-full gap-2 border border-zinc-700/50 px-8 py-4 font-semibold text-white sm:w-auto"
            >
              <LuPlay size={20} />
              Ver Demonstração
            </Button>
          </div>

          <p className="animate-fade-in-up mt-4 text-xs text-zinc-400 opacity-0 drop-shadow delay-300">
            Nenhum cartão de crédito necessário. Cancele quando quiser.
          </p>

          <Mockup />
        </div>
      </main>

      <SocialProof />
      <Features />
      <CTA />
      <Footer />
    </>
  );
};
