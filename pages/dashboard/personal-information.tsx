import MainLayout from '@/components/layouts/MainLayout';
import Title from '@/components/text/Title';
import { Button, Card, Input } from '@material-tailwind/react';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';

const PersonalInformationPage: NextPageWithLayout = () => {
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
          <form className="flex flex-col gap-4">
            <Input variant="standard" label="Legal name" />
            <div className="flex gap-8">
              <Input variant="standard" label="Your Nationality" />
              <Input variant="standard" label="Your Gender" />{' '}
            </div>
            <Input variant="standard" label="Your Residence" />
            <div className="flex gap-8">
              <Input variant="standard" label="Residence address" />
              <Input variant="standard" label="Postcode" />
            </div>
            <Input variant="standard" label="Contact Phone" />

            <Input variant="standard" label="E-mail" />

            <div className="flex gap-8">
              <Input variant="standard" label="Your job" />
              <Input variant="standard" label="Date of birth" />
            </div>
            <Input variant="standard" label="Any comments" />
            <div className="mt-8">
              <Button className={'bg-app-sky-blue w-full'}>
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

export default PersonalInformationPage;
PersonalInformationPage.getLayout = (page) => {
  return <MainLayout type="application">{page}</MainLayout>;
};
