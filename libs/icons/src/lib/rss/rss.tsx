import IconWrapper from './IconWrapper';

const RssIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-rss ${props.className}`}
    >
      <path d="M4,11a9,9,0,0,1,9-9"></path>
      <path d="M4,4a16,16,0,0,1,16,16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </svg>
  );
};

export const Rss = IconWrapper(RssIcon);
