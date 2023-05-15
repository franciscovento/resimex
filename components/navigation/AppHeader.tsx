import { logout } from '@/lib/helpers/logout.helper';
import Link from 'next/link';
import ResimexIcon from '../svg/ResimexIcon';

interface IAppHeader {
  bgTransparent?: boolean;
}
const AppHeader = ({ bgTransparent = false }: IAppHeader) => {
  return (
    <div
      className={`header-diagonal  py-4 ${bgTransparent && '!bg-transparent'}`}
    >
      <div className="px-12 py-2 diagonal flex items-center justify-between">
        <Link href={'/dashboard'}>
          <ResimexIcon />
        </Link>
        <div className="underline cursor-pointer" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
