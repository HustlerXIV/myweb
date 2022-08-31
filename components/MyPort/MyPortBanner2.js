import React from "react";
import styled from "styled-components";
import { ResponsiveImage, Topic } from "../style";
function MyPortBanner2() {
  return (
    <div style={{ position: "relative" }}>
      <div className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-1 banner-height justify-between items-center sm:flex-row sm:gap-5"
        >
          <div>
            <div className="text-4xl  my-5 text-white drop-shadow-lg sm:text-6xl">
              CERTIFICATES
            </div>
            <div className="text-xl my-4 text-white drop-shadow-lg sm:text-2xl">
              My Certificates and Awards
            </div>
          </div>
          <ResponsiveImage
            data-aos="fade-right"
            src="/me-right.png"
            maxWidth="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default MyPortBanner2;
