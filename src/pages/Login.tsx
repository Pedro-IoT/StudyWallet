import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Button } from '@/components/Button/Button';
import { Link } from '@tanstack/react-router';
import { LuMail, LuLock } from 'react-icons/lu';

export const Login = () => {
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

        <div className="animate-fade-in-up glass relative z-10 w-full max-w-md rounded-3xl p-8 shadow-2xl md:p-12">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Bem-vindo de volta
            </h1>
            <p className="mt-2 text-zinc-400">
              Acesse sua carteira de conhecimento
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-300"
              >
                E-mail
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
                  <LuMail size={18} />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-card/50 border-cardBorder w-full rounded-xl border py-3 pr-4 pl-11 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent/20 transition-all focus:ring-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-zinc-300"
                >
                  Senha
                </label>
                <Link
                  to="#"
                  className="text-accent text-xs hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
                  <LuLock size={18} />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-card/50 border-cardBorder w-full rounded-xl border py-3 pr-4 pl-11 text-white placeholder:text-zinc-600 focus:border-accent focus:ring-accent/20 transition-all focus:ring-2 focus:outline-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-4 shadow-[0_0_20px_rgba(10,132,255,0.3)]"
            >
              Entrar na minha Carteira
            </Button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-zinc-500">Não tem uma conta? </span>
            <Link
              to="/cadastro"
              className="text-accent font-medium hover:underline"
            >
              Cadastre-se grátis
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
