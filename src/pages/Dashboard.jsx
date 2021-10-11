import React from "react";
import "./Dashboard.css"
import { Link } from "react-router-dom";


function Dashboard(){

    return (
        <>
        <div className="Dashboard">
            <div className="navbar">
                
            <Link to = "/movies">Movies</Link>
            <Link to = "/music">Music</Link>
            </div>
            <div className="title">

                <h1> Welcome, User</h1>
            </div>

        <div className="rMovies">
            <h1>Here are some recommended Movies</h1>
            <p>Movie 1</p>
            <p>Movie 2</p>
            <p>Movie 3</p>
            <p>Movie 4</p>
        </div>

        <div className="rMovies">
            <h1>Movies on your watchlist</h1>
            <p>Movie 1</p>
            <p>Movie 2</p>
            <p>Movie 3</p>
            <p>Movie 4</p>
        </div>

        <div className="rMovies">
            <h1>Your favorite Movies</h1>
            <p>Movie 1</p>
            <p>Movie 2</p>
            <p>Movie 3</p>
            <p>Movie 4</p>
        </div>
        </div>

        </>
    )
}

export default Dashboard