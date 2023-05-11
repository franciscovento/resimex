import { useWindowSize } from '@/lib/hooks';
import calendarAnimation from '@/public/animations/animation-text.json';
import Lottie from 'lottie-react-web';
import Image from 'next/image';
import Bubble from '../Bubble';
const Hero = () => {
  const { width = 0 } = useWindowSize();
  return (
    <div className="text-app-blue bg-app-sky-blue-light app-banner -mt-32 -z-[9] pt-32 pb-8">
      <div className="absolute top-24 sm:top-10 left-1/2 -translate-x-1/2 z-[99]">
        <Lottie
          width={width > 600 ? 900 : 550}
          options={{
            animationData: calendarAnimation,
          }}
        />
      </div>
      <div className="hero-background app-container ">
        <div className="max-w-4xl mx-auto min-h-[650px] sm:min-h-[550px] grid grid-cols-2 content-center sm:mt-32">
          <div className="relative right-10 sm:right-0">
            <Bubble />
          </div>
          <div>
            <div>
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
      </div>
    </div>
  );
};

export default Hero;
