/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
  height: 70vh;
  display: grid;
  place-items: center;

  .loginContainer {
    display: flex;
    flex-flow: column;

    padding: 5rem;
    // border: 2px solid black;
    border-radius: 1.5rem;

    > * {
      margin: 1rem;
    }
  }

  .inputCont {
    border: none;
    outline: none;
    border-bottom: 1px solid #03898e;
    padding: 10px 20px;
    transition: all 100ms ease;

    &:focus {
      border: 1px solid #03898e;
    }
  }

  .loginLinks {
    a {
      text-decoration: none;
      color: inherit;
      display: block;
    }

    > * {
      margin: 1rem;
    }
  }

  .loginTitle {
    color: #03989e;
  }
`;

const Login = () => {
  return (
    <StyledLogin>
      <div className="loginContainer">
        <h1 className="loginTitle">LOGIN:</h1>
        <div className="emailContainer">
          <input className="inputCont" placeholder="Email" type="email" />
        </div>
        <div className="passContainer ">
          <input className="inputCont" placeholder="Password" type="password" />
        </div>
        <div className="loginLinks">
          <a href="">Register</a>
          <a href="">Forgot Password?</a>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
