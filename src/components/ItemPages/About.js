import React from "react"
import Footer from "../Footer"
import Docs from "./Docs"
import { about1, about2, about3, about4 } from "../content/images"

const Home = () => (
  <div>
    <Docs />
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-indigo-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            Design Overview
            </h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            SBUDNIC is
            a <span className="text-indigo-500">S</span>putnik-like 3U cubesat
            by <span className="text-indigo-500">B</span>rown{" "}
            <span className="text-indigo-500">U</span>niversity,{" "}
            <span className="text-indigo-500">D</span>-Orbit, and{" "}
            <span className="text-indigo-500">C</span>NR.
            Our team is divided into various subsystems responsible for different parts
            of the satellite, including Structure (STR), the Thermal Control System (TCS), Tracking, Telemetry and Control (TTC),
            Electrical Power System (EPS), Onboard Data Handling (OBDH), Payload (PL), Space Telecommunications Radio System (STR), and the
            Altitude and Orbit Control System (AOCS).
            </p>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={about4}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                STR
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Structure
              </h2>
              <p class="leading-relaxed text-base">
                In compliance with D-Orbit’s design and engineering guidelines,
                we are utilizing a commercially-available anodized Al6061 3U
                frame. Inspired by ongoing research on wooden-framed satellites
                at Sumitomo Corporation in partnership with Kyoto University,
                the structure team is concurrently pursuing the integration of
                wooden components within the structure.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={about1}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                OBDH
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Onboard Data Handling
              </h2>
              <p class="leading-relaxed text-base">
                SBUDNIC will be controlled by a over-the-counter Arduino. To
                avoid mission failure due to SEU, the Arduino will operate
                multiple copies of the control firmware simultaneously which
                will constantly verify computational accuracy against one
                another.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={about2}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                AOCS
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Altitude and Orbit Control System
              </h2>
              <p class="leading-relaxed text-base">
                After careful consideration of multiple stabilization options, a
                passive aerodynamic drag stabilization system will be used on
                SBUDNIC. To the best of our knowledge, SBUDNIC will be one of
                the highest-orbiting aerodynamically stabilized satellites ever
                launched. While the forces at play are miniscule (on the order
                of 10-6 Newtons) calculations demonstrate that this is enough
                for successful stabilization. .
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={about3}
                alt="content"
              />
              <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                TTC
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Tracking, Telemetry and Control
              </h2>
              <p class="leading-relaxed text-base">
                Radio communication will be achieved with a Ham radio-based
                Arduino add-on like the Hamshield Mini shown to the right. A
                long strand of nickel titanium wire will be used as the antenna.
                This solution is well understood and was also used on EquiSat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <Features/> */}
    <Footer />
  </div>
)

export default Home
