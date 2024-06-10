import { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import { Link } from "react-router-dom"
import "@splidejs/react-splide/css/sea-green"
const Popular = () => {
  const [popular, setPopular] = useState([])

  const getPopular = async () => {
    const check = localStorage.getItem("popular")

    if (check) {
      setPopular(JSON.parse(check))
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9`
      )
      const data = await api.json()

      localStorage.setItem("popular", JSON.stringify(data.recipes))
      setPopular(data.recipes)
      console.log(data.recipes)
    }
  }

  useEffect(() => {
    getPopular()
  }, [])

  return (
    <div className="m-16">
      <h3 className="">Popular Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem"
        }}
      >
        {popular.map((recipe) => {
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

export default Popular
