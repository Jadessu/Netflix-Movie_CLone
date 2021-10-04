import { useState, useEffect } from "react"
import React from "react"
import axios from "./axios"



function Row({ title, fetchUrl }){
    const [movies, setMovies] = useState([])
    const imageUrl = "https://image.tmdb.org/t/p/w185";

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
                  <img src={imageUrl +  movie.poster_path} alt={movie.name}/>
                  
              ))}

          </div>

       
        </div>

    )
}
export default Row