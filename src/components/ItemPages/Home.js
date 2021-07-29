import React from "react"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import { space3, sbudnic } from "../content/images"
import Countdown, { calcTimeDelta } from "react-countdown"

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="grid grid-flow-col gap-5 pb-8 place-items-end auto-cols-max">
        <span className="text-xl md:text-2xl">Launch in:</span>
        <div className="md:text-xl">
          <span className="pr-1 text-xl md:text-2xl">
            <span>{days}</span>
          </span>
          days
        </div>
        <div className="md:text-xl">
          <span className="px-1 text-xl md:text-2xl">
            <span>{hours}</span>
          </span>
          hours
        </div>
        <div className="md:text-xl">
          <span className="px-1 text-xl md:text-2xl">
            <span> {minutes}</span>
          </span>
          min
        </div>
        <div className="md:text-xl">
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
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Testing the limits of how quickly and efficiently a 6kg CubeSat can
            be developed
          </h1>
          <p class="mb-8 leading-relaxed">
            SBUDNIC is a group of Brown students developing a cube satellite for
            launch using only terrestrial parts like Arduino Uno. We plan to
            make all of our designs open-source. SBUDNIC emerged from Rick
            Fleeter’s “Design of Space Systems” class, ENGN1760.
          </p>

          <div class="flex justify-center">
            <Link
              to="/about"
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Learn More
            </Link>
            <Link
              to="/news"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              News
            </Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={space3}
          />
          <div className="flex justify-center pt-8">
            <Countdown
              date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
    </section>

    {/* <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
        <img
          class="lg:w-3/12 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          // src="https://dummyimage.com/720x600"
          // src={space3}
          src={sbudnic}
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="py-2 title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Testing the limits of how quickly and efficiently a 6kg CubeSat can
            be developed
          </h1>
          <p class="mb-8 text-lg leading-relaxed">
            SBUDNIC is a group of Brown students developing a cube satellite for
            launch using only terrestrial parts like Arduino Uno. We plan to
            make all of our designs open-source. SBUDNIC emerged from Rick
            Fleeter’s “Design of Space Systems” class, ENGN1760.
          </p>
          <div className="flex justify-center">
            <Countdown
              date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total}
              renderer={renderer}
            />
          </div>
          <div class="flex justify-center">
            <Link
              to="/about"
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Learn More
            </Link>
            <Link
              to="/news"
              class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              News
            </Link>
          </div>
        </div>
      </div>
    </section> */}

    {/* <div className="grid grid-cols-1 p-14 lg:grid-cols-2">
      <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-7xl">
            <span className="block xl:inline">
              Testing the limits of how quickly and efficiently a 6kg CubeSat
              can be developed
            </span>{" "}
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-10 md:text-3xl lg:mx-0">
            A small group of Brown University students working to launch a 3U
            CubeSat in record time - from design to deployment. With the help of
            D-Orbit and CNR.
          </p>
          <Countdown
            date={Date.now() + calcTimeDelta("2021-11-01T00:00:00").total}
            renderer={renderer}
          />
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/about"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-2xl md:px-10"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/news"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-2xl md:px-10"
              >
                News
              </Link>
            </div>
          </div>
        </div>
      </main>
      <img
        className="xl:w-11/12"
        src={space3}
        alt=""
      />
    </div> */}
    <Footer />
  </>
)

export default Home
