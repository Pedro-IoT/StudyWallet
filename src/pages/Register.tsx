import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Button } from '@/components/Button/Button';
import { Link } from '@tanstack/react-router';
import { LuMail, LuLock, LuUser } from 'react-icons/lu';

export const Register = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-appleBlue selection:text-white">
      <div className="glow-bg -top-50 -left-50"></div>
      <div
        className="glow-bg top-[40%] -right-75 opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)',
        }}
      ></div>

      <Header variant="simple" />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 pt-16">
        <div className="from-background/60 via-background/40 to-background absolute inset-0 z-0 bg-linear-to-b"></div>

        <div className="animate-fade-in-up glass relative z-10 w-full max-w-md rounded-3xl p-6 shadow-2xl md:p-10">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Crie sua conta
            </h1>
            <p className="mt-1 text-zinc-400">
              Comece a organizar seu conhecimento hoje
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-zinc-300"
              >
                Nome completo
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
                  <LuUser size={16} />
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  className="bg-card/50 border-cardBorder w-full rounded-xl border py-2.5 pr-4 pl-11 text-sm text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent/20 transition-all focus:ring-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-zinc-300"
              >
                E-mail
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
                  <LuMail size={16} />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-card/50 border-cardBorder w-full rounded-xl border py-2.5 pr-4 pl-11 text-sm text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent/20 transition-all focus:ring-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-xs font-medium text-zinc-300"
              >
                Senha
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
                  <LuLock size={16} />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Crie uma senha forte"
                  className="bg-card/50 border-cardBorder w-full rounded-xl border py-2.5 pr-4 pl-11 text-sm text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent/20 transition-all focus:ring-2 focus:outline-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-3.5 shadow-[0_0_20px_rgba(10,132,255,0.3)]"
            >
              Criar minha Carteira
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-zinc-500">Já tem uma conta? </span>
            <Link
              to="/login"
              className="text-accent font-medium hover:underline"
            >
              Faça login
            </Link>
          </div>
          
          <p className="mt-4 text-center text-[10px] text-zinc-500 leading-tight">
            Ao criar uma conta, você concorda com nossos <Link to="#" className="underline">Termos</Link> e <Link to="#" className="underline">Privacidade</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};
