import MovieCard from "./MovieCard";

import {STORE} from "../../../public/data"

const Movies = () => {



    return (
        <div className="movies">
            {
                STORE.map( store => (
                    <MovieCard key={store.id} store={store} />
                ) )
            }
        </div>
        
    )
}

export default Movies;