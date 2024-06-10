import Pagess from "./pages/Pagess"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import Logo from "./components/Logo"
import { Link } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={navStyle}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Search />
        <Category />
        <Pagess />
      </BrowserRouter>
    </div>
  )
}

const navStyle = {
  padding: "4rem 0rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  svg: {
    "font-size": "2rem"
  }
}
export default App
