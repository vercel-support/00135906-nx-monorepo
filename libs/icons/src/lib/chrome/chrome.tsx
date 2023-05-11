import IconWrapper from './IconWrapper';

const ChromeIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-chrome ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="10.63"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="17.37"></line>
    </svg>
  );
};

export const Chrome = IconWrapper(ChromeIcon);
