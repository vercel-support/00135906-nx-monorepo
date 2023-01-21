import { Button } from '@with-nx/react-ui';
import Link from 'next/link';
import Image from 'next/image';
import RSH_logo from '../public/images/rsh_logo_Crop.jpg';

import { useModal } from '@with-nx/react-hooks';
import RSHModal from './RSHModal';

const PageLayout = ({ children }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <header className="bg-white">
        <div className="w-full mx-auto py-0 md:py-4 lg:px-0 text-lg md:text-2xl lg:max-w-4xl ">
          <div className="flex justify-between text-white p-4 lg:px-0 text-2xl max-w-4xl">
            <Link
              href="/"
              className="flex items-center justify-center"
              passHref
            >
              <div>
                <Image
                  src={RSH_logo}
                  width={48}
                  height={40}
                  priority
                  className=""
                  alt="Robert Hogan's Logo"
                />
              </div>
            </Link>
            <nav className="flex justify-center">
              <Button onClick={toggle} label="Say Hello" type="submit" />
            </nav>
          </div>
        </div>
      </header>
      {children}
      <footer className="max-w-4xl mx-auto text-center py-8">
        <Image
          src="https://rshogan.imgix.net/personal/logos/rsh_logo_with_text_nobg.png"
          loading="lazy"
          height={100}
          width={198}
          className="mx-auto -mt-12 mb-24"
          alt="RobertsHogan Logo"
        />
        <div className="flex flex-col justify-between mt-16">
          <span>Handcrafted by Robert.</span>
          <span className="flex  sm:mt-0 pt-4 justify-center  space-x-4">
            <Link
              href="mailto:robert@robertshogan.com"
              className=" hover:text-vivid-500"
              aria-label="Mail Icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/robertshogancom"
              className=" hover:text-vivid-500"
              aria-label="Facebook Icon"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>

            <Link
              href="https://twitter.com/robert_s_hogan"
              className="hover:text-vivid-500"
              aria-label="Twitter Icon"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/in/robert-s-hogan/"
              className="hover:text-vivid-500"
              aria-label="Linked Icon"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
            <Link
              href="https://github.com/robert-s-hogan"
              className=" hover:text-vivid-500"
              aria-label="Github Icon"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 640 640"
              >
                <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.upwork.com/freelancers/robertshogan"
              className=" hover:text-vivid-500"
              aria-label="Upwork Icon"
            >
              <svg
                enableBackground="new 0 0 2500 2500"
                className="h-6 w-6"
                viewBox="0 0 2500 2500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2315.4 0h-2130.7c-102 0-184.7 80.2-184.7 179.1v2141.7c0 99 82.7 179.2 184.7 179.2h2130.7c102 0 184.6-80.3 184.6-179.2v-2141.7c0-98.9-82.6-179.1-184.6-179.1z"
                  fill="#6fda44"
                />
                <path
                  d="m1834.6 1453.7c-98.4 0-190.5-41.7-274.3-109.6l20.4-95.8.9-3.5c18.2-102 75.8-273.3 253-273.3 132.9 0 241 108.3 241 241.3-.4 132.6-108.5 240.9-241 240.9zm0-726.7c-226.4 0-401.9 147.3-473.2 389.5-109-163.7-191.4-360.2-239.7-525.7h-243.6v634.8c0 125.1-101.9 227.1-226.9 227.1s-226.8-102-226.8-227.1v-634.8h-243.7v634.8c-.9 260 210.5 473.4 470.1 473.4s471-213.4 471-473.4v-106.5c47.4 98.9 105.4 198.7 175.9 287.5l-149.3 702.7h249.5l108.1-509.7c94.8 60.8 203.8 98.9 328.8 98.9 267.2 0 484.7-219.2 484.7-486.7-.2-267-217.7-484.8-484.9-484.8z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </span>
        </div>
      </footer>
      <RSHModal
        isShowing={isShowing}
        toggle={toggle}
        title="Thanks for taking the time to reach out!"
      >
        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 ">
          Fill in the form to start a conversation
        </p>

        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            Sonoma County, CA
          </div>
        </div>

        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className="ml-4 text-md tracking-wide font-semibold w-40">
            <Link className="text" href="mailto:robert@robertshogan.com">
              Email me
            </Link>
          </div>
        </div>

        <form
          className="p-6 flex flex-col justify-center"
          action="https://submit-form.com/Mj5aEdSo"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="message" className="hidden">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="What would you like to start building?"
              className="w-100 mt-2 py-3 px-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button type="submit" className="md:w-32 mt-3">
            Submit
          </button>
        </form>
      </RSHModal>
    </>
  );
};

export default PageLayout;
