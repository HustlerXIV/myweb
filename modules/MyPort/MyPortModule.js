import React from "react";
import Carousel from "../../components/Carousel";
import { FlexCols, Topic } from "../../components/style";

function MyPortModule() {
  return (
    <div
      className="container flex flex-cols mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
      style={{ height: "600px" }}
    >
      <Carousel />
    </div>
  );
}

export default MyPortModule;
