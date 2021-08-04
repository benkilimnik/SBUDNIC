import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"
import { team } from "../content/team"
// import FilteredList from "../FilteredList"

export default function Team() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 py-4 text-lg mx-auto leading-relaxed">
              Meet the engineers, designers, software developers, and
              communicators committed to building and launching a low-cost
              CubeSat into low earth orbit in record time.
            </p>
          </div>
          {/* <FilteredList allItems={team} /> */}
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
              Faculty and Industry Advisors
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
            {team
              .filter((item) => item.team === "Advisor")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
            Program Management and Public Relations
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
            {team
              .filter((item) => item.team === "Program Management and Public Relations")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
              Thermal Control System
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
            {team
              .filter((item) => item.team === "TCS")
              .map((item) => (
                <ImageCard key={item.id} item={item} />
              ))}
          </div>
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
            Telemetry, Tracking, Control & Ground Segment
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
            {team
              .filter((item) => item.team === "TTC + GSEG")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
            Structures
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
            {team
              .filter((item) => item.team === "STR")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>

          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
            Electrical Power Systems
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
            {team
              .filter((item) => item.team === "EPS")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
            Payload & Onboard Data Handling
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
            {team
              .filter((item) => item.team === "OBDH + PL")
              .map((item) => (
                <ImageCard key={item.team} item={item} />
              ))}
          </div>
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
            Altitude and Orbit Control
            </h1>
          </div>
          <div class="flex flex-wrap -m-2 mb-16">
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
