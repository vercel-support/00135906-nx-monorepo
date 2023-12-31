import IconWrapper from './IconWrapper';

const DiscIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-disc ${props.className}`}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
};

export const Disc = IconWrapper(DiscIcon);
