import React from "react"
import Footer from "../Footer"
import Docs from "./Docs"
import { about1, about2, about3, about4 } from "../content/images"

const Home = () => (
  <div>
    <Docs />
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 overflow-hidden bg-gray-200 rounded">
            <div className="w-24 h-full bg-red-600"></div>
          </div>
          <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:w-2/5 title-font sm:mb-0">
              Design Overview
            </h1>
            <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">
              SBUDNIC is a <span className="text-primary">S</span>putnik-like
              3U cubesat by <span className="text-primary">B</span>rown{" "}
              <span className="text-primary">U</span>niversity,{" "}
              <span className="text-primary">D</span>-Orbit, and{" "}
              <span className="text-primary">C</span>NR. Our team is divided
              into various subsystems responsible for different parts of the
              satellite, including Structure (STR), the Thermal Control System
              (TCS), Tracking, Telemetry and Control (TTC), Electrical Power
              System (EPS), Onboard Data Handling (OBDH), Payload (PL), Space
              Telecommunications Radio System (STR), and the Altitude and Orbit
              Control System (AOCS).
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src={about4}
                alt="content"
              />
              <h3 className="text-xs font-medium tracking-widest text-primary title-font">
                STR
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Structure
              </h2>
              <p className="text-base leading-relaxed">
                In compliance with D-Orbit’s design and engineering guidelines,
                we are utilizing a commercially-available anodized Al6061 3U
                frame. Inspired by ongoing research on wooden-framed satellites
                at Sumitomo Corporation in partnership with Kyoto University,
                the structure team is concurrently pursuing the integration of
                wooden components within the structure.
              </p>
              <a
                href="https://drive.google.com/file/d/1x4FcdKtLIiUYGH81jWcC8PWpFF-qoDEo/view?usp=sharing"
                className="inline-flex items-center mt-3 text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src={about1}
                alt="content"
              />
              <h3 className="text-xs font-medium tracking-widest text-primary title-font">
                OBDH
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Onboard Data Handling
              </h2>
              <p className="text-base leading-relaxed">
                SBUDNIC will be controlled by a over-the-counter Arduino. To
                avoid mission failure due to SEU, the Arduino will operate
                multiple copies of the control firmware simultaneously which
                will constantly verify computational accuracy against one
                another.
              </p>
              <a
                href="https://drive.google.com/file/d/1w9RmT52blB5fRuY7TmT3oAtLQOQxwxKq/view?usp=sharing"
                className="inline-flex items-center mt-3 text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src={about2}
                alt="content"
              />
              <h3 className="text-xs font-medium tracking-widest text-primary title-font">
                AOCS
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Altitude and Orbit Control System
              </h2>
              <p className="text-base leading-relaxed">
                After careful consideration of multiple stabilization options, a
                passive aerodynamic drag stabilization system will be used on
                SBUDNIC. To the best of our knowledge, SBUDNIC will be one of
                the highest-orbiting aerodynamically stabilized satellites ever
                launched. While the forces at play are miniscule (on the order
                of 10-6 Newtons) calculations demonstrate that this is enough
                for successful stabilization. .
              </p>
              <a
                href="https://drive.google.com/file/d/1Hy3fGHrIObc0CyCTaFyTSMm8GrW6mX_U/view?usp=sharing"
                className="inline-flex items-center mt-3 text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-40 mb-6 rounded"
                src={about3}
                alt="content"
              />
              <h3 className="text-xs font-medium tracking-widest text-primary title-font">
                TTC
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Tracking, Telemetry and Control
              </h2>
              <p className="text-base leading-relaxed">
                Radio communication will be achieved with a Ham radio-based
                Arduino add-on like the Hamshield Mini shown to the right. A
                long strand of nickel titanium wire will be used as the antenna.
                This solution is widely used among 3U CubeSats.
              </p>
              <a
                href="https://drive.google.com/file/d/1LXMkEq8CFGcs01GfqRn77i9wS1NV8CsF/view?usp=sharing"
                className="inline-flex items-center mt-3 text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
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
