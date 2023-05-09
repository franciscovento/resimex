import ResimexIcon from '../svg/ResimexIcon';

interface IAppHeader {
  bgTransparent?: boolean;
}
const AppHeader = ({ bgTransparent = false }: IAppHeader) => {
  return (
    <div
      className={`header-diagonal  py-4 ${bgTransparent && '!bg-transparent'}`}
    >
      <div className="app-container diagonal">
        <ResimexIcon />
      </div>
    </div>
  );
};

export default AppHeader;
