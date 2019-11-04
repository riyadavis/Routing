import React from "react";
import NavBar from "../Components/Navbar";
import Cards from "../Pages/Cards";
import About from "../Pages/About";
import Home from "../Pages/Home";
import CardDetails from "../Pages/CardDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../Pages/Search";

const AppNavigator = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/cards/:id" component={CardDetails} />
        <Route path="/search/:keyword" component={Search} />
      </Switch>
    </Router>
  );
};
export default AppNavigator;
