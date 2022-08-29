import React from "react";
import styled from "styled-components";
import { ResponsiveImage, Topic } from "../style";
function Banner() {
  return (
    <div style={{ position: "relative" }}>
      <div
        data-aos="fade-up"
        className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
      >
        <div
          className="flex justify-between items-center"
          style={{ height: "600px" }}
        >
          <div>
            <div className="text-2xl mb-3 text-white drop-shadow-lg">
              OPEN TO WORK
            </div>
            <div className="text-6xl my-5 text-white drop-shadow-lg">
              Hello, I am Napat Jaiyim
            </div>
            <div className="text-2xl my-4 text-white drop-shadow-lg">
              SOFTWARE DEVELOPER
            </div>
            <div className="flex mt-5 gap-5">
              <button className="drop-shadow-lg text-white px-6 py-2 bg-subColor transition ease-out hover:shadow-2xl">
                SEE MY PORTFOLIO
              </button>
              <button className="drop-shadow-lg text-cleanColor px-6 py-2 bg-transparent border-dashed border-2 border-cleanColor transition ease-out hover:shadow-2xl">
                DOWNLOAD MY CV (PDF)
              </button>
            </div>
          </div>
          <ResponsiveImage src="/me-right.png" maxWidth="400px" />
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

export default Banner;
