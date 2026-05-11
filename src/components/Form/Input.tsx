import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  error?: FieldError | undefined;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, className, id, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-zinc-300">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
              {icon}
            </div>
          )}
          <input
            id={id}
            ref={ref}
            className={cn(
              'bg-card/50 border-cardBorder focus:border-accent focus:ring-accent/20 w-full rounded-xl border py-3 pr-4 text-white transition-all placeholder:text-zinc-600 focus:ring-2 focus:outline-none',
              icon ? 'pl-11' : 'pl-4',
              error &&
                'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <span className="animate-in fade-in slide-in-from-top-1 text-xs text-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
