import React from "react";
import Banner from "../../components/homepage/Banner";
import AboutMeModule from "../AboutMe/AboutMeModule";
import MyPortModule from "../MyPort/MyPortModule";
import SkillsModule from "./SkillsModule";

export default function HomaPageModule() {
  return (
    <>
      <Banner />
      <AboutMeModule />
      <SkillsModule />
      <MyPortModule />
    </>
  );
}
