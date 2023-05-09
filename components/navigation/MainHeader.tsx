import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import ResimexIcon from '../svg/ResimexIcon';

const MainHeader = () => {
  return (
    <div>
      <div className="app-container flex justify-between items-center">
        <ResimexIcon />
        <ul className="sm:flex gap-12 hidden">
          {navigation.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
        <Link href={'/auth/login'}>
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
