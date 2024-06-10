import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
const Search = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    navigate("/searched/" + input)
  }

  return (
    <form className="mx-36" onSubmit={submitHandler}>
      <div className="relative w-full">
        <FaSearch className={svgStyle}></FaSearch>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border-none bg-gradient-two text-2xl text-white py-4 px-12 rounded-2xl outline-none w-full"
        />
      </div>
    </form>
  )
}

const svgStyle =
  "absolute top-1/2 left-0 transform-translate-two text-white  text-3xl top-5"
export default Search
