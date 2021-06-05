import React from "react";
import styled from "styled-components";
import placeholderVideo from "../Assets/placeholderVideo.mp4";

const StyledBanner = styled.div`
  min-height: 750px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  animation: 1s ease-out 0s 1 slideUp;
  // background: #ffbd59;

  > * {
    flex-basis: 100%;
    text-align: center;
  }

  .bannerTitle {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 4rem;
    color: #03989e;
  }

  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .bannerVideoContainer {
    position: relative;
  }

  .bannerVideo {
    object-fit: cover;
    width: 80%;
    height: 80%;
  }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <h1 className="bannerTitle">
        Take A Look At What's <br />
        To Come Soon:
      </h1>
      <div className="bannerVideoContainer">
        <video className="bannerVideo" controls>
          <source src={placeholderVideo} />
        </video>
      </div>
    </StyledBanner>
  );
};

export default Banner;
