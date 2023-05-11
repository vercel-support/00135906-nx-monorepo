import IconWrapper from './IconWrapper';

const ChevronsUpIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-chevrons-up ${props.className}`}
    >
      <polyline points="17 11 12 6 7 11"></polyline>
      <polyline points="17 18 12 13 7 18"></polyline>
    </svg>
  );
};

export const ChevronsUp = IconWrapper(ChevronsUpIcon);
