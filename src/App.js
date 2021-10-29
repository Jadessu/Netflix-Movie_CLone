import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from './pages/Movies';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
     
     
<Movies/>
    </div>
  );
}

export default App;
