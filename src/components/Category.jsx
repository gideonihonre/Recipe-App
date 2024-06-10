import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPizzaSlice, faBurger } from "@fortawesome/free-solid-svg-icons"

import { NavLink } from "react-router-dom"
const Category = () => {
  const navStyle =
    "flex flex-col justify-center items-center rounded-full mx-8 bg-gradient-two w-24 h-24 cursor-pointer scale-75 relative"

  return (
    <ul className="flex justify-center my-8">
      <NavLink to={"/Cuisines/Italian"} className={navStyle}>
        {/* <FaPizzaSlice className="w-[1000px] h-[1000px]" /> */}
        <FontAwesomeIcon
          icon={faPizzaSlice}
          className="absolute text-3xl top-1"
        />
        <h4 className="text-white text-sm">Italian</h4>
      </NavLink>
      <NavLink to={"/Cuisines/American"} className={navStyle}>
        <FontAwesomeIcon icon={faBurger} className="absolute text-3xl top-1" />
        <h4 className="text-white text-sm">American</h4>
      </NavLink>
      <NavLink to={"/Cuisines/Thai"} className={navStyle}>
        <GiNoodles className="absolute text-3xl top-1" />

        <h4 className="text-white text-sm">Thai</h4>
      </NavLink>
      <NavLink to={"/Cuisines/Japanese"} className={navStyle}>
        <GiChopsticks className="absolute text-3xl top-1" />
        <h4 className="text-white text-sm">Japanese</h4>
      </NavLink>
    </ul>
  )
}

export default Category
