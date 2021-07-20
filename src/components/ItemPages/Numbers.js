import React from "react"

const Numbers = () => {
  return (
    <div className="container flex flex-col items-center justify-center max-w-2xl px-10 mx-auto leading-7 text-left">
      <div className="stats shadow w-full">
        <div className="stat place-items-center place-content-center">
          <div className="stat-title">Timeframe</div>
          <div className="stat-value">1 Year</div>
          <div className="stat-desc">Nov 2020 - Nov 2021</div>
        </div>
        <div className="stat place-items-center place-content-center">
          <div className="stat-title">Budget</div>
          <div className="stat-value text-green-500">$10K</div>
          <div className="stat-desc">D-Orbit and CNR</div>
        </div>
        <div className="stat place-items-center place-content-center">
          <div className="stat-title">Team Members</div>
          <div className="stat-value text-indigo-500">20+</div>
          <div className="stat-desc">And growing</div>
        </div>
      </div>
    </div>
  )
}

export default Numbers
