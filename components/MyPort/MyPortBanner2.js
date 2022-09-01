import React from "react";
import styled from "styled-components";
import { ResponsiveImage, Topic } from "../style";
function MyPortBanner2() {
  return (
    <div style={{ position: "relative" }}>
      <div
        data-aos="fade-right"
        className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-1 banner-height justify-evenly items-center sm:flex-row sm:gap-5">
          <div>
            <div className="text-4xl my-5 text-white drop-shadow-lg sm:text-6xl">
              Certificates
            </div>
            <div className="text-xl my-4 text-white drop-shadow-lg sm:text-2xl">
              All Certificates & Awards
            </div>
          </div>
          <ResponsiveImage src="/3-with-rocket.png" maxWidth="400px" />
        </div>
      </div>
    </div>
  );
}

const BannerContainer = styled.div`
  /* background-image: url("/on-planet-2.png");
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: 95% -50%; */
`;

export default MyPortBanner2;
