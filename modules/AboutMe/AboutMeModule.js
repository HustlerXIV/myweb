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
    <div className="container mx-auto mb-20 max-w-7xl px-2 sm:px-6 lg:px-8">
      <FrameCard>
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
              <ListAboutMeContainer key={index}>
                <div style={{ marginRight: "10px" }}>{item.icon}</div>
                <ListAboutMe>{item.title}</ListAboutMe>
              </ListAboutMeContainer>
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
  padding: 0px 40px 40px 40px;
  gap: 30px;
  margin: 0px auto;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ListAboutMeContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 5px;
`;

const ListAboutMe = styled.div``;

export default AboutMeModule;
