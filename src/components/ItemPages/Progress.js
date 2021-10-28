import React from "react"
import Footer from "../Footer"

const Progress = () => (
  <section className="text-gray-600 body-font">
    <div className="container flex flex-col items-center px-5 py-12 mx-auto sm:py-24 md:flex-row">
      {/* <div className="w-full h-full px-4 embed-responsive aspect-ratio-21/9"> */}
      <div className="w-full h-96">
        <iframe
          title="progress"
          width="100%"
          height="100%"
          // className="embed-responsive-item"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTujcDvERnpzplDz_EdPik-gBfJDjnFfjqqaEzcJbEvAXiz_5Nx8ML2daHgBsmxVPYltN7WlNfm2Qg/pubhtml?widget=true&amp;headers=false"
        ></iframe>

        {/* <iframe title="progress"
          className="embed-responsive-item" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTujcDvERnpzplDz_EdPik-gBfJDjnFfjqqaEzcJbEvAXiz_5Nx8ML2daHgBsmxVPYltN7WlNfm2Qg/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}
      </div>
    </div>
    <Footer />
  </section>
)

export default Progress
