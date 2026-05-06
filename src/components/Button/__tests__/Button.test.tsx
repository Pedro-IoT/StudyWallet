import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { AnchorHTMLAttributes } from 'react';
import '@testing-library/jest-dom';

// Mock TanStack Router's Link since we're in a unit test environment
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

describe('Polymorphic Button component', () => {
  describe('Standard Button Behavior', () => {
    it('should render as a button by default', () => {
      render(<Button>Action</Button>);
      const element = screen.getByRole('button', { name: /action/i });
      expect(element.tagName).toBe('BUTTON');
    });

    it('should apply variant data attributes for styling hooks', () => {
      const { rerender } = render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'primary');

      rerender(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'secondary');
    });

    it('should be clickable and trigger events', async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      
      const element = screen.getByRole('button');
      element.click();
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should respect the disabled state', () => {
      render(<Button disabled>Disabled</Button>);
      const element = screen.getByRole('button');
      expect(element).toBeDisabled();
    });
  });

  describe('Navigation Link Behavior', () => {
    it('should render as an anchor tag when "to" prop is provided', () => {
      render(<Button to="/dashboard">Go to Dashboard</Button>);
      const element = screen.getByRole('link', { name: /dashboard/i });
      
      expect(element.tagName).toBe('A');
      expect(element).toHaveAttribute('href', '/dashboard');
    });

    it('should maintain consistent styling with standard buttons', () => {
      render(<Button to="/test" variant="secondary">Link Button</Button>);
      const element = screen.getByRole('link');
      
      expect(element).toHaveAttribute('data-variant', 'secondary');
      // Verify common button classes are present
      expect(element.className).toContain('rounded-full');
      expect(element.className).toContain('font-semibold');
    });
  });

  describe('Style Integration', () => {
    it('should allow custom className injection', () => {
      render(<Button className="custom-class">Custom</Button>);
      expect(screen.getByRole('button')).toHaveClass('custom-class');
    });
  });
});
