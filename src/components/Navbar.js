import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar({ navItems }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 navbar-expand-md">
        <div className="container flex flex-wrap items-center justify-between px-1 mx-auto">
          <div className="relative flex justify-between w-full md:w-auto md:static md:block md:justify-start">
            <Link
              className="hover:text-indigo-500 inline-block py-2 mr-4 leading-relaxed tracking-wider whitespace-no-wrap text-md"
              to="/"
            >
              SBUDNIC
            </Link>
            <button
              className="btn btn-ghost block px-3 py-1 md:hidden"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                <li
                  id={nav.id}
                  // className="hover:text-blue-500"
                >
                  <NavLink
                    className="btn btn-ghost btn-sm flex items-center px-4 py-2 leading-snug"
                    to={`${nav.navItem}`}
                  >
                    <span className="tracking-wider text-md">
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
