import React from "react";
import styled from "styled-components";
import { FcNext, FcPrevious } from "react-icons/fc";
import { ResponsiveImage, Topic } from "../style";
function Banner() {
  return (
    <div style={{ position: "relative" }}>
      <div
        data-aos="fade-up"
        className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col gap-1 banner-height justify-between items-center sm:flex-row sm:gap-5">
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
            <div className="flex mt-5 gap-5">
              <a
                href="https://drive.google.com/file/d/1fthLkrVWtde99Fo_CBYdQmH1i-KFJbz1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="drop-shadow-lg text-white px-6 py-2 bg-subColor transition ease-out hover:shadow-2xl">
                  MY RESUME (PDF)
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1tZrdlxQAT60c_F850_wWELUHVjutwdN1/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button className="drop-shadow-lg text-white px-6 py-2 bg-transparent border-dashed border-2 border-subColor transition ease-out hover:shadow-2xl">
                  PORTFOLIO (PDF)
                </button>
              </a>
            </div>
          </div>
          <ResponsiveImage src="/me-right.png" maxWidth="400px" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
