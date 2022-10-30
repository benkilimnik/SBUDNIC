import React from "react"
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed"

const Numbers = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-col items-center px-8 mx-auto sm:py-12 lg:py-24">
        
        {/* <div className="flex flex-wrap content-start mt-auto mb-auto -mx-4 lg:w-1/2 sm:w-2/3 sm:pr-10">
          <div className="w-full px-4 mb-6 sm:p-4">
            <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
                Looking for Ham Radio Operator
              </h1>
              <div className="leading-relaxed">
                If you are a ham radio operator and are interested in sending
                uplink or receiving downlink data, please send us an email!
              </div>
            <div
              class="shadow-sm border-t-4 border-secondary rounded-b px-4 py-3"
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-primary h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
                    Looking for Ham Radio Operator
                  </h1>
                  <div className="py-2 text-sm leading-relaxed md:text-lg">
                    If you are a ham radio operator and are interested in
                    sending uplink or receiving downlink data, please send us an
                    email at <a href="mailto:sbudnicsatellite@gmail.com" className="text-blue-500">sbudnicsatellite@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="mb-2 text-xl font-medium text-gray-900 title-font">
              Stay in the loop
            </h1>
          </div>
        </div> 
        */}

        <div className="w-full mt-6 overflow-hidden rounded-lg lg:w-6/12 sm:w-1/3 sm:mt-0">
          <div className="flex flex-col items center">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="SbudnicS"
              options={{ height: 600 }}
            />
            <div className="py-4">
              <TwitterFollowButton
                screenName="SbudnicS"
                options={{ size: "large" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Numbers
