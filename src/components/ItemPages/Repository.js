import React from "react"
import Footer from "../Footer"
import {git, repo} from "../content/images"

const Repository = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
              Mission Repository And Documentation
            </h1>

          
          <div className="container flex flex-col items-center px-5 py-12 mx-auto sm:py-24 md:flex-row">
            {/* <div className="w-full h-full px-4 embed-responsive aspect-ratio-21/9"> */}

            <div className="p-4 xl:w-1/2 md:w-1/2 cursor-pointer repoImageParent"
              onClick={() => {window.location.href = "https://drive.google.com/drive/u/1/folders/1UcoCtKYqj43dilyOSkveKJn21k0Mqbk0"}}
              >
              <div className="p-6 bg-gray-100 rounded-lg">
                <img
                  className="object-cover object-center w-full h-80 mb-6 rounded repoImage"
                  src={repo}
                  alt="File Repository"
                />
          
                <b className="text-base leading-relaxed mb-4">
                Public Files/Assets
                </b>
            </div>
          </div>

          <div className="p-4 xl:w-1/2 md:w-1/2 cursor-pointer repoImageParent"
           onClick={() => {window.location.href = "https://github.com/elaidlaw/sbudnic-library"}}
          >
              <div className="p-6 bg-gray-100 rounded-lg">
                <img
                  className="object-cover object-center w-full h-80 mb-6 rounded repoImage"
                  src={git}
                  alt="Github Repository"
                />
          
                <b className="text-base leading-relaxed mb-4">
                SBUDNIC Arduino Library
                </b>
            </div>
          </div>

     
          </div>
         </div>
    </div>
    <Footer />
  </section>
)

export default Repository
