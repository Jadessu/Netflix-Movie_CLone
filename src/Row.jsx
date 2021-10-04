import { useState, useEffect } from "react"
import React from "react"
import axios from "./axios"
import "./Row.css"



function Row({ title, fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([])
    const imageUrl = "https://image.tmdb.org/t/p/original";
;

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
           setMovies(request.data.results)
           console.log(movies)
        }
        fetchData()
        // Anytime the fetch is dependant on any props, those props must be passed as a dependancy.
    }, [fetchUrl])


    return (
        <div className="row">   
          <h2>{title}</h2>
          <div className="row__posters">
              {movies.map( movie => (
                  <img key={movie.id}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                  src={isLargeRow ? imageUrl +  movie.poster_path : imageUrl + movie.backdrop_path}
                   alt={movie.name}/>
                  
              ))}

          </div>

       
        </div>

    )
}
export default Row