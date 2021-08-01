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
import { Link } from "react-router-dom"

const Docs = () => (
  <div>
    {/* <div className="container flex flex-col items-center justify-center max-w-2xl py-6 mx-auto leading-7 text-left"> */}
    {/* <h1 className="py-12 text-4xl font-semibold"> Documentation</h1> */}
    <section class="text-gray-600 body-font">
      <div class="container px-5 pb-2 pt-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our goal: build and launch a stabilized, camera-carrying cubesat
              in months{" "}
            </h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            SBUDNIC is a group of Brown University students developing a cube
            satellite for launch using only terrestrial parts like Arduino Uno.
            We plan to make all of our designs open-source. SBUDNIC emerged from
            Professor Rick Fleeter’s “Design of Space Systems” class, ENGN1760.
          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={about0}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Why?
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Why not? We aspire to be one of the fastest sketch-to-launch
              developments of a 3U cubesat. Period. SBUDNIC’s total budget is
              approximately $10,000 USD; we are working to meet our aggressive
              timeline by utilizing as many terrestrial components as possible.
            </p>
            <Link to="/news">
              <div
                href="/"
                class="text-indigo-500 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={about5}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              When?
            </h2>
            <p class="text-base leading-relaxed mt-2">
              SBUDNIC will be deployed at 500km in an inclination yet to be
              determined aboard a Falcon 9 as a secondary payload on a scheduled
              Starlink deployment mission.
            </p>
            <Link to="/news">
              <div class="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={about6}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Who?
            </h2>
            <p class="text-base leading-relaxed mt-2">
              We are a team of Brown University undergraduate and graduate
              students supported by several dedicated and generous European
              professional partners. About half of us are studying some form of
              engineering. The other half of us come from fields like economics,
              international relations, and sculpture. This is a massive
              interdisciplinary effort.
            </p>
            <Link to="/team">
              <div class="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Docs
