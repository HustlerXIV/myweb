import React from "react";
import styled from "styled-components";
import { Desc, DivCenter, SubTopic } from "../../components/style";

function AboutMeModule() {
  return (
    <div className="container mx-auto mb-20 max-w-7xl px-2 sm:px-6 lg:px-8">
      <FrameCard>
        <Desc margin="0px" align="justify">
          I am a multi-tasker who is very interested in French and other
          languages. I love the art of coding which is why I have chosen it as
          my primary interest in life, I like the concept of programming, I will
          never give up. I love to learn and develop new skills as I go. As long
          as I am developing new skills, the most important thing is to be able
          to solve problems.
        </Desc>
        <DivCenter>
          <SubTopic>MY EXPIRENCES</SubTopic>
        </DivCenter>
      </FrameCard>
    </div>
  );
}

const FrameCard = styled.div`
  width: 100%;
  height: 500px;
  max-width: 1000px;
  box-shadow: 0 50px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 0px 40px 30px 40px;
  gap: 30px;
  margin: 0px auto;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default AboutMeModule;
