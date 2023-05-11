import MainLayout from '@/components/layouts/MainLayout';
import Upload from '@/components/svg/Upload';
import Title from '@/components/text/Title';
import { Button, Card, Checkbox } from '@material-tailwind/react';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';

const Docs: NextPageWithLayout = () => {
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
          <form className="flex flex-col gap-8">
            <div>
              <h3 className="font-semibold mb-4">
                Upload front to your Passport
              </h3>
              <label className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4">
                <input type="file" className="hidden" />
                <Upload />
                Upload Additional file
              </label>
              <p className="text-center text-app-gray-light mt-3 text-sm">
                Attach file. File size of your documents should not exceed 10MB
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">
                Upload back to your Passport
              </h3>
              <label className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4">
                <input type="file" className="hidden" />
                <Upload />
                Upload Additional file
              </label>
              <p className="text-center text-app-gray-light mt-3 text-sm">
                Attach file. File size of your documents should not exceed 10MB
              </p>
            </div>
            <div className="text-center flex items-center justify-center text-app-gray">
              <Checkbox />I want to protect my data by signing an NDA
            </div>
            <div className="">
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

export default Docs;
Docs.getLayout = (page) => {
  return <MainLayout type="application"> {page}</MainLayout>;
};
