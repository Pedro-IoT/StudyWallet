import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Register } from '../Register';

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

describe('Register Page', () => {
  it('should render register form', () => {
    render(<Register />);

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByText(/Crie sua conta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Criar minha Carteira/i })).toBeInTheDocument();
  });

  it('should have a link to login page', () => {
    render(<Register />);
    const loginLink = screen.getByText(/Faça login/i);
    expect(loginLink.closest('a')).toHaveAttribute('href', '/login');
  });
});
