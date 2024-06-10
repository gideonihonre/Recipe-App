import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()
  const getSearchedRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}`
    )
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
  }

  useEffect(() => {
    getSearchedRecipes(params.search) //useParams for dynamic routing
  }, [params.search]) // put params.search into the array so that there's an update every time there is a search
  return (
    <div className="Grid">
      {searchedRecipes.map((item) => {
        return (
          <div key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" className="w-full rounded-3xl" />
              <h4 className="text-center p-4">{item.title}</h4>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Searched
