import React from "react";
import styled from "styled-components";
import { Desc, DivCenter, SubTopic } from "../style";

function AboutMe() {
  return (
    <div className="container mx-auto mb-20 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="frame-card">
        <Desc margin="0px" align="justify">
          I am a multi-tasker who is very interested in French and other
          languages. I love the art of coding which is why I have chosen it as
          my primary interest in life, I like the concept of programming, I will
          never give up. I love to learn and develop new skills as I go. As long
          as I am developing new skills, the most important thing is to be able
          to solve problems.
        </Desc>
        <div className="div-center">
          <SubTopic>MY EXPIRENCES</SubTopic>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
