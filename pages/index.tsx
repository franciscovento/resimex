import Divider from '@/components/Divider';
import Hero from '@/components/home/Hero';
import Investment from '@/components/home/Investment';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import MainLayout from '@/components/layouts/MainLayout';
import { Button, Input } from '@material-tailwind/react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* SECTION HERO */}
      <Hero />
      <Divider />
      {/* SECTION 2 */}
      <Investment />
      {/* SECTION 3 */}
      <Services />
      {/* SECTION 4 */}
      <WhyChooseUs />
      {/* FORM */}
      <div className="app-banner bg-[url('/images/home-background-catedral.png')] bg-center bg-cover">
        <div className="app-container min-h-[700px] flex  items-center justify-center">
          <form className="flex flex-col justify-between gap-12 p-8 bg-app-gray-lighter rounded-lg w-full sm:w-0 sm:min-w-[550px]">
            <Input variant="standard" label="Your name" />
            <Input variant="standard" label="Your email" />
            <Input variant="standard" label="Your message" />
            <Button className="flex items-center gap-3 max-w-[200px] bg-app-sky-blue">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.71 4.29026C27.575 4.15593 27.4045 4.06293 27.2185 4.02218C27.0325 3.98144 26.8388 3.99465 26.66 4.06026L4.66 12.0603C4.47027 12.1322 4.30692 12.2602 4.19165 12.4272C4.07638 12.5942 4.01465 12.7923 4.01465 12.9953C4.01465 13.1982 4.07638 13.3963 4.19165 13.5633C4.30692 13.7303 4.47027 13.8583 4.66 13.9303L13.25 17.3603L19.59 11.0003L21 12.4103L14.63 18.7803L18.07 27.3703C18.1441 27.5563 18.2724 27.7159 18.4382 27.8282C18.604 27.9405 18.7997 28.0005 19 28.0003C19.2021 27.9961 19.3982 27.9308 19.5624 27.813C19.7266 27.6952 19.8513 27.5304 19.92 27.3403L27.92 5.34026C27.9881 5.16333 28.0046 4.97069 27.9674 4.78478C27.9302 4.59887 27.8409 4.42737 27.71 4.29026Z"
                  fill="white"
                />
              </svg>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
Home.getLayout = (page) => {
  return <MainLayout type="main">{page}</MainLayout>;
};
