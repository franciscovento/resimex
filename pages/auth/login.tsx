import AuthLayout from '@/components/layouts/AuthLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { login } from '@/lib/services';
import { failNotificationToast } from '@/lib/services/notification.service';
import { Button } from '@material-tailwind/react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { NextPageWithLayout } from '../_app';

const LoginPage: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: {
    email: string;

    password: string;
  }) => {
    login({ email: data.email, password: data.password })
      .then((resp) => {
        Cookies.set('app-token', resp.data.token);
        router.push('/dashboard');
      })
      .catch(() => {
        failNotificationToast();
      });
  };

  return (
    <>
      <div>
        <h2 className="text-app-blue text-xl font-bold ">
          Welcome to your Resimex
        </h2>
        <span className="font-light">Login to your account</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full sm:min-w-[450px]"
      >
        <label className="flex flex-col font-semibold text-sm">
          <p>
            Your email <span className="text-app-red">*</span>
          </p>
          <input
            {...register('email', { required: true })}
            className="bg-app-gray-lighter p-3 rounded-md outline-app-sky-blue placeholder:text-app-gray-light"
            type="text"
            placeholder="Please enter your email"
          />
        </label>

        <label className="flex flex-col font-semibold text-sm">
          <p>
            Password <span className="text-app-red">*</span>
          </p>
          <input
            {...register('password', { required: true })}
            className="bg-app-gray-lighter p-3 rounded-md outline-app-sky-blue placeholder:text-app-gray-light"
            type="password"
            placeholder="Enter password"
          />
          <small className="mt-2 text-app-sky-blue underline">
            Forgot your password?
          </small>
        </label>

        <div className="text-center">
          <Button
            type="submit"
            disabled={!isValid}
            className="bg-app-sky-blue w-full"
          >
            Login
          </Button>
          <p className="mt-4 text-sm text-app-gray-light">
            You don t have an account?{' '}
            <Link href={'/auth/sign-up'}>
              {' '}
              <span className="text-app-sky-blue underline">sign-up</span>
            </Link>{' '}
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginPage;

LoginPage.getLayout = (page) => {
  return (
    <MainLayout type="auth">
      <AuthLayout>{page}</AuthLayout>
    </MainLayout>
  );
};
