import MainLayout from '@/components/layouts/MainLayout';
import Check from '@/components/svg/check';
import Title from '@/components/text/Title';
import { getDateFormatted } from '@/lib/helpers/getDateFormatted';
import { useApplication } from '@/lib/hooks/useApplication';
import { updateApplication } from '@/lib/services/application.service';
import {
  confirmModal,
  failNotificationToast,
  successNotificationToast,
} from '@/lib/services/notification.service';
import { payProduct } from '@/lib/services/payments.services';
import { Button, Card, Input } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../_app';

const Checkout: NextPageWithLayout = () => {
  const router = useRouter();
  const { data: applicationResponse, error, isLoading } = useApplication();
  const application = applicationResponse?.results;

  const confirmApplication = async () => {
    const result = await confirmModal({
      message:
        'Are you sure the information is correct? After this step you will not be able to modify your data.',
      title: 'Do you want to continue?',
    });
    if (result) {
      updateApplication({
        status: 'confirmed',
      })
        .then(() => {
          payProduct({
            success_url:
              process.env.NEXT_PUBLIC_APP_BASE_URL + '/dashboard' || '',
            cancel_url:
              process.env.NEXT_PUBLIC_APP_BASE_URL + '/dashboard' || '',
          })
            .then((resp) => {
              router.push(resp.data.url);
              successNotificationToast();
            })
            .catch((error) => {
              console.log(error);
              failNotificationToast('An error ocurred, please try again later');
            });
        })
        .catch((error) => {
          console.log(error);
          failNotificationToast('An error ocurred, please try again later');
        });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has ocurred...</div>;
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
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-8">
              <Input
                value={application?.legal_first_names}
                disabled
                label="Legal first name"
              />
              <Input
                value={application?.legal_last_names}
                disabled
                label="Legal last name"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <Input
                disabled
                label="Your Nationality"
                value={application?.nationality}
              />
              <Input disabled label="Your Gender" value={application?.gender} />{' '}
            </div>
            <Input
              disabled
              label="Your Residence"
              value={application?.residence}
            />
            <div className="flex flex-col sm:flex-row gap-8">
              <Input
                disabled
                label="Residence address"
                value={application?.residence_address}
              />
              {/* <Input disabled label="Postcode" /> */}
            </div>
            <Input disabled label="Contact Phone" value={application?.phone} />

            <Input disabled label="E-mail" value={application?.email} />

            <div className="flex flex-col sm:flex-row gap-8">
              <Input disabled label="Your job" value={application?.job} />
              <Input
                disabled
                label="Date of birth"
                value={getDateFormatted(application?.date_of_birth || '')}
              />
            </div>
            <Input
              disabled
              label="Any comments"
              value={application?.comments}
            />
            <div className="flex flex-col gap-8 mt-4">
              <div>
                <h3 className="font-semibold mb-4">Front passport</h3>
                <div className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4">
                  {/* <input disabled type="file" className="hidden" /> */}
                  <Check />
                  Front Passport
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Back passport</h3>
                <div className="border-dashed border-4 border-app-gray-lighter w-full h-[150px] flex items-center justify-center cursor-pointer gap-4">
                  {/* <input disabled type="file" className="hidden" /> */}
                  <Check />
                  Back Passport
                </div>
              </div>
            </div>
          </form>
        </Card>
        <div className=" col-span-full md:col-span-1">
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
          <Button
            onClick={confirmApplication}
            className="bg-app-sky-blue w-full max-w-[285px] mt-8"
          >
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
