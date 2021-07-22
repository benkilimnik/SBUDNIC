import React from "react"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import { space3 } from "../content/images"
import Countdown, { calcTimeDelta } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed}) => {
  return (
      <div className="flex flex-col items-center text-gray-500 lg:items-start">
        <div className="grid grid-flow-col gap-5 py-8 md:py-12 place-items-end auto-cols-max">
        <span className="text-xl md:text-3xl">Launch in:</span>
          <div className="md:text-xl">
            <span className="pr-1 text-xl md:text-3xl">
              <span>{days}</span>
            </span>
            days
          </div>
          <div className="md:text-xl">
            <span className="px-1 text-xl md:text-3xl">
              <span>{hours}</span>
            </span>
            hours
          </div>
          <div className="md:text-xl">
            <span className="px-1 text-xl md:text-3xl">
              <span> { minutes }</span>
            </span>
            min
          </div>
          <div className="md:text-xl">
            <span className="px-1 text-xl md:text-3xl">
              <span>{seconds }</span>
            </span>
            sec
          </div>
        </div>
    </div>
  )
}

const Home = () => (
  <>
    <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
      {/* <div className="relative h-screen overflow-hidden">
        <div className="mx-auto max-w-7xl"> */}
          {/* <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"> */}
            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-7xl">
                  <span className="block xl:inline">
                    We're sending a satellite to
                  </span>{" "}
                  <span className="block text-indigo-600 xl:inline">space</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-10 md:text-3xl lg:mx-0">
                  A small group of Brown University students working to launch a
                  3U CubeSat in record time - from design to deployment. With the
                  help of D-Orbit and CNR.
                </p>
                <Countdown date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total} renderer={renderer}/>
                <div className="sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/about"
                    // className="text-base font-medium text-white bg-indigo-600 rounded-md btn btn-md btn-ghost hover:bg-indigo-700 md:text-lg"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-2xl md:px-10"
                  >
                    Learn More
                  </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/news"
                      // className="text-base font-medium text-indigo-700 bg-indigo-100 btn btn-md btn-ghost hover:bg-indigo-200 md:text-lg"
                      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-2xl md:px-10"
                    >
                      News
                    </Link>
                  </div>
                </div>
              </div>
            </main>
        {/* </div> */}
        {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> */}
          <img
            // className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={space3}
            alt=""
          />
          </div>
        {/* </div>
      </div> */}
    {/* </div> */}
    <Footer showNext={false} prevItem={"./"} nextItem={"./"} />
  </>
)

export default Home
