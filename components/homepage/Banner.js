import React from "react";
import styled from "styled-components";
import { FcNext, FcPrevious } from "react-icons/fc";
import { PortButton, ResponsiveImage, ResumeButton, Topic } from "../style";
function Banner() {
  return (
    <div style={{ position: "relative" }}>
      <div
        data-aos="fade-down"
        className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
      >
        <BannerContainer className="flex flex-col gap-1 banner-height justify-between items-center sm:flex-row sm:gap-5">
          <div>
            <div className="flex items-center	gap-1 text-xl mb-3 text-white drop-shadow-lg sm:text-2xl lg:text-xl">
              <FcPrevious />
              OPEN TO WORK
              <FcNext />
            </div>
            <div className="text-4xl  my-5 text-white drop-shadow-lg sm:text-6xl">
              Hello, I am Napat Jaiyim
            </div>
            <div className="text-xl my-4 text-white drop-shadow-lg sm:text-2xl">
              SOFTWARE DEVELOPER
            </div>
            <div className="flex justify-between sm:justify-start mt-5 gap-5">
              <a
                href="https://drive.google.com/file/d/1YExNSvFmQQFQUWZiWAJls-z0AZdUf6xn/view"
                target="_blank"
                rel="noreferrer"
              >
                <ResumeButton>RESUME (PDF)</ResumeButton>
              </a>
              <a
                href="https://drive.google.com/file/d/1tZrdlxQAT60c_F850_wWELUHVjutwdN1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <PortButton>PORTFOLIO (PDF)</PortButton>
              </a>
            </div>
          </div>
          <ImgContainer>
            <ResponsiveImage src="/on-planet-people-01.png" maxWidth="400px" />
          </ImgContainer>
        </BannerContainer>
      </div>
    </div>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const BannerContainer = styled.div`
  background-image: url("/on-planet-people-01.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 97% -20%;

  @media (max-width: 1200px) {
    background-image: none;
  }

  @media (max-width: 640px) {
    background-image: url("/on-planet-people-01.png");
    background-repeat: no-repeat;
    background-size: 350px;
    background-position: 50% 200px;
    height: 500px;
  }

  @media (max-width: 450px) {
    background-repeat: no-repeat;
    background-size: 270px;
    background-position: 50% 200%;
  }
`;

export default Banner;
