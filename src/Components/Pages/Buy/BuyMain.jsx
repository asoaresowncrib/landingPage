import React, { useEffect } from "react";
import styled from "styled-components";
const StyledBuy = styled.div`
  height: 100vh;

  .buyerTitle {
    text-align: center;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: #03989e;
    margin: 4rem 0;
  }
`;

const BuyMain = () => {
  //Scrolls to Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledBuy>
      <h1 className="buyerTitle">Buyer Packages</h1>
    </StyledBuy>
  );
};

export default BuyMain;
