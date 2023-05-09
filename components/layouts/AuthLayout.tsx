import Image from 'next/image';
import React from 'react';

interface IAuthLayout {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <div className="px-4 sm:px-8 min-h-[70vh] flex items-center">
      <div className="flex flex-col gap-8 max-w-md mx-auto md:mx-0">
        {children}
      </div>
      <div
        style={{
          clipPath: 'polygon(0 0, 100% 70%, 100% 100%, 0 100%)',
        }}
        className="bg-app-sky-blue-light h-28 app-banner fixed bottom-0 -z-[9]"
      ></div>
      <div className="hidden md:block w-[440px] h-full bg-red-50 fixed top-0 right-0">
        <Image
          src={'/images/mock-person.png'}
          fill
          alt=""
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default AuthLayout;
