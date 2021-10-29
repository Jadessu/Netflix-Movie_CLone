 import axios from "../axios";
 import requests from "../request";
 export async function fetchData(category) {
    const request = await axios.get(requests[category]);
    const movieResult = await request.data.results
    console.table(movieResult);
    return movieResult
 }