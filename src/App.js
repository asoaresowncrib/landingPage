import React from "react";
import "./App.css";
import styled from "styled-components";

//Components
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Form from "./Components/Form";
import Footer from "./Components/Footer";

const StyledApp = styled.div``;
const App = () => {
  return (
    <StyledApp>
      <Nav />
      <Banner />
      <Main />
      <Form />
      <Footer />
    </StyledApp>
  );
};

export default App;
