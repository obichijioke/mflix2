import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./components/pages/MovieDetails";
import TvDetails from "./components/pages/TvDetails";
import TvSeries from "./components/pages/TvSeries";
import Movies from "./components/pages/Movies";
import MenuBar from "./components/layouts/menu/MenuBar";
import MovieState from "./context/movie/MovieState";
import "./App.css";
import "./assets/styles/app.css";

function App() {
  return (
    <MovieState>
      <Router>
        <div className="relative bg-black w-full text-white box-border">
          <div className="container relative bg-dark-800">
            <MenuBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie/:name" exact component={MovieDetails} />
              <Route path="/tv/:name" exact component={TvDetails} />
              <Route path="/tvs/" exact component={TvSeries} />
              <Route path="/movies/" exact component={Movies} />
            </Switch>
          </div>
        </div>
      </Router>
    </MovieState>
  );
}

export default App;
