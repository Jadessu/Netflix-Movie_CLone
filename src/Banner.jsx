import React, { useState, useEffect } from "react";
import axios from "./axios"
import requests from "./request";

function Banner(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)

            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1 )
            ]
            )
            return request
        }
        fetchData()
    }, [])
    return (
       <header>

       </header>
    )
}
export default Banner