import React from "react";
import Banner from "../../components/homepage/Banner";
import AboutMeModule from "../AboutMe/AboutMeModule";
import ContactFormModule from "../ContactForm/ContactFormModule";
import MyPortModule from "../MyPort/MyPortModule";
import SkillsModule from "./SkillsModule";

export default function HomaPageModule({ projectData }) {
  return (
    <>
      <Banner />
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <AboutMeModule />
        <SkillsModule />
        <MyPortModule projectData={projectData} />
        <ContactFormModule />
      </div>
    </>
  );
}
