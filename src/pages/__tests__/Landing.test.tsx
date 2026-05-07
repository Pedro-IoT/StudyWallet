import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Landing } from '../Landing';

// Mock components that might have complex logic or external dependencies
vi.mock('@/components/Header/Header', () => ({
  Header: () => <header data-testid="mock-header" />,
}));

vi.mock('@/components/Footer/Footer', () => ({
  Footer: () => <footer data-testid="mock-footer" />,
}));

// Mock Button to avoid TanStack Router dependency issues in simple unit tests
vi.mock('@/components/Button/Button', () => ({
  Button: ({ children, to }: { children: React.ReactNode; to?: string }) => (
    <button data-testid="mock-button" data-to={to}>
      {children}
    </button>
  ),
}));

describe('Landing Page', () => {
  it('should render all main sections', () => {
    render(<Landing />);

    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(
      screen.getByText(/Seu maior ativo é o seu conhecimento/i)
    ).toBeInTheDocument();
  });

  it('should have functional CTA buttons in the hero', () => {
    render(<Landing />);

    const ctaButton = screen
      .getByText(/Criar minha Carteira Grátis/i)
      .closest('button');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('data-to', '/cadastro');
  });
});
