import React from "react"
// import { NavLink } from "react-router-dom"

const ImageCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="max-w-sm mb-8 overflow-hidden border-2 border-gray-100 rounded-2xl hover:shadow-lg hover:bg-white"
      style={{ transition: "all .3s ease" }}
    >
      {/* <NavLink to={""}> */}
        <div className="group main">
          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full bg-center max-h-96"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold text-indigo-500">
              {/* formerly text-purple-500 */}
              {item.title}
            </div>
            <ul>
              <li>
                <p className="text-black semibold">{item.subtitle}</p>
              </li>
            </ul>
          </div>

          <div className="px-6 py-4">
            {item.category.split(",").map((tag) => (
              <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      {/* </NavLink> */}
    </div>
  )
}

export default ImageCard