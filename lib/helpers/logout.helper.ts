import Cookies from 'js-cookie';
const logout = () => {
  Cookies.remove('app-token');
  window.location.href = '/dashboard/login';
};

export { logout };
