import React from "react"
import Footer from "../Footer"
import { Link } from "react-router-dom"
import {
  // space3,
  // eureka1,
  sbudnicN,
  italy,
  brown,
  nasa,
  dorbit,
  arduino,
  risg,
  amsat,
  roma,
  energizer,
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
// import Countdown, { calcTimeDelta } from "react-countdown"

// const renderer = ({ days, hours, minutes, seconds, completed }) => {
//   return (
//     <div className="flex flex-col items-center text-primary lg:items-start">
//       <div className="grid grid-flow-col gap-5 pb-8 place-items-end auto-cols-max">
//         <span className="text-xl md:text-2xl ">Launch in:</span>
//         <div className="md:text-md">
//           <span className="pr-1 text-xl md:text-2xl">
//             <span>{days}</span>
//           </span>
//           days
//         </div>
//         <div className="md:text-md">
//           <span className="px-1 text-xl md:text-2xl">
//             <span>{hours}</span>
//           </span>
//           hours
//         </div>
//         <div className="md:text-md">
//           <span className="px-1 text-xl md:text-2xl">
//             <span> {minutes}</span>
//           </span>
//           min
//         </div>
//         <div className="md:text-md">
//           <span className="px-1 text-xl md:text-2xl">
//             <span>{seconds}</span>
//           </span>
//           sec
//         </div>
//       </div>
//     </div>
//   )
// }

const Home = () => (
  <>
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-12 mx-auto sm:py-24 md:flex-row">
        <div className="flex flex-col items-center w-11/12 mb-16 text-center sm:w-full lg:flex-grow md:w-6/12 xl:pr-72 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-8 text-3xl font-bold text-gray-900 lg:pb-8 title-font lg:text-5xl md:leading-tight lg:leading-snug sm:text-4xl sm:mb-4">
            We're building a Sputnik-like CubeSat on a budget in record time
          </h1>

          <div className="invisible hidden 2xl:visible 2xl:grid 2xl:items-center 2xl:grid-cols-4 2xl:pb-12 2xl:align-center">
            <div className="2xl:pr-12">
              <h2 className="text-3xl font-medium text-gray-900 title-font">
                1 Year
              </h2>
              <p className="leading-relaxed">Timeframe</p>
            </div>
            <div className="2xl:pr-12">
              <h2 className="text-3xl font-medium text-gray-900 title-font">
                $10K
              </h2>
              <p className="leading-relaxed">Budget</p>
            </div>
            <div className="pr-12">
              <h2 className="text-3xl font-medium text-gray-900 title-font">
                20+
              </h2>
              <p className="leading-relaxed">Students</p>
            </div>
            <div className="">
              <h2 className="text-3xl font-medium text-gray-900 title-font">
                1
              </h2>
              <p className="leading-relaxed">3U CubeSat</p>
            </div>
          </div>

          <p className="sm:mb-6 lg:text-xl lg:leading-relaxed">
            {/* SBUDNIC is a Sputnik-like 3U CubeSat by Brown University and CNR,
            with the support of D-Orbit, AMSAT-Italy, La Sapienza-University of
            Rome and NASA Rhode Island Space Grant  */}
            A small group of Brown University students working with CNR to test
            the limits of how quickly and efficiently a 3U CubeSat can be
            developed.{" "}
            {/* using
            terrestrial parts and cheaper, off-the-shelf components.  */}
            Supported by D-Orbit, AMSAT-Italy, La Sapienza-University of Rome
            and NASA Rhode Island Space Grant.
            {/* - like an Arduino 
            processor and AA Energizer Batteries!  */}
          </p>
          <div className="invisible py-4 text-gray-900 lg:visible">
            <span class="text-xl md:text-2xl">{"We Launched On May 25th 2022!"}</span>

            {/* <Countdown
              date={Date.now() + calcTimeDelta("2022-05-25T14:25:00").total}
              renderer={renderer}
            /> */}
          </div>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="inline-flex px-6 py-3 text-xl text-white transition duration-500 ease-out transform border-0 rounded bg-primary focus:outline-none hover:bg-indigo-800 hover:scale-110 active:scale-110 focus:scale-110"
              // className="px-3 pt-4 mb-1 mr-1 text-xs font-bold text-indigo-500 uppercase transition duration-500 ease-out transform border-t-2 outline-none hover:scale-110 hover:opacity-100 background-transparent active:scale-110 focus:scale-110 hover:text-indigo-600"
            >
              About
            </Link>
            <Link
              to="/news"
              className="inline-flex px-6 py-3 ml-4 text-lg text-white duration-500 ease-out transform border-0 rounded bg-secondary focus:outline-none hover:bg-red-500 hover:scale-110 active:scale-110 focus:scale-110"
            >
              News
            </Link>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={sbudnicN}
          />
          <div className="grid grid-cols-2 gap-6 p-4 my-8 border-2 border-secondary rounded-2xl ">
            <img
              className="object-scale-down object-center h-24 rounded md:h-32"
              alt="logo"
              src={italy}
            />
            <img
              className="object-scale-down object-center h-24 rounded md:h-32 "
              alt="logo"
              src={brown}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-2xl md:grid-cols-3">
            <img
              className="object-scale-down object-center w-32 h-24 rounded md:h-32"
              alt="logo"
              src={roma}
            />
            <img
              className="hidden object-scale-down object-center w-32 h-24 rounded md:block md:h-32"
              alt="logo"
              src={risg}
            />
            <img
              className="visible object-scale-down object-center w-32 h-24 rounded md:hidden md:h-32"
              alt="logo"
              src={nasa}
            />
            <img
              className="object-scale-down object-center w-32 h-24 rounded md:h-32"
              alt="logo"
              src={amsat}
            />
            <img
              className="object-scale-down object-center w-32 h-24 rounded md:h-32"
              alt="logo"
              src={dorbit}
            />
            <img
              className="object-scale-down object-center w-32 h-24 rounded md:h-32"
              alt="logo"
              src={energizer}
            />
            <img
              className="object-scale-down object-center w-32 h-24 rounded md:h-32"
              alt="logo"
              src={arduino}
            />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default Home
