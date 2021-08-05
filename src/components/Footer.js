import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  // faLinkedinIn,
  // faTwitter,
  // faInstagramSquare,
  // faSkyatlas,
} from "@fortawesome/free-brands-svg-icons"
// import { sbudnicN } from "./content/images"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-2">
        <div className="flex flex-row items-start p-6">
          <a
            href="https://www.linkedin.com/company/sbudnic/"
            target="_blank"
            rel="noreferrer"
            className="px-3 transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a
            href="https://twitter.com/SbudnicS"
            target="_blank"
            rel="noreferrer"
            className="px-3 transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://instagram.com/sbudnics"
            target="_blank"
            rel="noreferrer"
            className="px-3 transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
          </a>
        </div>
        <div className="flex flex-col items-end p-6 text-sm font-semibold md:text-xl">
          © {new Date().getFullYear()}
        </div>
      </div> */}

      <footer className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
          <Link
          to="/"
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
          >
           {/* <img
              className="object-cover object-center h-10 rounded"
              alt="hero"
              src={sbudnicN}
            /> */}
            {/* <FontAwesomeIcon icon={faSkyatlas} size="lg" /> */}
            {/* <img
            className="w-1/12"
            src={space3}
            alt=""
          /> */}

            <span className="ml-3 text-xl">SBUDNIC</span>
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0">
            © {new Date().getFullYear()} —
            <a
              href="https://twitter.com/SbudnicS"
              className="ml-1 text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              @SbudnicS
            </a>
            {/* <a
              href="https://twitter.com/SbudnicS"
              className="ml-1 text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
            >
            sbudnicsatellite@gmail.com
            </a> */}
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            {/* <a className="text-black transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a> */}
            <a
              href="https://twitter.com/SbudnicS"
              className="ml-3 text-black transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
              rel="noreferrer"
              target="_blank"
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
            </a>
            <a
              href="https://instagram.com/sbudnics"
              className="ml-3 text-black transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/sbudnic/"
              className="ml-3 text-black transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
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
            </a>
            <a
              href="https://github.com/benkilimnik/SBUDNIC"
              className="ml-3 text-black transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
