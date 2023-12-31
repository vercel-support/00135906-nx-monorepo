import IconWrapper from './IconWrapper';

const GitlabIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-gitlab ${props.className}`}
    >
      <path d="M12,1.61l2.43,6.55H9.57L12,1.61z M3.76,9.16l8.53,12.21c0.27,0.39,0.68,0.62,1.11,0.62c0.43,0,0.84-0.23,1.11-0.62  l8.53-12.21C22.37,8.79,22.18,8.2,21.78,7.9L12.84,2.3c-0.6-0.43-1.39-0.43-1.99,0L2.22,7.9C1.82,8.2,1.63,8.79,1.76,9.38  C1.9,9.95,2.32,10.34,2.84,10.45l1.37,0.28L3.76,9.16z M6.96,15.1l-3.04,8.46c-0.09,0.27,0,0.57,0.23,0.73c0.1,0.07,0.22,0.12,0.34,0.12  c0.15,0,0.3-0.06,0.41-0.17l3.04-2.99L6.96,15.1z M17.04,15.1l-1.01,1.01l3.04,2.99c0.11,0.11,0.25,0.17,0.41,0.17  c0.12,0,0.24-0.05,0.34-0.12c0.23-0.16,0.32-0.46,0.23-0.73l-3.04-8.46L17.04,15.1z"></path>
    </svg>
  );
};

export const Gitlab = IconWrapper(GitlabIcon);
