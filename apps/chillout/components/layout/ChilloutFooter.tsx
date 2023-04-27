import Image from 'next/image';
import { Link } from '@with-nx/react-ui';

const ChilloutFooter = () => {
  return (
    <footer className="py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-2xl">
        <div className="flex items-center">
          <a className="ml-4" href="/">
            <svg
              width="132"
              height="32"
              viewBox="0 0 132 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.528 16.336C32.528 15.296 32.72 14.28 33.104 13.288C33.504 12.28 34.08 11.368 34.832 10.552C35.584 9.736 36.496 9.088 37.568 8.608C38.656 8.112 39.88 7.864 41.24 7.864C42.872 7.864 44.296 8.208 45.512 8.896C46.728 9.568 47.632 10.464 48.224 11.584L44.648 14.128C44.44 13.568 44.136 13.136 43.736 12.832C43.352 12.528 42.928 12.32 42.464 12.208C42.016 12.08 41.576 12.016 41.144 12.016C40.248 12.016 39.512 12.24 38.936 12.688C38.376 13.136 37.96 13.704 37.688 14.392C37.416 15.064 37.28 15.76 37.28 16.48C37.28 17.264 37.432 18 37.736 18.688C38.056 19.376 38.504 19.936 39.08 20.368C39.672 20.784 40.376 20.992 41.192 20.992C41.624 20.992 42.064 20.928 42.512 20.8C42.96 20.656 43.368 20.432 43.736 20.128C44.104 19.824 44.384 19.416 44.576 18.904L48.392 21.184C48.056 22.016 47.496 22.728 46.712 23.32C45.928 23.912 45.04 24.368 44.048 24.688C43.056 24.992 42.072 25.144 41.096 25.144C39.832 25.144 38.672 24.896 37.616 24.4C36.576 23.888 35.672 23.216 34.904 22.384C34.152 21.536 33.568 20.592 33.152 19.552C32.736 18.496 32.528 17.424 32.528 16.336ZM62.4418 25H57.8818V17.896C57.8818 17.272 57.7378 16.824 57.4498 16.552C57.1778 16.264 56.8338 16.12 56.4178 16.12C56.1138 16.12 55.7378 16.28 55.2898 16.6C54.8578 16.92 54.5298 17.36 54.3058 17.92V25H49.7458V7.48H54.3058V14.248C54.7538 13.56 55.3378 13.04 56.0578 12.688C56.7938 12.32 57.6018 12.136 58.4818 12.136C59.3778 12.136 60.0898 12.288 60.6178 12.592C61.1458 12.88 61.5378 13.256 61.7938 13.72C62.0498 14.184 62.2178 14.68 62.2978 15.208C62.3938 15.736 62.4418 16.232 62.4418 16.696V25ZM64.652 11.32V7.48H69.212V11.32H64.652ZM64.652 25V12.376H69.212V25H64.652ZM71.4232 7.48H75.9832V19.984C75.9832 20.944 76.3752 21.424 77.1592 21.424C77.5592 21.424 77.9752 21.304 78.4072 21.064L78.9832 24.424C78.4392 24.68 77.8232 24.88 77.1352 25.024C76.4632 25.168 75.8232 25.24 75.2152 25.24C73.9992 25.24 73.0632 24.928 72.4072 24.304C71.7512 23.664 71.4232 22.76 71.4232 21.592V7.48ZM79.9544 7.48H84.5144V19.984C84.5144 20.944 84.9064 21.424 85.6904 21.424C86.0904 21.424 86.5064 21.304 86.9384 21.064L87.5144 24.424C86.9704 24.68 86.3544 24.88 85.6664 25.024C84.9944 25.168 84.3544 25.24 83.7464 25.24C82.5304 25.24 81.5944 24.928 80.9384 24.304C80.2824 23.664 79.9544 22.76 79.9544 21.592V7.48ZM95.9878 25.144C94.6918 25.144 93.5158 24.904 92.4598 24.424C91.4038 23.928 90.4918 23.272 89.7238 22.456C88.9718 21.624 88.3878 20.696 87.9718 19.672C87.5718 18.632 87.3718 17.56 87.3718 16.456C87.3718 15.32 87.5878 14.24 88.0198 13.216C88.4518 12.192 89.0518 11.28 89.8198 10.48C90.6038 9.664 91.5238 9.024 92.5798 8.56C93.6518 8.096 94.8198 7.864 96.0838 7.864C97.3798 7.864 98.5558 8.112 99.6118 8.608C100.668 9.088 101.572 9.744 102.324 10.576C103.076 11.408 103.652 12.344 104.052 13.384C104.468 14.408 104.676 15.464 104.676 16.552C104.676 17.672 104.46 18.744 104.028 19.768C103.612 20.792 103.012 21.712 102.228 22.528C101.46 23.328 100.548 23.968 99.4918 24.448C98.4358 24.912 97.2678 25.144 95.9878 25.144ZM92.1238 16.504C92.1238 17.256 92.2598 17.976 92.5318 18.664C92.8198 19.352 93.2518 19.912 93.8278 20.344C94.4198 20.776 95.1558 20.992 96.0358 20.992C96.9478 20.992 97.6838 20.768 98.2438 20.32C98.8198 19.872 99.2438 19.304 99.5157 18.616C99.7878 17.912 99.9238 17.192 99.9238 16.456C99.9238 15.688 99.7798 14.968 99.4918 14.296C99.2038 13.624 98.7718 13.08 98.1958 12.664C97.6198 12.232 96.8918 12.016 96.0118 12.016C95.1158 12.016 94.3798 12.24 93.8038 12.688C93.2278 13.12 92.8038 13.68 92.5318 14.368C92.2598 15.04 92.1238 15.752 92.1238 16.504ZM106.227 20.68V12.376H110.787V19.648C110.787 20.192 110.907 20.624 111.147 20.944C111.403 21.248 111.747 21.4 112.179 21.4C112.531 21.4 112.891 21.32 113.259 21.16C113.627 21 113.995 20.648 114.363 20.104V12.376H118.923V19.96C118.923 20.392 118.987 20.696 119.115 20.872C119.243 21.032 119.467 21.128 119.787 21.16V25C119.003 25.16 118.363 25.24 117.867 25.24C116.315 25.24 115.419 24.656 115.179 23.488L115.083 23.032C114.491 23.816 113.779 24.384 112.947 24.736C112.131 25.072 111.203 25.24 110.163 25.24C108.899 25.24 107.923 24.848 107.235 24.064C106.563 23.28 106.227 22.152 106.227 20.68ZM130.414 24.304C129.774 24.576 129.086 24.808 128.35 25C127.63 25.176 126.918 25.264 126.214 25.264C125.526 25.264 124.894 25.152 124.318 24.928C123.742 24.688 123.278 24.304 122.926 23.776C122.59 23.232 122.422 22.504 122.422 21.592V15.808H120.862V12.376H122.422V8.416H126.982V12.376H129.454V15.808H126.982V19.984C126.982 20.4 127.07 20.696 127.246 20.872C127.422 21.032 127.662 21.112 127.966 21.112C128.19 21.112 128.446 21.072 128.734 20.992C129.022 20.912 129.31 20.816 129.598 20.704L130.414 24.304Z"
                fill="#3B82F6"
              />
              <path
                d="M16 2V30"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.6076 5C18.5188 5.65621 17.2713 6.00203 16.0001 6C14.7289 6.00203 13.4813 5.65621 12.3926 5"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.3926 27C13.4821 26.3456 14.7291 26 16.0001 26C17.271 26 18.518 26.3456 19.6076 27"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.1247 9L3.87598 23"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.3296 13.625C26.218 13.0085 25.295 12.1011 24.6596 11.0001C24.0242 9.89912 23.7004 8.64599 23.7228 7.375"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.6709 18.375C5.78258 18.9915 6.70556 19.8989 7.34094 20.9999C7.97633 22.1009 8.30017 23.354 8.27777 24.625"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.87598 9L28.1247 23"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.6709 13.625C5.78258 13.0085 6.70556 12.1011 7.34094 11.0001C7.97633 9.89912 8.30017 8.64599 8.27777 7.375"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.3296 18.375C26.218 18.9915 25.295 19.8989 24.6596 20.9999C24.0242 22.1009 23.7004 23.354 23.7228 24.625"
                stroke="#3B82F6"
                strokeWidth
                strokeLinejoin="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <ul className="flex flex-col lg:flex-row items-center text-sm font-semibold text-gray-500 py-12 lg:py-0">
          <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <a href="/products">AIR CONDITIONERS</a>
          </li>

          <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <a href="/checkout">PLACE AN ORDER</a>
          </li>

          <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <a href="/blog">BLOG</a>
          </li>

          <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <a href="/about">ABOUT</a>
          </li>

          <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
        <div className="flex text-blue-500">
          <a className="hover:text-blue-700" href="/">
            <svg
              className="mx-4 fill-current"
              width="21"
              height="17"
              viewBox="0 0 21 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path d="M20.92 2C20.15 2.35 19.32 2.58 18.46 2.69C19.34 2.16 20.02 1.32 20.34 0.31C19.51 0.81 18.59 1.16 17.62 1.36C16.83 0.5 15.72 0 14.46 0C12.11 0 10.19 1.92 10.19 4.29C10.19 4.63 10.23 4.96 10.3 5.27C6.74 5.09 3.57 3.38 1.46 0.79C1.09 1.42 0.88 2.16 0.88 2.94C0.88 4.43 1.63 5.75 2.79 6.5C2.08 6.5 1.42 6.3 0.84 6V6.03C0.84 8.11 2.32 9.85 4.28 10.24C3.65073 10.4122 2.9901 10.4362 2.35 10.31C2.62161 11.1625 3.15354 11.9084 3.87102 12.4429C4.5885 12.9775 5.45545 13.2737 6.35 13.29C4.83363 14.4904 2.954 15.1393 1.02 15.13C0.68 15.13 0.34 15.11 0 15.07C1.9 16.29 4.16 17 6.58 17C14.46 17 18.79 10.46 18.79 4.79C18.79 4.6 18.79 4.42 18.78 4.23C19.62 3.63 20.34 2.87 20.92 2Z" />
            </svg>
          </a>

          <a className="hover:text-blue-700" href="/">
            <svg
              className="mx-4 fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path d="M10 0C4.5 0 0 4.49 0 10.02C0 15.02 3.66 19.17 8.44 19.92V12.92H5.9V10.02H8.44V7.81C8.44 5.3 9.93 3.92 12.22 3.92C13.31 3.92 14.45 4.11 14.45 4.11V6.58H13.19C11.95 6.58 11.56 7.35 11.56 8.14V10.02H14.34L13.89 12.92H11.56V19.92C13.9164 19.5478 16.0622 18.3455 17.6099 16.5301C19.1576 14.7146 20.0054 12.4056 20 10.02C20 4.49 15.5 0 10 0Z" />
            </svg>
          </a>

          <a className="hover:text-blue-700" href="/">
            <svg
              className="mx-4 fill-current"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center mt-24 text-xs text-gray-400">
        <div className="mb-4">
          <a className="mx-4 hover:text-gray-600" href="/faqs" rel="nofollow">
            FAQs
          </a>
          <a
            className="mx-4 hover:text-gray-600"
            href="/terms-and-conditions"
            rel="nofollow"
          >
            Terms &amp; Conditions
          </a>
        </div>
        <span>&copy; ChillOut 2021</span>
      </div>
    </footer>
  );
};

export default ChilloutFooter;
