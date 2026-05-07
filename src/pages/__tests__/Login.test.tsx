import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Login } from '../Login';

// Mock components
vi.mock('@/components/Header/Header', () => ({
  Header: () => <header data-testid="mock-header" />,
}));

vi.mock('@/components/Footer/Footer', () => ({
  Footer: () => <footer data-testid="mock-footer" />,
}));

vi.mock('@/components/Button/Button', () => ({
  Button: ({ children, type }: { children: React.ReactNode; type?: string }) => (
    <button data-testid="mock-button" type={type as any}>
      {children}
    </button>
  ),
}));

vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('Login Page', () => {
  it('should render login form', () => {
    render(<Login />);

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByText(/Bem-vindo de volta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Entrar na minha Carteira/i })).toBeInTheDocument();
  });

  it('should have a link to register page', () => {
    render(<Login />);
    const registerLink = screen.getByText(/Cadastre-se grátis/i);
    expect(registerLink.closest('a')).toHaveAttribute('href', '/cadastro');
  });
});
