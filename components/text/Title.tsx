import React from 'react';
interface ITitle {
  children: React.ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'lg' | 'md';
  underline?: boolean;
  position?: 'center' | 'right';
}
const Title = ({
  tag,
  children,
  size = 'lg',
  underline = true,
  position = 'right',
}: ITitle) => {
  const Tag = tag;
  const style = {
    lg: 'text-[32px]',
    md: 'text-[22px]',
  };
  return (
    <Tag className={`${position === 'center' && 'text-center'}`}>
      <span className={`text-app-blue font-bold leading-9 ${style[size]}`}>
        {children}
      </span>
      {underline && (
        <div
          className={`w-7 h-2 mb-4 bg-app-sky-blue mt-2 ${
            position === 'center' && 'mx-auto'
          }`}
        ></div>
      )}
    </Tag>
  );
};

export default Title;
