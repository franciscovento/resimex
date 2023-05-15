import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import ResimexIcon from '../svg/ResimexIcon';

const MainHeader = () => {
  return (
    <div className="py-8">
      <div className="px-4 sm:px-12 flex items-center justify-between">
        <ResimexIcon />
        <ul className="sm:flex gap-12 hidden">
          {navigation.map((item, index) => (
            <li
              className="cursor-pointer duration-500 hover:text-app-sky-blue"
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <Link href={'/dashboard/'}>
          <Button className="bg-app-sky-blue">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;

const navigation = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'Testimonies',
    url: '#',
  },
  {
    title: 'Contacts',
    url: '#',
  },
];
