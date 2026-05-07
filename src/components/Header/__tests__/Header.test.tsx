import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { AnchorHTMLAttributes } from 'react';

vi.mock('@tanstack/react-router', () => ({
  Link: ({
    to,
    children,
    className,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  ),
}));

describe('Header component', () => {
  it('should render with the correct semantic role (banner)', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should display the application name "Study Wallet"', () => {
    render(<Header />);
    expect(screen.getByText(/study wallet/i)).toBeInTheDocument();
  });

  it('should contain a navigation landmark', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render the main navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /recursos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /método/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /público/i })).toBeInTheDocument();
  });

  it('should render the login and signup actions', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /cadastre-se/i })
    ).toBeInTheDocument();
  });
});
