import Home from "./Home"
import Cuisines from "./Cuisines"
import Searched from "./Searched"
import Recipe from "./Recipe"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
const Pagess = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisines/:type" element={<Cuisines />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pagess
