import React from "react"
import Footer from "../Footer"
import Numbers from "../Numbers"
import graph from "../../assets/Graph-for-story.jpg"
//import techRelease from "../../assets/technical_release.pdf"
import sbudnicPic from "../../assets/sbudnic.jpg"

const Home = () => (
  <div>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
              Press Release 05-15-2023
            </h1>
            <h2 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
              SBUDNIC Dragsail Deployment
            </h2>
            <h4>Check our Technical Press Release For More Details on The Launch!</h4>
            <br></br>
            {/* <img 
            src={graph}
            className="bject-center w-400 mr-4 bg-gray-100"
            ></img> */}
             <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-80 mb-6 rounded"
                src={sbudnicPic}
                alt="content"
              />
              <h3 className="text-xs font-medium tracking-widest text-primary title-font">
                Article
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Official Article - Brown University Engineering
              </h2>

              <b className="text-base leading-relaxed mb-4">
              Satellite built by Brown students and launched by SpaceX shows a low-cost way to reduce space junk
              </b>

              <p className="text-base leading-relaxed">

              </p>
              <a
                href="https://www.brown.edu/news/2023-03-15/sbudnic"
                className="inline-flex items-center mt-3 text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 xl:w-1/2 md:w-1/2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <img
                className="object-cover object-center w-full h-80 mb-6 rounded"
                src={graph}
                alt="content"
              />
              <h3 className="text-xs font-medium tracking-widest text-primary title-font">
                Press Release
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">
                Technical Post-Deployment SBUDNIC Press Release
              </h2>
              <p className="text-base leading-relaxed">
                SBUDNIC satellite successfully deploys drag device on orbit
              </p>
              <a
                href="https://drive.google.com/file/d/1U31NAByubQDmMWqCFpWdiLrC0t6qQXnE/view?usp=sharing"
                className="inline-flex items-center mt-3 text-red-600"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
         </div>
    </div>
    <Numbers />
  </section>
    <Footer />
  </div>
)

export default Home
