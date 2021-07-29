import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"
import { team } from "../content/team"

export default function Team() {
  return (
    <div>
      {/* <div className="container flex flex-col items-center justify-center max-w-2xl py-6 mx-auto leading-7 text-left"> */}
        {/* <h1 className="py-12 text-4xl font-semibold "> Meet the Team</h1> */}
        {/* <article className="prose-2xl">
        Communications
      </article> */}
      {/* </div> */}

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-3xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              OUR TEAM
            </h1>
            <p class="lg:w-2/3 py-4 text-lg mx-auto leading-relaxed">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>
          </div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-left">
                {team.map((item) => (
                  <ImageCard key={item.id} item={item}></ImageCard>
                ))}
              </div>
          {/* <div class="flex flex-wrap -m-4">
          {team.map((item) => (
            <ImageCard key={item.id} item={item}></ImageCard>
          ))}
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  )
}
