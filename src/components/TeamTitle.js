import React from "react"

const TeamTitle = ({ item }) => {
  return (
    <div key={item.key} class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
      {item.category}
      </h1>
    </div>
  )
}

export default TeamTitle
