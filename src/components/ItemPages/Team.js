import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"

import { sbudnic } from "../images"

const team = [
  {
    id: 1,
    title: "Vasu",
    subtitle: "My super interesting bio about me, myself, and I",
    category: "Thermal, Communications",
    image: sbudnic,
  },
  {
    id: 2,
    title: "Ashton",
    subtitle: "My super interesting bio about me, myself, and I",
    category: "code",
    category: "Thermal, Communications",
    image: sbudnic,
  },
  {
    id: 3,
    title: "Marco Cross",
    subtitle: "My super interesting bio about me, myself, and I",
    category: "Thermal, Communications",
    image: sbudnic,
  },
  {
    id: 4,
    title: "Dheraj",
    subtitle: "My super interesting bio about me, myself, and I",
    category: "Thermal, Communications",
    image: sbudnic,
  },

  {
    id: 5,
    title: "Duncan",
    subtitle: "My super interesting bio about me, myself, and I",
    category: "Thermal, Communications",
    image: sbudnic,
  },
  {
    id: 6,
    title: "Person",
    subtitle: "My super interesting bio about me, myself, and I",
    category: "Thermal, Communications",
    image: sbudnic,
  },
]

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
