import { getSuggestedQuery } from "@testing-library/react";
import React, {useState} from "react";
import './SearchMovies.css';

function SearchMovies(){

    const [movie, setMovie] = useState(''); 

    const [movieList, setMovieList] = useState([]);

    const searcher= async (e)=>{
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie/?api_key=61a9c0f2bb31a95176ce1d2d213ef162&language=en-US&query=${movie}&page=1&include_adult=false`;

        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovieList(data.results);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <form className="form" onSubmit={searcher}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input 
                type="text" name="query" placeholder="Search for Movies"
                value={movie} onChange={(e)=> setMovie(e.target.value)}></input>
                <button className="button" type="submit">Submit</button>
            </form>
            <div className="cardsList">
                {movieList.filter(film => film.poster_path).map(film => (
                    <div className="card" key={film.id}>
                        <img className="card-image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${film.poster_path}`} alt={film.title}/>
                        <div className="card-content">
                            <h3 className="card-title">{film.title}</h3>
                            <p><small>RELEASE DATE : {film.release_date}</small></p>
                            <p><small>RATING : {film.vote_average}</small></p>
                            <p className="card-desc">{film.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchMovies