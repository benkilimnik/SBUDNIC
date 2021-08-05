import React from "react"

const TeamTitle = ({ item }) => {
  return (
    <div key={item.key} className="flex flex-col w-full mb-20 text-center">
      <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
      {item.category}
      </h1>
    </div>
  )
}

export default TeamTitle
