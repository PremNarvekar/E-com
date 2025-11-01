import { NavLink } from "react-router-dom"

const Navlink = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Create Product", path: "/create" },
    { name: "Sign In", path: "/signin" },
  ]

  return (
    <nav className="flex justify-center items-center gap-x-20 p-10 text-white text-lg">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-red-500 font-semibold"
              : "text-gray-400 hover:text-white"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navlink
