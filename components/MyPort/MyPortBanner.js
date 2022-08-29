import React from "react";
import styled from "styled-components";
import { Topic } from "../style";
function MyPortBanner() {
  return (
    <div style={{ position: "relative" }}>
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center"
          style={{ height: "600px" }}
        >
          <h1>img</h1>
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

export default MyPortBanner;
