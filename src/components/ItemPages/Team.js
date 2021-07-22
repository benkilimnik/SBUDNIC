import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"
import { team } from "../content/team"

export default function Team() {
  return (
    <div>
       <div className="container flex flex-col items-center justify-center max-w-2xl py-6 mx-auto leading-7 text-left">
        <h1 className="py-12 text-4xl font-semibold "> Meet the Team</h1>
      {/* <article className="prose-2xl">
        Communications
      </article> */}
        </div>
      <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5 justify-items-center">
        {team.map((item) => (
          <ImageCard key={item.id} item={item}></ImageCard>
        ))}
      </div>
      <Footer />
    </div>
  )
}
