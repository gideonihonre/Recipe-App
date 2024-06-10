import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const Cuisines = () => {
  const [cuisines, setCuisines] = useState([])
  let params = useParams()
  const getCuisines = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}`
    )
    const recipes = await data.json()
    setCuisines(recipes.results)
  }
  useEffect(() => {
    getCuisines(params.type), console.log(params.type)
  }, [params.type])
  return (
    <motion.div
      className="Grid"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisines.map((item) => {
        return (
          <div key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" className="w-full rounded-3xl" />
              <h4 className="text-center p-4">{item.title}</h4>
            </Link>
          </div>
        )
      })}
    </motion.div>
  )
}

export default Cuisines
