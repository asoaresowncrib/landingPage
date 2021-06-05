import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import BuyMain from "./Components/Pages/Buy/BuyMain";
import SellMain from "./Components/Pages/Sell/SellMain";

const StyledApp = styled.div``;
const App = () => {
  return (
    <Router>
      <StyledApp>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Banner />
            <Main />
            <Form />
          </Route>
          <Route exact path="/buy">
            <BuyMain />
          </Route>
          <Route exact path="/sell">
            <SellMain />
          </Route>
          <Route exact path="/register"></Route>
          <Route exact path="/login"></Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  );
};

export default App;
