import { NavLink } from "react-router-dom"

const Navlink = () => {
  return (
    <nav className="flex justify-center items-center gap-x-20 p-10 text-white text-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-semibold" : "text-gray-400 hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-semibold" : "text-gray-400 hover:text-white"
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/signin"
        className={({ isActive }) =>
          isActive ? "text-red-500 font-semibold" : "text-gray-400 hover:text-white"
        }
      >
        Sign In
      </NavLink>
    </nav>
  )
}

export default Navlink
