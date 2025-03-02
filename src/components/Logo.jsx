import { Link } from "react-router-dom";
import imgMovies from "../assets/movies.png"

const Logo = () => {
    return(
        <div className="logo">
            <Link to="/">
                <img src={imgMovies} alt="Movie Logo" />
            </Link>
        </div>
    )
}

export default Logo;