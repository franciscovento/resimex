import MainLayout from '@/components/layouts/MainLayout';
import Upload from '@/components/svg/Upload';
import Check from '@/components/svg/check';
import Title from '@/components/text/Title';
import { addDocumentPhoto } from '@/lib/services/application.service';
import { ErrorMessage } from '@hookform/error-message';
import { Button, Card, Checkbox } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { NextPageWithLayout } from '../_app';
interface FormValues {
  front: File[] | '';
  back: File[] | '';
  conditions: boolean;
}
const Docs: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isSubmitting, errors, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      front: '',
      back: '',
      conditions: false,
    },
    mode: 'all',
  });

  const front = watch('front');
  const back = watch('back');

  const onSubmit = (data: FormValues) => {
    if (isDirty) {
      const imgData = new FormData();
      imgData.append('photos', data.front[0]);
      imgData.append('photos', data.back[0]);
      uploadPhotos(imgData);
    }
  };

  const uploadPhotos = (data: any) => {
    addDocumentPhoto(data)
      .then((resp) => {
        alert('Se envió el información con éxito');
        console.log(resp);
        router.push('/dashboard');
      })
      .catch((error) => {
        alert('Ocurrió un error, inténtalo más tarde.');
        console.log(error);
      });
  };

  const validateFileSize = (file: any) => {
    const MAX_FILE_SIZE = 500000; // 500 KB
    if (file[0].size > MAX_FILE_SIZE) {
      return '*File too large';
    }
    return true;
  };
  console.log(errors);
  return (
    <div className="py-12">
      <Link href="/dashboard">
        <span className="text-xs text-app-sky-blue underline mb-4 block">
          {' '}
          {'<'} Back to home
        </span>
      </Link>
      <Title tag="h1" underline={false}>
        Upload your documentation
      </Title>
      <div className="grid grid-cols-3 gap-8 mt-12">
        <Card className="p-8  col-span-full md:col-span-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-semibold mb-4">
                Upload front to your Passport
              </h3>
              <label className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4 ">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register('front', {
                    required: true,
                    validate: { fileSize: (file) => validateFileSize(file) },
                  })}
                />
                {front ? <Check /> : <Upload />}
                {front ? front[0]?.name : '  Upload Additional file'}
              </label>
              <ErrorMessage
                name="front"
                errors={errors}
                as={'span'}
                className="text-xs text-app-red"
              />
              <p className="text-center text-app-gray-light mt-3 text-sm">
                Attach file. File size of your documents should not exceed 0.5MB
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                Upload back to your Passport
              </h3>
              <label className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register('back', {
                    required: true,
                    validate: { fileSize: (file) => validateFileSize(file) },
                  })}
                />
                {back ? <Check /> : <Upload />}
                {back ? back[0]?.name : 'Upload Additional file'}
              </label>
              <ErrorMessage
                name="back"
                errors={errors}
                as={'span'}
                className="text-xs text-app-red"
              />
              <p className="text-center text-app-gray-light mt-3 text-sm">
                Attach file. File size of your documents should not exceed 0.5MB
              </p>
            </div>
            <div className="text-center flex items-center justify-center text-app-gray">
              <Checkbox {...register('conditions', { required: true })} />I want
              to protect my data by signing an NDA
            </div>
            <div>
              <Button
                type="submit"
                className={'bg-app-sky-blue w-full'}
                disabled={!isValid || isSubmitting}
              >
                Save and continue
              </Button>
            </div>
          </form>
        </Card>
        <div className="hidden md:block col-span-1">
          <div className="p-8 bg-app-sky-blue-light rounded-2xl max-w-[285px] shadow-md">
            <Title tag="h3" size="md" underline={false}>
              Help & frequency questions
            </Title>
            <p>
              Lifestyle choices vary, which is why we take the time to learn
              about your individual situation and requirements.
              <br /> <br />
              Well assist you from start to finish, ensuring you have the
              insight and knowledge needed to succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
Docs.getLayout = (page) => {
  return <MainLayout type="application"> {page}</MainLayout>;
};
