import React from "react"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import { space3 } from "../../assets/images"
import Countdown, { calcTimeDelta } from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed}) => {
  return (
      <div className="text-gray-500 flex flex-col items-center lg:items-start">
        <div className="py-8 md:py-12 grid grid-flow-col gap-5 place-items-end auto-cols-max">
        <span className="text-2xl">Launch in:</span>
          <div>
            <span className="text-2xl pr-1">
              <span>{days}</span>
            </span>
            days
          </div>
          <div>
            <span className="text-2xl px-1">
              <span>{hours}</span>
            </span>
            hours
          </div>
          <div>
            <span className="text-2xl px-1">
              <span> { minutes }</span>
            </span>
            min
          </div>
          <div>
            <span className="text-2xl px-1">
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
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  We're sending a satellite to
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">space</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-10 md:text-2xl lg:mx-0">
                A small group of Brown University students working to launch a
                3U CubeSat in record time - from design to deployment. With the
                help of D-Orbit and CNR.
              </p>
              <Countdown date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total} renderer={renderer}/>
              <div className="sm:flex sm:justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="btn btn-md btn-ghost text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
                >
                  Learn More
                </Link>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/news"
                    className="btn btn-md btn-ghost text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:text-lg"
                  >
                    News
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={space3}
          alt=""
        />
      </div>
    </div>
    <Footer showNext={false} prevItem={"./"} nextItem={"./"} />
  </>
)

export default Home
