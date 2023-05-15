import { logout } from '@/lib/helpers/logout.helper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ResimexIcon from '../svg/ResimexIcon';

interface IAppHeader {
  bgTransparent?: boolean;
}
const AppHeader = ({ bgTransparent = false }: IAppHeader) => {
  const router = useRouter();

  return (
    <div
      className={`header-diagonal  py-8 ${bgTransparent && '!bg-transparent'}`}
    >
      <div className="px-12 diagonal flex items-center justify-between">
        <Link href={router.pathname.includes('auth') ? '/' : '/dashboard'}>
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
