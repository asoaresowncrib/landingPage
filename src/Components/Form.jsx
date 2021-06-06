/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";

const StyledForm = styled.div`
  max-width: 1000px;
  margin: 5rem auto 0 auto;

  .formTitle {
    font-size: 3rem;
    font-family: Poppins, sans-serif;
    text-align: center;
    color: #03989e;
  }

  .socials {
    display: flex;
    justify-content: center;
    color: #ffc983;
    padding: 1rem;

    a {
      cursor: pointer;
      margin: 0 1rem;
    }
  }

  .infoForm {
    display: grid;
    grid-template-columns: 1fr;

    .input {
      border: none;
      outline: none;
      border-bottom: 1px solid #03989e;
      padding: 1rem;
      margin: 0.5rem;
      width: 100%;

      font-size: 1.2em;
      font-family: Open Sans, sans-serif;

      &:focus {
        border: 1px solid #03989e;
      }
    }

    .twoColumns {
      display: flex;
    }

    .submitInput {
      margin: 1rem auto;
      width: 50%;
      cursor: pointer;
      outline: none;
      font-size: 2rem;
      font-family: Poppins, sans-serif;
      background: white;
      border: 2px solid #03989e;
      transition: all 0.25s ease-in;

      &:hover {
        background: #03989e;
        color: #ffc983;
      }
    }
  }
`;

const Form = () => {
  return (
    <Fade bottom>
      <StyledForm>
        <h1 className="formTitle">For More Infomation</h1>
        <div className="socials">
          <a>
            <FaFacebookF />
          </a>
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaLinkedinIn />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaPinterest />
          </a>
        </div>
        <form className="infoForm" action="">
          <div className="twoColumns">
            <input type="text" className="input nameInput" placeholder="Name" />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="000-000-0000"
              className="input phoneInput"
            />
          </div>
          <input
            type="email"
            className="input emailInput"
            placeholder="Email"
          />
          <input
            type="text"
            className="input subjectInput"
            placeholder="Subject"
          />
          <textarea
            rows="5"
            className="input messageInput"
            placeholder="Type your message here..."
          />
          <input type="submit" name="Submit" className="submitInput" />
        </form>
      </StyledForm>
    </Fade>
  );
};

export default Form;
