import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';
import { AnchorHTMLAttributes } from 'react';

// Mock Button since it depends on tanstack-router
vi.mock('@/components/Button/Button', () => ({
  Button: ({
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
  describe('Full variant (Landing page)', () => {
    it('should render with the correct semantic role (banner)', () => {
      render(<Header variant="full" />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should display the application name "Study Wallet"', () => {
      render(<Header variant="full" />);
      expect(screen.getByText(/study wallet/i)).toBeInTheDocument();
    });

    it('should contain a navigation landmark', () => {
      render(<Header variant="full" />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('should render the main navigation links', () => {
      render(<Header variant="full" />);
      expect(screen.getByRole('link', { name: /recursos/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /método/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /público/i })).toBeInTheDocument();
    });

    it('should render the login and signup actions', () => {
      render(<Header variant="full" />);
      expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
      expect(
        screen.getByRole('link', { name: /cadastre-se/i })
      ).toBeInTheDocument();
    });
  });

  describe('Simple variant (Login/Register pages)', () => {
    it('should display the application name "Study Wallet"', () => {
      render(<Header variant="simple" />);
      expect(screen.getByText(/study wallet/i)).toBeInTheDocument();
    });

    it('should NOT contain a navigation landmark', () => {
      render(<Header variant="simple" />);
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });

    it('should NOT render the main navigation links', () => {
      render(<Header variant="simple" />);
      expect(screen.queryByRole('link', { name: /recursos/i })).not.toBeInTheDocument();
    });

    it('should NOT render the login and signup actions', () => {
      render(<Header variant="simple" />);
      expect(screen.queryByRole('link', { name: /login/i })).not.toBeInTheDocument();
      expect(
        screen.queryByRole('link', { name: /cadastre-se/i })
      ).not.toBeInTheDocument();
    });
  });
});
