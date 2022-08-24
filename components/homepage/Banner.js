import React from "react";
import styled from "styled-components";
import { Topic } from "../style";
function Banner() {
  return (
    <div style={{ position: "relative" }}>
      <TopCardAboutMe id="about-me">
        <Topic>ABOUT ME</Topic>
      </TopCardAboutMe>
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center"
          style={{ height: "600px" }}
        >
          <div style={{ marginBottom: "15%" }}>
            <div className="text-2xl mb-3">OPEN TO WORK</div>
            <div className="text-6xl">Hello, I am Napat Jaiyim</div>
            <div className="flex mt-5 gap-5">
              <button className="drop-shadow-lg text-white px-6 py-2 bg-subColor transition ease-out hover:shadow-2xl">
                SEE MY PORTFOLIO
              </button>
              <button className="drop-shadow-lg text-mainColor px-6 py-2 bg-transparent border-dashed border-2 border-mainColor transition ease-out hover:shadow-2xl">
                DOWNLOAD MY CV
              </button>
            </div>
          </div>
          {/* <BannerImage src="/me-right.png" /> */}
        </div>
      </div>
    </div>
  );
}

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
`;

const TopCardAboutMe = styled.div`
  width: auto;
  height: 100px;
  max-width: 1000px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0px auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 1024px) {
    width: 94%;
  }

  @media (max-width: 576px) {
    width: 96%;
  }
`;

export default Banner;
