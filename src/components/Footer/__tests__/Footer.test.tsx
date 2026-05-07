import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer Component', () => {
  it('should render copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Study Wallet`, 'i'))).toBeInTheDocument();
  });

  it('should have social media links with proper accessibility', () => {
    render(<Footer />);
    
    expect(screen.getByLabelText(/Facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
  });

  it('should display the logo/brand name', () => {
    render(<Footer />);
    expect(screen.getByText('Study Wallet')).toBeInTheDocument();
  });
});
