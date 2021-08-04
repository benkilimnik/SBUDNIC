import React from "react"
import { Link, NavLink } from "react-router-dom"
// import { sbudnic4 } from "./content/images"

export default function Navbar({ navItems }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 md:text-lg navbar-expand-md">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full md:w-auto md:static md:block md:justify-start">
            <Link
              className="inline-block py-2 mr-4 leading-relaxed tracking-wider whitespace-no-wrap hover:text-secondary text-md"
              to="/"
            >
               {/* <img
              class="h-10 object-cover object-center rounded"
              alt="hero"
              src={sbudnic4}
            /> */}
              SBUDNIC
            </Link>
            <button
              className="block px-3 py-1 btn btn-ghost md:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none md:flex-row md:ml-auto">
              {navItems.map((nav) => (
                <li key={nav.id} id={nav.id}>
                  <NavLink
                    className="flex items-center px-4 py-2 leading-snug btn btn-ghost btn-sm"
                    to={`${nav.navItem}`}
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <span className="tracking-wider text-md title-font hover:text-secondary">
                      {nav.navItem}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
