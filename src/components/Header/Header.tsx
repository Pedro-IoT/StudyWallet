import { Link } from '@tanstack/react-router';
import { GiSpellBook } from 'react-icons/gi';

export const Header = () => {
  return (
    <header
      role="banner"
      className="bg-[rgba(20,20,20, 0.7)] fixed top-0 left-0 z-50 flex w-full items-center justify-between backdrop-blur-md"
    >
      <div>
        <GiSpellBook color="#0a84ff" />
        <h1>Study Wallet</h1>
      </div>
      <div role="navigation">
        <a href="/recursos" aria-label="Recursos">
          Recursos
        </a>
        <a href="/metodo" aria-label="Método">
          Método
        </a>
        <a href="/publico" aria-label="Público">
          Público
        </a>
      </div>
      <div role="links">
        <Link to="/login" aria-label="Login">
          Login
        </Link>
        <Link to="/cadastro" aria-label="Cadastre-se">
          Cadastre-se
        </Link>
      </div>
    </header>
  );
};
