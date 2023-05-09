import MainLayout from '@/components/layouts/MainLayout';
import { useWindowSize } from '@/lib/hooks';
import Lottie from 'lottie-react-web';
import Image from 'next/image';
import calendarAnimation from '../public/animations/animation-text.json';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <div className="text-app-blue hero-background app-banner -mt-24 -z-[9] pt-32 ">
        <div className="absolute top-16 sm:top-10 left-1/2 -translate-x-1/2">
          <Lottie
            width={width > 600 ? 900 : 450}
            options={{
              animationData: calendarAnimation,
            }}
          />
        </div>
        <div className="app-container relative flex flex-col h-[450px] sm:h-[580px] justify-end gap-32 sm:gap-12">
          <div className="max-w-[500px] text-xl text-black mx-auto pl-20 sm:pl-32">
            <p className="text-sm sm:text-xl">
              <span className="font-bold">
                {' '}
                Global citizenship and residency at your fingertips
              </span>{' '}
              Everyone has the opportunity to thrive, no matter where home is
            </p>
          </div>
          <div className="mx-auto py-8">
            <Image
              src={'/images/persons-international.png'}
              width={400}
              height={65}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
Home.getLayout = (page) => {
  return <MainLayout type="main">{page}</MainLayout>;
};
