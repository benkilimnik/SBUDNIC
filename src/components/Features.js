import React, { Component } from "react"
import {features} from "./content/features"

class Features extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <div className="py-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
              Our Story
              </h2>
              <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              From class project to launch
              </p>
              <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <feature.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Features
