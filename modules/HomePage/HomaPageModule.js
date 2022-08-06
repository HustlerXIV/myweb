import React from "react";
import AboutMe from "../../components/homepage/AboutMe";
import Banner from "../../components/homepage/Banner";
import MyProjects from "../../components/homepage/MyProjects";

export default function HomaPageModule() {
  return (
    <>
      <Banner />
      <AboutMe />
      <MyProjects />
    </>
  );
}
