import AuthLayout from '@/components/layouts/AuthLayout';
import MainLayout from '@/components/layouts/MainLayout';
import { createAccount } from '@/lib/services';
import {
  failNotificationToast,
  successNotificationToast,
} from '@/lib/services/notification.service';
import { Button, Checkbox } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { NextPageWithLayout } from '../_app';

const SignUpPage: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      policy: false,
    },
    mode: 'onChange',
  });

  const onSubmit = (data: {
    email: string;
    username: string;
    password: string;
    policy: boolean;
  }) => {
    createAccount({ email: data.email, password: data.password })
      .then(() => {
        successNotificationToast();
        router.push('/auth/login');
      })
      .catch(() => {
        failNotificationToast();
      });
  };

  return (
    <>
      <div>
        <h2 className="text-app-blue text-xl font-bold ">Create an account</h2>
        <span className="font-light">And start your trip safely with us.</span>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 sm:min-w-[450px]"
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
            Create username <span className="text-app-red">*</span>
          </p>
          <input
            {...register('username', { required: true })}
            className="bg-app-gray-lighter p-3 rounded-md outline-app-sky-blue placeholder:text-app-gray-light"
            type="text"
            placeholder="Enter your username"
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
        </label>
        <label className="text-app-gray-light flex text-sm">
          <Checkbox {...register('policy', { required: true })} />
          By creating an account you are agreeing to our Terms and Conditions
          and Privacy Policy
        </label>
        <div className="text-center">
          <Button
            type="submit"
            disabled={!isValid}
            className="bg-app-sky-blue w-full"
          >
            Sign Up
          </Button>
          <p className="mt-4 text-sm text-app-gray-light">
            Or do yo have an account?{' '}
            <Link href={'/auth/login'}>
              {' '}
              <span className="text-app-sky-blue underline">login</span>
            </Link>{' '}
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUpPage;

SignUpPage.getLayout = (page) => {
  return (
    <MainLayout type="auth">
      <AuthLayout>{page}</AuthLayout>
    </MainLayout>
  );
};
