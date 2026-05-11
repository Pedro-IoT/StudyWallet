import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="bg-background selection:bg-appleBlue relative flex min-h-screen flex-col overflow-x-hidden selection:text-white">
      {/* Fixed background elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="glow-bg -top-50 -left-50"></div>
        <div
          className="glow-bg top-[40%] -right-75 opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)',
          }}
        ></div>
      </div>

      <Header variant="simple" />

      <main className="z-10 flex flex-1 items-center justify-center px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up glass w-full max-w-lg rounded-[2.5rem] p-8 shadow-2xl sm:p-16">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg font-medium text-zinc-400">{subtitle}</p>
          </div>

          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};
