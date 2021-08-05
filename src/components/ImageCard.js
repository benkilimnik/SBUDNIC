import React from "react"

const ImageCard = ({ item }) => {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
    <button
      key={item.id}
      class="p-2 xl:w-3/12 md:w-1/2 w-full border-2 border-gray-100 rounded-2xl hover:shadow-md hover:bg-white"
      style={{ transition: "all 0.3s ease" }}
      onClick={() => setShowModal(true)}
    >
      <div
        class="h-full flex items-center border-gray-200 p-4 rounded-lg"
      >
        <img
          alt="team"
          class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-lg mr-4"
          src={item.image}
        />
        <div class="flex-grow text-left ml-4">
          <h2 class="text-gray-900 title-font font-medium">{item.title}</h2>
          <p class="text-gray-500">{item.position}</p>
        </div>
      </div>
      </button>
      {showModal ? (
        <>
          <div 
          className="fixed inset-0 z-50 flex items-center justify-center invisible px-8 overflow-x-hidden overflow-y-auto outline-none sm:visible focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full border-0 rounded-lg shadow-2xl outline-none bg-gray-50 focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold sm:pl-6">
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
                    className="invisible sm:visible sm:flex-shrink-0 sm:rounded-lg sm:w-5/12 sm:my-12 sm:h-80 sm:object-cover sm:object-center sm:mb-4"
                    src={item.image}
                  />
                </div>
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-left sm:px-20 text-blueGray-500">
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
                    <button className="mx-1 text-gray-500">
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
                    </button>
                    <button className="mx-1 text-gray-500">
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
                    </button>
                    <button className="mx-1 text-gray-500">
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ImageCard
