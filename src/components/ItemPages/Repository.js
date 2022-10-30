import React from "react"
import Footer from "../Footer"

const Repository = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
              Mission Repository And Documentation
            </h1>

          <div className="container flex flex-col items-center px-5 py-12 mx-auto sm:py-24 md:flex-row">
            {/* <div className="w-full h-full px-4 embed-responsive aspect-ratio-21/9"> */}
            <div className="w-full h-96">
              A Cool Repo of Stuff
            </div>
          </div>
         </div>
    </div>
    <Footer />
  </section>
)

export default Repository
