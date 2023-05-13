import { Application } from '@/lib/interfaces/application/applicationResponse';
import {
  createApplication,
  updateApplication,
} from '@/lib/services/application.service';
import { Button, Input } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IPersonalInformation {
  defaultValues?: Application;
}
const PersonalInformation = ({ defaultValues }: IPersonalInformation) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting, isDirty },
  } = useForm<Application>({
    defaultValues: defaultValues
      ? defaultValues
      : {
          legal_first_names: '',
          legal_last_names: '',
          nationality: '',
          email: '',
          phone: '',
          date_of_birth: '',
          gender: '',
          passport_number: '',
          passport_expiration_date: '',
          residence: '',
          residence_address: '',
          job: '',
          comments: '',
          status: 'draft',
        },
    mode: 'all',
  });

  useEffect(() => {
    if (defaultValues) {
      const fecha = new Date(defaultValues?.date_of_birth);
      const fechaFormateada = fecha.toISOString().slice(0, 10);
      reset({
        ...defaultValues,
        date_of_birth: fechaFormateada,
      });
    }
  }, [defaultValues]);

  const onSubmit = async (data: Application) => {
    try {
      const dateOfBirth = new Date(data.date_of_birth).getTime();
      const passportExp = new Date(data.date_of_birth).getTime();
      const application = {
        ...data,
        date_of_birth: dateOfBirth,
        passport_expiration_date: passportExp,
      };

      if (defaultValues) {
        return await editApplication(application);
      }
      return await generateApplication(application);
    } catch (error) {
      console.log(error);
    }
  };

  const generateApplication = async (data: Application) => {
    createApplication(data)
      .then((e) => {
        alert('Se creó la aplicación correctamente');
        router.push('/dashboard');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const editApplication = async (data: Application) => {
    if (isDirty) {
      return updateApplication(data)
        .then((resp) => {
          alert('Se actualizó la aplicación correctamente');
          router.push('/dashboard');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const result = confirm('Estás seguro que no deseas modificar nada?');
    return result ? router.push('/dashboard') : null;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex gap-8 flex-col sm:flex-row">
        <Input
          variant="standard"
          label="Legal first name"
          {...register('legal_first_names', { required: true })}
        />
        <Input
          variant="standard"
          label="Legal last name"
          {...register('legal_last_names', { required: true })}
        />
      </div>

      <div className="flex gap-8 flex-col sm:flex-row">
        <Input
          variant="standard"
          label="Your Nationality"
          {...register('nationality', { required: true })}
        />
        <Input
          variant="standard"
          label="Your Gender"
          {...register('gender', { required: true })}
        />{' '}
      </div>
      <Input
        variant="standard"
        label="Your Residence"
        {...register('residence', { required: true })}
      />
      <div className="flex gap-8 flex-col sm:flex-row">
        <Input
          variant="standard"
          label="Residence address"
          {...register('residence_address', { required: true })}
        />
        {/* <Input variant="standard" label="Postcode" {...register("postcode")} /> */}
      </div>
      <Input
        variant="standard"
        label="Contact Phone"
        {...register('phone', { required: true })}
      />

      <Input
        type="email"
        variant="standard"
        label="E-mail"
        {...register('email', { required: true })}
      />

      <div className="flex gap-8 flex-col sm:flex-row">
        <Input
          variant="standard"
          label="Your job"
          {...register('job', { required: true })}
        />

        <Input
          variant="standard"
          type="date"
          label="Date of birth"
          {...register('date_of_birth', { required: true })}
        />
      </div>
      <Input
        variant="standard"
        label="Any comments"
        {...register('comments', { required: true })}
      />
      <div className="mt-8">
        <Button
          disabled={!isValid || isSubmitting}
          type="submit"
          className={'bg-app-sky-blue w-full'}
        >
          Save and continue
        </Button>
      </div>
    </form>
  );
};

export default PersonalInformation;
