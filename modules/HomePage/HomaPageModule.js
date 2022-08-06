import React from "react";
import Banner from "../../components/homepage/Banner";
import AboutMeModule from "../AboutMe/AboutMeModule";
import MyPortModule from "../MyPort/MyPortModule";

export default function HomaPageModule() {
  return (
    <>
      <Banner />
      <AboutMeModule />
      <MyPortModule />
    </>
  );
}
