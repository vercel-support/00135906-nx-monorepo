import IconWrapper from './IconWrapper';

const GitPullRequestIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      className={`feather feather-git-pull-request ${props.className}`}
    >
      <circle cx="18" cy="18" r="3"></circle>
      <circle cx="6" cy="6" r="3"></circle>
      <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
      <line x1="6" y1="9" x2="6" y2="21"></line>
    </svg>
  );
};

export const GitPullRequest = IconWrapper(GitPullRequestIcon);
