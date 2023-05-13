import PersonalInformation from '@/components/forms/PersonalInformation';
import MainLayout from '@/components/layouts/MainLayout';
import Title from '@/components/text/Title';
import { useApplication } from '@/lib/hooks/useApplication';
import { Card } from '@material-tailwind/react';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';

const PersonalInformationPage: NextPageWithLayout = () => {
  const { data: applicationResponse, error, isLoading } = useApplication();
  if (isLoading) {
    return <div>loading info ...</div>;
  }
  return (
    <div className="py-12">
      <Link href="/dashboard">
        <span className="text-xs text-app-sky-blue underline mb-4 block">
          {' '}
          {'<'} Back to home
        </span>
      </Link>
      <Title tag="h1" underline={false}>
        Your Personal Information
      </Title>
      <div className="grid grid-cols-3 gap-8 mt-12">
        <Card className="p-8  col-span-full md:col-span-2">
          <PersonalInformation defaultValues={applicationResponse?.results} />
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

export default PersonalInformationPage;
PersonalInformationPage.getLayout = (page) => {
  return <MainLayout type="application">{page}</MainLayout>;
};
