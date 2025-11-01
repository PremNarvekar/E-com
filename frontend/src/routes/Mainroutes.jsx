import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import CreateProduct from "./pages/CreateProduct"
import SignIn from "./pages/SignIn"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/create" element={<CreateProduct />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  )
}

export default MainRoutes
