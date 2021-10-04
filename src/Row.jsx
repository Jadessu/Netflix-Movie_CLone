import { useState, useEffect } from "react"
import React from "react"
import axios from "./axios"



function Row({ title, fetchUrl }){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
           setMovies(request.data.results)
        }
        fetchData()
        // Anytime the fetch is dependant on any props, those props must be passed as a dependancy.
    }, [fetchUrl])


    return (
        <div>
          <h2>{title}</h2>

        {/* container -> poster */}
        </div>

    )
}
export default Row