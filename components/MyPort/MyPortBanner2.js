import React from "react";
import styled from "styled-components";
import { ResponsiveImage, Topic } from "../style";
function MyPortBanner2() {
  return (
    <div style={{ position: "relative" }}>
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center"
          style={{ height: "600px" }}
        >
          <div data-aos="fade-left">
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
          <ResponsiveImage
            data-aos="fade-left"
            src="/me-right.png"
            maxWidth="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default MyPortBanner2;
