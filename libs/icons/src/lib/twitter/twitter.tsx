import IconWrapper from './IconWrapper';

const TwitterIcon = (props: CommonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-twitter ${props.className}`}
      {...props}
    >
      <path
        d="M23 3C22.042 3.675 20.995 4.192 19.9 4.512C19.358 3.794 18.587 3.256 17.732 2.974C16.877 2.692 15.973 2.684 15.115 2.95C14.257 3.216 13.49 3.739 12.903 4.451C12.316 5.163 11.929 6.029 11.787 6.95C8.732 6.713 5.861 5.21 3.831 2.713C3.368 3.417 3.137 4.223 3.164 5.047C2.568 5.149 1.999 5.4 1.5 5.778C1.5 5.788 1.5 5.797 1.5 5.808C1.5 7.118 2.009 8.355 2.917 9.305C2.42 9.292 1.931 9.174 1.48 8.954C1.48 8.964 1.48 8.974 1.48 8.985C1.48 10.74 2.812 12.233 4.558 12.567C4.213 12.663 3.854 12.717 3.487 12.729C3.11 14.509 4.171 16.179 5.92 16.573C5.623 16.662 5.314 16.713 5 16.724C4.731 18.213 5.486 19.644 6.832 20.377C6.471 20.438 6.1 20.473 5.726 20.48C5.395 20.546 5.063 20.578 4.732 20.576C4.483 20.576 4.235 20.561 3.989 20.529C4.507 21.32 5.335 21.84 6.228 22C5.664 21.146 5.315 20.143 5.315 19.074C5.315 18.899 5.327 18.725 5.35 18.553C3.776 18.324 2.48 17.418 1.766 16.124C1.51 15.694 1.327 15.215 1.23 14.711C1.23 14.724 1.23 14.736 1.23 14.749C1.23 
      "
      />
    </svg>
  );
};

export const Twitter = IconWrapper(TwitterIcon);
