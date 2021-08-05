import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"
import { team } from "../content/team"
// import FilteredList from "../FilteredList"

export default function Team() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
              OUR TEAM
            </h1>
            <p className="py-4 mx-auto text-lg leading-relaxed lg:w-2/3">
              Meet the engineers, designers, software developers, and
              communicators committed to building and launching a low-cost
              CubeSat into low earth orbit in record time.
            </p>
          </div>
          {/* <FilteredList allItems={team} /> */}
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
              Faculty and Industry Advisors
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "Advisor")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Program Management and Public Relations
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "Program Management and Public Relations")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
              Thermal Control System
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "TCS")
              .map((item) => (
                <ImageCard key={item.id} item={item} />
              ))}
          </div>
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Telemetry, Tracking, Control & Ground Segment
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "TTC + GSEG")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Structures
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "STR")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>

          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Electrical Power Systems
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "EPS")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Payload & Onboard Data Handling
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "OBDH + PL")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Testing
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "Testing")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Altitude and Orbit Control
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "AOCS")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          
        </div>
      </section>
      <Footer />
    </div>
  )
}
