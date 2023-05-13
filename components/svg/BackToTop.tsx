interface IBackToTop extends React.ComponentPropsWithoutRef<'svg'> {}
const BackToTop = ({ ...svgProps }: IBackToTop) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <circle cx="15" cy="15" r="15" fill="white" />
      <path
        d="M15 23V7M8 14L15 7L22 14"
        stroke="#0099E1"
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackToTop;
