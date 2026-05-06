import { Link, LinkComponentProps } from '@tanstack/react-router';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export const getButtonStyles = (
  variant: 'primary' | 'secondary' = 'primary',
  className: string = ''
) => {
  const baseStyles =
    'rounded-full font-semibold transition-all duration-200 px-6 py-2 flex items-center justify-center active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'text-text-primary bg-accent hover:brightness-110 shadow-sm',
    secondary:
      'text-text-primary bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700',
  };

  return `${baseStyles} ${variantStyles[variant]} ${className}`.trim();
};

interface BaseProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

/**
 * Polymorphic Button Props:
 * - If 'to' is provided, it behaves like a TanStack Router Link (and inherits its types).
 * - Otherwise, it behaves like a standard HTML button.
 */
type ButtonProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never })
  | (BaseProps & LinkComponentProps & { to: string });

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const styles = getButtonStyles(variant, className);

  // Type guard to check if we should render a Link
  if ('to' in props && props.to !== undefined) {
    return (
      <Link
        data-variant={variant}
        className={styles}
        {...(props as LinkComponentProps)}
      >
        {children}
      </Link>
    );
  }

  // Fallback to standard button
  return (
    <button
      data-variant={variant}
      className={styles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
