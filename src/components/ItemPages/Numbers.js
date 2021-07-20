import React from "react"
import { Link } from "react-router-dom"

const Numbers = () => {
  return (
    <div className="container flex flex-col items-center justify-center max-w-2xl px-10 mx-auto leading-7 text-left">
      <div class="stats shadow w-full">
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Timeframe</div>
          <div class="stat-value">1 Year</div>
          <div class="stat-desc">Nov 2020 - Nov 2021</div>
        </div>
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Budget</div>
          <div class="stat-value text-green-500">$10K</div>
          <div class="stat-desc">D-Orbit and CNR</div>
        </div>
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Team Members</div>
          <div class="stat-value text-indigo-500">20+</div>
          <div class="stat-desc">And growing</div>
        </div>
      </div>
    </div>
  )
}

export default Numbers
