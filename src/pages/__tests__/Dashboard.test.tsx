import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Dashboard } from '../Dashboard';

// Mock TanStack Router
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to, className }: any) => <a href={to} className={className}>{children}</a>,
}));

describe('Dashboard Page', () => {
  it('renders layout and headers correctly', () => {
    render(<Dashboard />);
    
    // Check Sidebar Brand
    expect(screen.getByText('StudyWallet')).toBeInTheDocument();
    
    // Check Page Header
    expect(screen.getByRole('heading', { name: 'O Acervo' })).toBeInTheDocument();
    
    // Check Sections
    expect(screen.getByText('Em Andamento')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Para Começar' })).toBeInTheDocument();
    expect(screen.getByText('Concluído')).toBeInTheDocument();
  });

  it('renders mock items correctly', () => {
    render(<Dashboard />);
    
    // Test a specific mock item's title exists
    expect(screen.getByText('Clean Code: A Handbook of Agile Software Craftsmanship')).toBeInTheDocument();
    expect(screen.getByText('Supabase Crash Course')).toBeInTheDocument();
  });
});
