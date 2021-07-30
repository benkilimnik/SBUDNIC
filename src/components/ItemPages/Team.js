import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"
import { team } from "../content/team"

export default function Team() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 py-4 text-lg mx-auto leading-relaxed">
              Meet the engineers, designers, software developers, and communicators committed to building and launching a low-cost CubeSat into low earth orbit in record time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-left">
            {team.map((item) => (
              <ImageCard key={item.id} item={item}></ImageCard>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
