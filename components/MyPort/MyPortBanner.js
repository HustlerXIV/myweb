import React from "react";
import styled from "styled-components";

import {
  BannerTitle,
  ResponsiveImage,
  BannerDesc,
  BannerSubTitle,
  WidthFlex,
} from "../style";
function MyPortBanner() {
  return (
    <div style={{ position: "relative" }}>
      <div
        data-aos="fade-right"
        className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-1 banner-height justify-evenly items-center sm:flex-row sm:gap-5">
          <ResponsiveImage src="/on-planet-people-01.png" maxWidth="400px" />
          <div>
            <div className="text-4xl my-5 text-white drop-shadow-lg sm:text-6xl">
              Web Development
            </div>
            <div className="text-xl my-4 text-white drop-shadow-lg sm:text-2xl">
              Professional Works & Learning Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortBanner;
