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
      <h1> BRUV, WHEN YOU GONE GIVE ME MY HUG </h1>
     
      <Router>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movies" exact component={Movies} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
