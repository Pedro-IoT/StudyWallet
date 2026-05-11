import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from '@tanstack/react-router';
import { LuMail, LuLock } from 'react-icons/lu';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Form/Input';
import { AuthLayout } from '@/components/Auth/AuthLayout';
import { loginSchema, type LoginFormValues } from '@/schemas/auth.schema';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/store/useAuthStore';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore(state => state.setAuth);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      const response = await authService.login(data);
      setAuth(response.user, response.token);
      navigate({ to: '/' });
    } catch (error) {
      console.error('Login failed:', error);
      // Here you could add a toast notification for errors
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Bem-vindo de volta"
      subtitle="Acesse sua carteira de conhecimento"
    >
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          icon={<LuMail size={18} />}
          error={errors.email}
          {...register('email')}
        />

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-300"
            >
              Senha
            </label>
            <Link to="#" className="text-accent text-xs hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            icon={<LuLock size={18} />}
            error={errors.password}
            {...register('password')}
          />
        </div>

        <Button
          type="submit"
          className="w-full py-4 shadow-[0_0_20px_rgba(10,132,255,0.3)]"
          disabled={isLoading}
        >
          {isLoading ? 'Entrando...' : 'Entrar na minha Carteira'}
        </Button>
      </form>

      <div className="mt-8 text-center text-sm">
        <span className="text-zinc-500">Não tem uma conta? </span>
        <Link
          to="/cadastro"
          className="text-accent font-medium hover:underline"
        >
          Cadastre-se grátis
        </Link>
      </div>
    </AuthLayout>
  );
};
