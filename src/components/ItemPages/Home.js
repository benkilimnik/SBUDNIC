import React from "react"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import {
  // space3,
  // eureka1,
  sbudnicN,
  // sbudnic2,
  // sbudnic3,
  // sbudnic4,
  // sbudnic5,
  // sbudnic6,
  // sbudnic7,
  // rotearth,
  // sbudnic8,
  // sbudnic9,
  // sbudnic10,
} from "../content/images"
import Countdown, { calcTimeDelta } from "react-countdown"

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div className="flex flex-col items-center text-primary lg:items-start">
      <div className="grid grid-flow-col gap-5 pb-8 place-items-end auto-cols-max">
        <span className="text-xl md:text-2xl ">Launch in:</span>
        <div className="md:text-md">
          <span className="pr-1 text-xl md:text-2xl">
            <span>{days}</span>
          </span>
          days
        </div>
        <div className="md:text-md">
          <span className="px-1 text-xl md:text-2xl">
            <span>{hours}</span>
          </span>
          hours
        </div>
        <div className="md:text-md">
          <span className="px-1 text-xl md:text-2xl">
            <span> {minutes}</span>
          </span>
          min
        </div>
        <div className="md:text-md">
          <span className="px-1 text-xl md:text-2xl">
            <span>{seconds}</span>
          </span>
          sec
        </div>
      </div>
    </div>
  )
}

const Home = () => (
  <>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-6/12 xl:pr-72 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="lg:pb-8 title-font font-bold lg:text-5xl md:leading-tight lg:leading-snug sm:text-4xl text-3xl mb-4 text-gray-900">
          We're building a Sputnik-like CubeSat on a budget in record time
          </h1>

          <div className="hidden 2xl:grid 2xl:items-center 2xl:grid-cols-4 2xl:pb-12 2xl:align-center">
            <div class="pr-12">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                1 Year
              </h2>
              <p class="leading-relaxed">Timeframe</p>
            </div>
            <div class="pr-12">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                $10K
              </h2>
              <p class="leading-relaxed">Budget</p>
            </div>
            <div class="pr-12">
              <h2 class="title-font font-medium text-3xl text-gray-900">20+</h2>
              <p class="leading-relaxed">Students</p>
            </div>
            <div class="">
              <h2 class="title-font font-medium text-3xl text-gray-900">1</h2>
              <p class="leading-relaxed">3U CubeSat</p>
            </div>
          </div>

          <p class="mb-6 lg:text-xl lg:leading-relaxed">
            A small group of Brown University students testing the limits of how
            quickly and efficiently a 3U CubeSat can be developed. Supported by
            D-Orbit and the National Research Council of Italy (CNR).
          </p>
          <div className="invisible py-4 text-gray-900 lg:visible">
            <Countdown
              date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total}
              renderer={renderer}
            />
          </div>
          <div class="flex justify-center">
            <Link
              to="/about"
              class="transition duration-500 ease-out transform inline-flex text-white bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-indigo-800 rounded text-xl hover:scale-110 active:scale-110 focus:scale-110"
              // className="px-3 pt-4 mb-1 mr-1 text-xs font-bold text-indigo-500 uppercase transition duration-500 ease-out transform border-t-2 outline-none hover:scale-110 hover:opacity-100 background-transparent active:scale-110 focus:scale-110 hover:text-indigo-600"
            >
              About
            </Link>
            <Link
              to="/news"
              class="ml-4 inline-flex text-white bg-secondary border-0 py-3 px-6 focus:outline-none hover:bg-red-500 rounded text-lg duration-500 ease-out transform  hover:scale-110 active:scale-110 focus:scale-110"
            >
              News
            </Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={sbudnicN}
          />
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default Home
