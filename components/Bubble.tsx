import Image from 'next/image';
import TelegramIcon from './svg/TelegramIcon';

const Bubble = () => {
  return (
    <div className="w-48 h-48 sm:w-60 sm:h-60 bg-white rounded-full text-app-sky-blue text-2xl sm:text-3xl flex items-center justify-center font-Nunito font-medium relative">
      <div className="relative">
        {' '}
        Say, <br /> Hello!
        <Image
          className="absolute -top-6"
          src={'/images/hand.png'}
          width={16}
          height={16}
          alt=""
        />
      </div>
      <TelegramIcon className="absolute right-3 bottom-3" />
    </div>
  );
};

export default Bubble;
