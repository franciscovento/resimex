import MainLayout from '@/components/layouts/MainLayout';
import Upload from '@/components/svg/Upload';
import Title from '@/components/text/Title';
import { Button, Card, Input } from '@material-tailwind/react';
import Link from 'next/link';
import { NextPageWithLayout } from '../_app';

const Checkout: NextPageWithLayout = () => {
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
            <Input disabled variant="standard" label="Legal name" />
            <div className="flex gap-8">
              <Input disabled variant="standard" label="Your Nationality" />
              <Input disabled variant="standard" label="Your Gender" />{' '}
            </div>
            <Input disabled variant="standard" label="Your Residence" />
            <div className="flex gap-8">
              <Input disabled variant="standard" label="Residence address" />
              <Input disabled variant="standard" label="Postcode" />
            </div>
            <Input disabled variant="standard" label="Contact Phone" />

            <Input disabled variant="standard" label="E-mail" />

            <div className="flex gap-8">
              <Input disabled variant="standard" label="Your job" />
              <Input disabled variant="standard" label="Date of birth" />
            </div>
            <Input disabled variant="standard" label="Any comments" />
            <div className="flex flex-col gap-8 mt-4">
              <div>
                <h3 className="font-semibold mb-4">Front passport</h3>
                <label className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4">
                  <input disabled type="file" className="hidden" />
                  <Upload />
                  Upload Additional file
                </label>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Back passport</h3>
                <label className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4">
                  <input disabled type="file" className="hidden" />
                  <Upload />
                  Upload Additional file
                </label>
              </div>
            </div>
          </form>
        </Card>
        <div className="hidden md:block col-span-1">
          <div className="p-8 bg-app-sky-blue-light rounded-2xl max-w-[285px] min-h-[345px] shadow-md">
            <Title tag="h3" size="md" underline={false}>
              Next step
            </Title>
            <p>
              We redirect you to a secure payment platform Stripe. Once the
              payment is made, you must return to this page to schedule a call
              with your advisor
            </p>
          </div>
          <Button className="bg-app-sky-blue w-full max-w-[285px] mt-8">
            Save and pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
Checkout.getLayout = (page) => {
  return <MainLayout type="application">{page}</MainLayout>;
};
