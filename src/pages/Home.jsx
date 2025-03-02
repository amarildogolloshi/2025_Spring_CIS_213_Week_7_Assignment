import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="page page-home">
            <h1>Home</h1>
            
            <div className="home">
                <div>
                    <h1>Movies to Watch, Anytime Anywhere.</h1>
                    <Link to="/now-playing">Now Playing</Link>
                </div>
                
            </div>
        </div>
    )
    
}

export default Home;