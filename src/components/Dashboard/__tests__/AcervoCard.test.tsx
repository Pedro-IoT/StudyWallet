import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AcervoCard, AcervoItem } from '../AcervoCard';

describe('AcervoCard Component', () => {
  const mockItem: AcervoItem = {
    id: '1',
    title: 'Test Book Title',
    author: 'John Doe',
    type: 'Livro',
    status: 'Para Começar',
  };

  it('renders correctly with basic info', () => {
    render(<AcervoCard item={mockItem} />);
    
    expect(screen.getByText('Test Book Title')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Livro')).toBeInTheDocument();
  });

  it('renders progress bar when status is "Em Andamento" and progress is provided', () => {
    const itemInProgress: AcervoItem = {
      ...mockItem,
      status: 'Em Andamento',
      progress: 45,
    };
    render(<AcervoCard item={itemInProgress} />);
    
    expect(screen.getByText('Progresso')).toBeInTheDocument();
    expect(screen.getByText('45%')).toBeInTheDocument();
  });

  it('does not render progress bar when status is not "Em Andamento"', () => {
    const itemConcluido: AcervoItem = {
      ...mockItem,
      status: 'Concluído',
      progress: 100, // Should not render progress even if provided
    };
    render(<AcervoCard item={itemConcluido} />);
    
    expect(screen.queryByText('Progresso')).not.toBeInTheDocument();
  });

  it('renders image when imageUrl is provided', () => {
    const itemWithImage: AcervoItem = {
      ...mockItem,
      imageUrl: 'https://example.com/image.jpg',
    };
    render(<AcervoCard item={itemWithImage} />);
    
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(img).toHaveAttribute('alt', 'Test Book Title');
  });

  it('renders initial letter when imageUrl is not provided', () => {
    render(<AcervoCard item={mockItem} />);
    
    expect(screen.getByText('T')).toBeInTheDocument(); // First letter of "Test Book Title"
  });
});
