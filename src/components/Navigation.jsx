import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = ({children}) => {

  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/movies-reviews">Movies Reviews</Link>
            </li>
            <li>
                <Link to="/now-playing">Now Playing</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact-us">Contact</Link>
            </li>
        </ul>
    </nav>
  )

}

export default Navigation;