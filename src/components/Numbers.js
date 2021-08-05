import React from "react"
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed"

const Numbers = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="px-8 sm:py-12 lg:py-24 mx-auto flex-col items-center flex">
        {/* <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
              Stay in the loop
            </h1>

            <div class="leading-relaxed">
              Follow us on Twitter, Instagram, and LinkedIn.
            </div>
       
            <div className="flex flex-row items-center py-4 mt-4 align-center">
              <a
                href="https://twitter.com/SbudnicS"
                className="transition duration-500 ease-out transform hover:text-indigo-600 hover:scale-110 hover:opacity-100"
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/sbudnics"
                className="ml-5 transition duration-500 ease-out transform hover:text-indigo-600 hover:scale-110 hover:opacity-100"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/sbudnic/"
                className="ml-5 transition duration-500 ease-out transform hover:text-indigo-600 hover:scale-110 hover:opacity-100"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div> */}

        <div class="lg:w-6/12 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
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
