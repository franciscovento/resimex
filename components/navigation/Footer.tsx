import { useWindowSize } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import Bubble from '../Bubble';
import EmailIcon from '../svg/EmailIcon';

interface IFooter {
  burble: boolean;
}
const Footer = ({ burble }: IFooter) => {
  const [showBurble, setShowBurble] = useState(burble);
  const { width } = useWindowSize();
  console.log(width);

  useEffect(() => {
    if (width && width < 600) {
      setShowBurble(false);
    }
    if (burble && width && width > 600) {
      setShowBurble(true);
    }
  }, [width, burble]);
  return (
    <div className="bg-app-blue py-12 text-white relative">
      <div className="app-container flex justify-between items-center relative">
        <div className="flex items-center gap-4">
          <EmailIcon />
          <p className="hidden sm:block">contact.forwork@resimex.com</p>
        </div>
        {showBurble ? (
          <div className="absolute -top-44 right-4">
            <Bubble />
          </div>
        ) : (
          <ul className="flex flex-col md:flex-row gap-8 text-sm">
            {footerItems.map((item, index) => (
              <li key={index} className="underline">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Footer;

const footerItems = [
  {
    name: 'Terms and Conditions',
    url: '#',
  },
  {
    name: 'Privacy Policy',
    url: '#',
  },
  {
    name: 'All rights reserved',
    url: '#',
  },
];
