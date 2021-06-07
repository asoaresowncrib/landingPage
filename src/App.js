import React from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import BuyMain from "./Components/Pages/Buy/BuyMain";
import SellMain from "./Components/Pages/Sell/SellMain";
import SearchMain from "./Components/Pages/Search/SearchMain";
import Login from "./Components/Pages/Login/Login";

const fadeIn = keyframes`
0%{
  opacity: 0;
},
100%{
  opacity: 1;
}`;

const StyledApp = styled.div`
  .fadeInAnimation {
    animate: ${fadeIn} 1s ease-in 0s 1;
  }
  .startHidden {
    opacity: 0;
  }
`;
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
          <Route exact path="/register" component={Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/search" component={SearchMain}></Route>
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  );
};

export default App;
