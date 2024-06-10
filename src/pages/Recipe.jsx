import { react, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState(null)
  const [activeTab, setActiveTab] = useState("instructions")
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
    const detailData = await data.json()
    setDetails(detailData)
    localStorage.setItem(`recipe-${params.name}`, JSON.stringify(detailData))
    console.log(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="maindiv mt-40 mb-20 flex">
      {details ? (
        <>
          <div className="w-96">
            <h2 className=" font-bold w-80">{details.title}</h2>
            <img
              src={details.image}
              alt={details.title}
              className="w-72 h-48"
            />
          </div>
          <div className="ml-20">
            <div className=" flex">
              <button
                className={`h-14 px-8 py-4 text-customGray bg-white border-solid border-black border-2 font-semibold ${
                  activeTab === "instructions"
                    ? "bg-gradient-two text-white"
                    : ""
                }`}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </button>
              <button
                className={`h-14 ml-4 px-8 py-4 text-customGray bg-white border-solid border-black border-2 font-semibold ${
                  activeTab === "ingredients"
                    ? "bg-gradient-two text-white"
                    : ""
                }`}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </button>
            </div>
            {activeTab === "instructions" && (
              <div className="h-96">
                <h3
                  dangerouslySetInnerHTML={{ __html: details.summary }}
                  className="h-40 text-sm"
                ></h3>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                  className="h-40 text-sm mt-12"
                ></h3>
              </div>
            )}
            {activeTab === "ingredients" && (
              <ul className="mt-8">
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id} className="text-sm">
                    {ingredient.original}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p> // You can show a loading message or spinner here
      )}
    </div>
  )
}

export default Recipe

{
  /* <ul className="mt-8"></ul>
<li className="text-xl leading-10"></li> */
}
