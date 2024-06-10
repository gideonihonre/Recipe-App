import { GiKnifeFork } from "react-icons/gi"
const Logo = () => {
  return (
    <div className="text-8xl font-normal font-serif no-underline flex">
      <GiKnifeFork style={svgStyle} />
      <p style={{ fontFamily: "cursive", fontSize: "1rem" }}>deliciousss</p>
    </div>
  )
}

const svgStyle = {
  height: "1.5rem",
  width: "1.5rem",
  color: "black"
}
export default Logo
