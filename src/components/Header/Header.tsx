import { Button } from '@/components/Button/Button';
import { GiWallet } from 'react-icons/gi';

export const Header = ({ variant = 'full' }: { variant?: 'full' | 'simple' }) => {
  return (
    <header
      role="banner"
      className="bg-header fixed top-0 z-50 w-full border-b-0 border-white/10 backdrop-blur-md transition-all duration-300"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <div className="flex cursor-pointer items-center gap-2">
          <Button
            to="/"
            variant="navSecondary"
            className="flex items-center gap-2 !p-0 hover:bg-transparent"
          >
            <GiWallet color="#ffffff" size={25} />
            <h1 className="text-text-primary text-lg font-bold tracking-tight">
              Study Wallet
            </h1>
          </Button>
        </div>
        {variant === 'full' && (
          <>
            <div
              role="navigation"
              className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex"
            >
              <a
                href="#recursos"
                className="hover:text-text-primary transition-colors"
              >
                Recursos
              </a>
              <a
                href="#metodo"
                className="hover:text-text-primary transition-colors"
              >
                Método
              </a>
              <a
                href="#publico"
                className="hover:text-text-primary transition-colors"
              >
                Público
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Button to="/login" aria-label="Login" variant="navSecondary">
                Login
              </Button>
              <Button to="/cadastro" aria-label="Cadastre-se" variant="navPrimary">
                Cadastre-se
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};
