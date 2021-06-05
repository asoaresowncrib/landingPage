import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const StyledForm = styled.div`
  max-width: 900px;
  margin: 0 auto;

  .formTitle {
    font-size: 3rem;
    font-family: Poppins, sans-serif;
    text-align: center;
    color: #03989e;
  }

  .socials {
    display: flex;
  }
`;

const Form = () => {
  return (
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
        <div className="nameInput">
          <input type="text" placeholder="Name" />
        </div>
        <div className="emailInput">
          <input type="email" placeholder="Email" />
        </div>
        <div className="subjectInput">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="messageInput">
          <input type="textarea" placeholder="Type your message here..." />
        </div>
      </form>
    </StyledForm>
  );
};

export default Form;
