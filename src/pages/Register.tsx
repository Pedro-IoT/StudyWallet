import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from '@tanstack/react-router';
import { LuMail, LuLock, LuUser } from 'react-icons/lu';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Form/Input';
import { AuthLayout } from '@/components/Auth/AuthLayout';
import { registerSchema, type RegisterFormValues } from '@/schemas/auth.schema';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/store/useAuthStore';
import { useState } from 'react';

export const Register = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore(state => state.setAuth);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    try {
      const response = await authService.register(data);
      setAuth(response.user, response.token);
      navigate({ to: '/' });
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Crie sua conta"
      subtitle="Comece a organizar seu conhecimento hoje"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          label="Nome completo"
          type="text"
          placeholder="Seu nome"
          icon={<LuUser size={16} />}
          error={errors.name}
          {...register('name')}
        />

        <Input
          id="email"
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          icon={<LuMail size={16} />}
          error={errors.email}
          {...register('email')}
        />

        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Crie uma senha forte"
          icon={<LuLock size={16} />}
          error={errors.password}
          {...register('password')}
        />

        <Input
          id="confirmPassword"
          label="Confirmar Senha"
          type="password"
          placeholder="Repita sua senha"
          icon={<LuLock size={16} />}
          error={errors.confirmPassword}
          {...register('confirmPassword')}
        />

        <Button
          type="submit"
          className="w-full py-3.5 shadow-[0_0_20px_rgba(10,132,255,0.3)]"
          disabled={isLoading}
        >
          {isLoading ? 'Criando conta...' : 'Criar minha Carteira'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-zinc-500">Já tem uma conta? </span>
        <Link to="/login" className="text-accent font-medium hover:underline">
          Faça login
        </Link>
      </div>

      <p className="mt-4 text-center text-[10px] leading-tight text-zinc-500">
        Ao criar uma conta, você concorda com nossos{' '}
        <Link to="#" className="underline">
          Termos
        </Link>{' '}
        e{' '}
        <Link to="#" className="underline">
          Privacidade
        </Link>
        .
      </p>
    </AuthLayout>
  );
};
