import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"
import { team } from "../../assets/content/team"

export default function Team() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5 justify-items-center">
        {team.map((item) => (
          <ImageCard key={item.id} item={item}></ImageCard>
        ))}
      </div>
      <Footer />
    </div>
  )
}
