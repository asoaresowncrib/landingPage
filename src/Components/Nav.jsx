import React from "react";
import styled from "styled-components";
import noSloganLogo from "../Assets/logoNoSlogan.png";
import { IoPersonSharp } from "react-icons/io5";
const StyledNav = styled.div`
  .navLinks {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    list-style: none;
  }

  .navLink {
    text-decoration: none;
    color: inherit;
    font-family: Montserrat;
    font-weight: bolder;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.1s ease;
    &:hover {
      color: #03989e;
    }
    animation: 1s ease-in 0s 1 linksFadeIn;
  }

  .leftNav {
    display: flex;
    align-items: center;
    .navLink {
      padding: 0 1rem;
    }
  }

  .rightNav {
    display: flex;
    align-items: center;
    
    li{
      padding 0 1rem;
    }

    .navPerson{
      font-size: 2rem;
    }

  }

  .logoContainer {
    margin-top: 0.5rem;
    max-width: 150px;
    .logoImg {
      width: 100%;
      height: auto;
    }
  }

  @keyframes linksFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <ul className="navLinks">
        <div className="leftNav">
          <li className="navLink">
            <a>Home</a>
          </li>
          <li className="navLink">
            <a>For Buyers</a>
          </li>
          <li className="navLink">
            <a>For Sellers</a>
          </li>
        </div>
        <div className="logoContainer">
          <img className="logoImg" src={noSloganLogo} alt="Logo" />
        </div>
        <div className="rightNav">
          <li className="navLink">
            <a>Login</a>
          </li>
          <li className="navLink">
            <a className="navPerson">
              <IoPersonSharp />
            </a>
          </li>
        </div>
      </ul>
    </StyledNav>
  );
};

export default Nav;
