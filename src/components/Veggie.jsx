import { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/sea-green"
import { Link } from "react-router-dom"
const Veggie = () => {
  const [veggie, setVeggie] = useState([])

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie")

    if (check) {
      setVeggie(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9&tags=vegetarian`
      )
      const data = await api.json()

      localStorage.setItem("veggie", JSON.stringify(data.recipes))
      setVeggie(data.recipes)
      console.log(data.recipes)
    }
  }

  useEffect(() => {
    getVeggie()
  }, [])

  return (
    <div className="m-16">
      <h3 className="">Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="min-h-96 overflow-hidden relative">
                <Link to={"/recipe/" + recipe.id}>
                  <p className="absolute z-10 left-2/4 bottom-0 transform -translate-x-1/2 text-white w-full text-center font-semibold text-base h-2/5 flex items-center justify-center">
                    {recipe.title}
                  </p>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="rounded-3xl absolute w-full h-full object-cover bg-gradient-rgba"
                  />
                </Link>
              </div>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}

export default Veggie
