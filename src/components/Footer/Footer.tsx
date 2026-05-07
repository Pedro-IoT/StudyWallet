import { GiWallet } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-zinc-400">
          <GiWallet size={20} className="text-text-primary" />
          <span className="font-semibold text-white">Study Wallet</span>
        </div>

        <p className="text-sm text-zinc-500">
          © {currentYear} Study Wallet. Projetado com foco.
        </p>

        <div className="flex gap-4 text-zinc-500">
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
