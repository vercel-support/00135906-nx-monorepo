import React from 'react';
import Link from 'next/link';

import { Flex } from '@with-nx/react-ui';

const CoffeeShopFooter = () => {
  return (
    <footer className="py-16  bg-yellow-100">
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-screen-xl">
        <Flex className="items-center">
          <Link className="ml-4" href="/">
            <svg
              width="82"
              height="27"
              viewBox="0 0 82 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33333 26.6667H18.6667C18.9875 26.6667 19.2976 26.5511 19.5401 26.3409C19.7825 26.1308 19.9411 25.8403 19.9867 25.5227L22.4893 8H24V5.33333H22.1573L19.8587 0.737334C19.7483 0.515698 19.5782 0.329264 19.3676 0.199005C19.157 0.0687447 18.9143 -0.000174134 18.6667 3.30415e-07H5.33333C4.828 3.30415e-07 4.36667 0.285334 4.14 0.737334L1.84267 5.33333H0V8H1.51067L4.01333 25.5227C4.05889 25.8403 4.21745 26.1308 4.45991 26.3409C4.70238 26.5511 5.01248 26.6667 5.33333 26.6667V26.6667ZM19.224 12H4.776L4.204 8H19.7947L19.224 12ZM6.48933 24L5.91733 20H18.0813L17.5093 24H6.48933V24ZM6.15733 2.66667H17.8427L19.176 5.33333H4.824L6.15733 2.66667Z"
                fill="#374151"
              />
              <path
                d="M33.008 14.36C33.008 12.552 33.36 10.984 34.064 9.656C34.784 8.312 35.848 7.272 37.256 6.536C38.68 5.8 40.448 5.432 42.56 5.432C43.376 5.432 44.112 5.496 44.768 5.624C45.424 5.752 45.944 5.896 46.328 6.056V9.728H46.064C45.68 9.52 45.208 9.352 44.648 9.224C44.088 9.096 43.48 9.032 42.824 9.032C41.56 9.032 40.52 9.248 39.704 9.68C38.904 10.112 38.312 10.728 37.928 11.528C37.544 12.328 37.352 13.272 37.352 14.36C37.352 15.448 37.544 16.392 37.928 17.192C38.312 17.992 38.904 18.608 39.704 19.04C40.52 19.472 41.56 19.688 42.824 19.688C43.48 19.688 44.088 19.624 44.648 19.496C45.208 19.368 45.68 19.2 46.064 18.992H46.328V22.664C45.944 22.824 45.424 22.968 44.768 23.096C44.112 23.224 43.376 23.288 42.56 23.288C40.448 23.288 38.68 22.928 37.256 22.208C35.848 21.488 34.784 20.464 34.064 19.136C33.36 17.792 33.008 16.2 33.008 14.36ZM49.0471 18.584H49.2871C49.6871 18.792 50.1671 18.992 50.7271 19.184C51.2871 19.376 51.8951 19.536 52.5511 19.664C53.2231 19.776 53.8951 19.832 54.5671 19.832C55.2711 19.832 55.8551 19.784 56.3191 19.688C56.7991 19.592 57.1591 19.44 57.3991 19.232C57.6551 19.008 57.7831 18.712 57.7831 18.344C57.7831 17.88 57.6231 17.536 57.3031 17.312C56.9991 17.088 56.4471 16.912 55.6471 16.784L54.0631 16.544C52.8791 16.368 51.8711 16.064 51.0391 15.632C50.2231 15.2 49.6071 14.632 49.1911 13.928C48.7751 13.208 48.5671 12.344 48.5671 11.336C48.5671 10.104 48.8551 9.048 49.4311 8.168C50.0231 7.288 50.9191 6.616 52.1191 6.152C53.3191 5.672 54.8551 5.432 56.7271 5.432C57.5591 5.432 58.3591 5.504 59.1271 5.648C59.8951 5.776 60.5351 5.952 61.0471 6.176V9.8H60.7831C60.3031 9.576 59.6871 9.368 58.9351 9.176C58.1831 8.984 57.3431 8.888 56.4151 8.888C55.6151 8.888 54.9351 8.968 54.3751 9.128C53.8311 9.288 53.4151 9.536 53.1271 9.872C52.8391 10.192 52.6951 10.6 52.6951 11.096C52.6951 11.736 52.9031 12.192 53.3191 12.464C53.7351 12.736 54.4071 12.952 55.3351 13.112L56.8471 13.352C57.7911 13.496 58.6471 13.752 59.4151 14.12C60.1991 14.488 60.8151 15 61.2631 15.656C61.7271 16.312 61.9591 17.176 61.9591 18.248C61.9591 19.16 61.7671 19.944 61.3831 20.6C60.9991 21.24 60.4631 21.76 59.7751 22.16C59.1031 22.544 58.3191 22.824 57.4231 23C56.5431 23.192 55.5911 23.288 54.5671 23.288C53.8471 23.288 53.1351 23.24 52.4311 23.144C51.7431 23.064 51.1031 22.952 50.5111 22.808C49.9191 22.664 49.4311 22.512 49.0471 22.352V18.584ZM64.2815 18.584H64.5215C64.9215 18.792 65.4015 18.992 65.9615 19.184C66.5215 19.376 67.1295 19.536 67.7855 19.664C68.4575 19.776 69.1295 19.832 69.8015 19.832C70.5055 19.832 71.0895 19.784 71.5535 19.688C72.0335 19.592 72.3935 19.44 72.6335 19.232C72.8895 19.008 73.0175 18.712 73.0175 18.344C73.0175 17.88 72.8575 17.536 72.5375 17.312C72.2335 17.088 71.6815 16.912 70.8815 16.784L69.2975 16.544C68.1135 16.368 67.1055 16.064 66.2735 15.632C65.4575 15.2 64.8415 14.632 64.4255 13.928C64.0095 13.208 63.8015 12.344 63.8015 11.336C63.8015 10.104 64.0895 9.048 64.6655 8.168C65.2575 7.288 66.1535 6.616 67.3535 6.152C68.5535 5.672 70.0895 5.432 71.9615 5.432C72.7935 5.432 73.5935 5.504 74.3615 5.648C75.1295 5.776 75.7695 5.952 76.2815 6.176V9.8H76.0175C75.5375 9.576 74.9215 9.368 74.1695 9.176C73.4175 8.984 72.5775 8.888 71.6495 8.888C70.8495 8.888 70.1695 8.968 69.6095 9.128C69.0655 9.288 68.6495 9.536 68.3615 9.872C68.0735 10.192 67.9295 10.6 67.9295 11.096C67.9295 11.736 68.1375 12.192 68.5535 12.464C68.9695 12.736 69.6415 12.952 70.5695 13.112L72.0815 13.352C73.0255 13.496 73.8815 13.752 74.6495 14.12C75.4335 14.488 76.0495 15 76.4975 15.656C76.9615 16.312 77.1935 17.176 77.1935 18.248C77.1935 19.16 77.0015 19.944 76.6175 20.6C76.2335 21.24 75.6975 21.76 75.0095 22.16C74.3375 22.544 73.5535 22.824 72.6575 23C71.7775 23.192 70.8255 23.288 69.8015 23.288C69.0815 23.288 68.3695 23.24 67.6655 23.144C66.9775 23.064 66.3375 22.952 65.7455 22.808C65.1535 22.664 64.6655 22.512 64.2815 22.352V18.584Z"
                fill="#374151"
              />
            </svg>
          </Link>
        </Flex>
        <ul className="flex flex-col lg:flex-row items-center text-sm font-semibold text-gray-500 py-12 lg:py-0">
          <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <Link href="/growth-tips">GROWTH TIPS</Link>
          </li>

          <li className="mx-7 hover:text-gray-700 mb-2 lg:mb-0">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className="flex text-gray-500">
          <a className="hover:text-gray-700" href="/">
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
          <a className="hover:text-gray-700" href="/">
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
          <a className="hover:text-gray-700" href="/">
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
        <span>&copy; Coffee Shop Specialist 2021</span>
      </div>
    </footer>
  );
};

export default CoffeeShopFooter;
