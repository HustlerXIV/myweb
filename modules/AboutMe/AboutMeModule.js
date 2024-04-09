import React from "react";
import styled from "styled-components";
import {
  Desc,
  DivWidth,
  ResponsiveImage,
  SubTopic,
  Topic,
} from "@components/style";
import TimeLine from "@components/TimeLine";
import { BiCake } from "react-icons/bi";
import { MdMilitaryTech } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import DescWithIcon from "@components/Form/DescWithIcon";
import { FcNext, FcPrevious } from "react-icons/fc";

const MyInfoData = [
  {
    title: "10 April 1998 (26 years old)",
    icon: <BiCake />,
  },
  {
    title: "Bangkok, Thailand",
    icon: <HiOutlineLocationMarker />,
  },
  {
    title: "Exempted from military service",
    icon: <MdMilitaryTech />,
  },
];

function AboutMeModule() {
  return (
    <div
      className="container mx-auto mb-20 max-w-7xl px-6 sm:px-6 lg:px-8"
      id="about-me"
    >
      <FrameCard className="bg-normalColor shadow-2xl">
        <AbsoluteDiv>
          <ResponsiveImage maxWidth="430px" src="/3-with-rocket.png" />
        </AbsoluteDiv>
        <Topic
          style={{
            margin: "0px auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FcPrevious />
          ABOUT ME <div style={{ color: "#2096F3", marginLeft: "5px" }}>/</div>
          <FcNext />
        </Topic>
        <SectionContainer>
          <DivWidth maxWidth="430px">
            <SubTopic
              underline="3px solid #000"
              width="180px"
              style={{
                marginBottom: "10px",
              }}
            >
              MY INFORMATION
            </SubTopic>
            {MyInfoData.map((item, index) => (
              <DescWithIcon key={index} title={item.title} icon={item.icon} />
            ))}
            <SubTopic
              underline="3px solid #000"
              width="180px"
              style={{ margin: "20px 0px 10px 0px" }}
            >
              {`HONOR & AWARD`}
            </SubTopic>
            <Desc>
              {`In 2020, 1st place Thesis Competition, Faculty of Liberal Arts, in
              the topic of "Creating a French language teaching website for
              beginners"`}
            </Desc>
          </DivWidth>
          <div>
            <SubTopic
              underline="3px solid #000"
              width="160px"
              style={{ margin: "0px 0px 10px 0px" }}
            >
              MY EDUCATION
            </SubTopic>
            <Desc margin="0 0 16px 0">
              {`Master's degree`}
              <br />
              in M.Sc Software Engineering
              <br />
              Southeast Asia University
              <br />
              Expected Graduation: 2025
            </Desc>
            <Desc>
              {`Bachelor's degree`}
              <br />
              in FRENCH
              <br />
              Faculty of Liberal Arts, Rangsit University, Pathumthani
              (Thailand) 2016 - 2020 (GPA - 3.37 Second class honors)
            </Desc>

            <SubTopic
              underline="3px solid #000"
              width="180px"
              style={{ margin: "20px 0px" }}
            >
              MY EXPEREINCES
            </SubTopic>
            <TimeLine />
          </div>
        </SectionContainer>
      </FrameCard>
    </div>
  );
}

const SectionContainer = styled.div`
  display: flex;
  gap: 50px;
  flex-direction: row;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FrameCard = styled.div`
  width: 100%;
  height: auto;
  max-width: 1000px;
  box-shadow: 0 0px 80px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 30px;
  margin: 0px auto;
  border-radius: 10px;
  background-color: #f9f9f9;
  position: relative;

  /* background-image: url("/3-with-rocket.png");
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: -10% 120%; */
`;

const AbsoluteDiv = styled.div`
  position: absolute;
  bottom: -10%;
  left: -10%;
  z-index: 0;

  @media (max-width: 580px) {
    display: none;
  }
`;

export default AboutMeModule;
