import React from "react"
import {
  about0,
  // about1,
  // about2,
  // about3,
  // about4,
  about5,
  about6,
} from "../content/images"

const Docs = () => (
  <div>
    {/* <div className="container flex flex-col items-center justify-center max-w-2xl py-6 mx-auto leading-7 text-left"> */}
    {/* <h1 className="py-12 text-4xl font-semibold"> Documentation</h1> */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 pb-2 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Our goal: build and launch a stabilized, camera-carrying cubesat
              in months{" "}
            </h1>
            <div className="w-20 h-1 bg-red-600 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            SBUDNIC is a <span className="text-primary">S</span>putnik-like 3U
            CubeSat by <span className="text-primary">B</span>rown{" "}
            <span className="text-primary">U</span>niversity and{" "}
            <span className="text-primary">C</span>NR, with the support of{" "}
            <span className="text-primary">D</span>-Orbit, AMSAT-Italy, La
            Sapienza-University of Rome and NASA Rhode Island Space Grant. Our
            goal is to build and launch a cube satellite using only terrestrial
            parts like Arduino Uno. We plan to make all of our designs
            open-source. SBUDNIC emerged from Professor Rick Fleeter’s “Design
            of Space Systems” class, ENGN1760.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="object-cover object-center w-full h-full"
                src={about0}
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              Why?
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Why not? We aspire to be one of the fastest sketch-to-launch
              developments of a 3U cubesat. Period. SBUDNIC’s total budget is
              approximately $10,000 USD; we are working to meet our aggressive
              timeline by utilizing as many terrestrial components as possible.
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="object-cover object-center w-full h-full"
                src={about5}
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              When?
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              SBUDNIC will be deployed at 500km aboard a Falcon 9 as a secondary
              payload on a scheduled{" "}
              <a
                href="https://nextspaceflight.com/launches/details/6804"
                className="text-blue-500 hover:text-blue-400"
                target="_blank"
                rel="noreferrer"
              >
                Starlink deployment mission on May 25th, 2022.
              </a>
            </p>
          </div>
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="object-cover object-center w-full h-full"
                src={about6}
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              Who?
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              We are a team of Brown University undergraduate and graduate
              students supported by several dedicated and generous European
              professional partners. About half of us are studying some form of
              engineering. The other half of us come from fields like economics,
              international relations, and sculpture. This is a massive
              interdisciplinary effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Docs
