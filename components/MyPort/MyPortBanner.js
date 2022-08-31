import React from "react";

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
        <div className="flex flex-col gap-10 banner-height justify-between items-center sm:flex-row sm:gap-5 lg:gap-5">
          <ResponsiveImage src="/me-right.png" maxWidth="400px" />
          <div>
            <div className="text-4xl  my-5 text-white drop-shadow-lg sm:text-4xl lg:text-6xl">
              WEB DEVELOPMENT
            </div>
            <div className="text-xl my-4 text-white drop-shadow-lg sm:text-lg lg:text-2xl">
              Professional Works & Learning Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortBanner;
