import React from "react";
import styled from "styled-components";
import {
  Desc,
  DivCenter,
  DivWidth,
  SubTopic,
  Topic,
} from "../../components/style";
import TimeLine from "../../components/TimeLine";
import { BiCake } from "react-icons/bi";
import { MdMilitaryTech } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import DescWithIcon from "../../components/Form/DescWithIcon";

const MyInfoData = [
  {
    title: "10 April 1998 (24 years old)",
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

const MyEduData = [
  {
    title: "Bachelor's Degree 2016 - 2020 (GPA - 3.37 Second class honors)",
    icon: <BiCake />,
  },
];

function AboutMeModule() {
  return (
    <div
      data-aos="fade-up"
      className="container mx-auto mb-20 max-w-7xl px-2 sm:px-6 lg:px-8"
    >
      <FrameCard id="about-me" className="bg-normalColor shadow-2xl">
        <Topic style={{ margin: "0px auto" }}>ABOUT ME</Topic>
        <SectionContainer>
          <DivWidth maxWidth="430px">
            <SubTopic
              underline="3px solid #000"
              width="180px"
              style={{ marginBottom: "10px" }}
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
            <Desc>
              {`Bachelor's degree`}
              <br />
              Major FRENCH Minor International Relations
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
`;

export default AboutMeModule;
