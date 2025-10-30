import { Routes  , Route} from "react-router-dom"
import Home from "../pages/Home.jsx"
import Product from "../pages/Products.jsx"
import SignIn from "../pages/SignIn.jsx"
import SignUp from "../pages/SignUp.jsx"




const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/products" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
    </Routes>
  )
}

export default Mainroutes