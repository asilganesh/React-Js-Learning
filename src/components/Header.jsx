import { Link } from "react-router-dom"
import "../App.css"

const Header = () => {

    return (
       <nav>
        <Link to="/"> Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/user/asdf">User</Link>
       </nav>
    )
}

export default Header