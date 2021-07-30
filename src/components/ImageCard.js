import React from "react"
// import { NavLink } from "react-router-dom"

const ImageCard = ({ item }) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    // <div
    //   key={item.id}
    //   className="max-w-sm mb-8 overflow-hidden border-2 border-gray-100 rounded-2xl hover:shadow-lg hover:bg-white"
    //   style={{ transition: "all .3s ease" }}
    // >
    <div key={item.id}>
      {/* <div className="group main">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full bg-center max-h-96"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-indigo-500">
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
      </div> */}

      <div class="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          class="flex-shrink-0 rounded-lg w-10/12 h-72 object-cover object-center mb-4"
          src={item.image}
        />
        <div class="w-full">
          <h2 class="title-font font-medium text-lg text-gray-900">
            {item.title}
          </h2>
          <h3 class="text-gray-500 mb-3">{item.category}</h3>
          <p class="mb-4 h-24 line-clamp">{item.subtitle}</p>
          <div className="flex flex-col items-center">
            <button
              // className="px-3 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-75 ease-in bg-indigo-500 rounded shadow outline-none active:bg-indigo-600 hover:shadow-lg focus:outline-none"
              className="px-3 pt-4 mb-1 mr-1 text-xs font-bold text-indigo-500 uppercase transition duration-500 ease-out transform border-t-2 outline-none hover:scale-110 hover:opacity-100 background-transparent active:scale-110 focus:scale-110 hover:text-indigo-600"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Read More
            </button>
          </div>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-3xl mx-auto my-6">
                  {/*content*/}
                  <div className="relative flex flex-col w-full border-0 rounded-lg shadow-2xl outline-none bg-gray-50 focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                      <h3 className="pl-6 text-3xl font-semibold">
                        {item.title}
                      </h3>
                      <button
                        className="float-right p-1 px-2 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-60 focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="block w-6 h-6 px-4 text-2xl text-black bg-transparent outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>

                    {/*body*/}
                    <div className="flex flex-col items-center">
                      <img
                        alt="team"
                        class="flex-shrink-0 rounded-lg w-5/12 my-12 h-80 object-cover object-center mb-4"
                        src={item.image}
                      />
                    </div>
                    <div className="relative flex-auto p-6">
                      <p className="px-20 my-4 text-lg leading-relaxed text-left text-blueGray-500">
                        {item.subtitle}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                      <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-75 ease-linear outline-none background-transparent focus:outline-none"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <div className="grid grid-cols-3 pb-2">
                        <button class="mx-1 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </button>
                        <button class="mx-1 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </button>
                        <button class="mx-1 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          <span class="inline-flex">
            <a href="/" class="text-gray-500">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" class="ml-2 text-gray-500">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" class="ml-2 text-gray-500">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>

      {/* <div className="p-4">
          <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
            <img
              alt={item.title}
              className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0"
              src={item.image}
            />
            <div className="flex-grow sm:pl-8">
              <h2 className="text-lg font-medium text-gray-900 title-font">
                {item.title}
              </h2>
              <h3 className="mb-3 text-gray-500">
                {item.category.split(",").map((tag) => (
                  <span>{tag}</span>
                ))}
              </h3>
              <p className="mb-4">{item.subtitle}</p>
              <span className="inline-flex">
                <a href="t" className="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="t" className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="t" className="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div> */}
    </div>
  )
}

export default ImageCard
