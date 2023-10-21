import React, { useState } from "react";
import styled from "styled-components";
import { BlueButton } from "../style";
import Skills from "./Skills";
import { FcNext, FcPrevious } from "react-icons/fc";
export default function ShowSkills({
  headTitle = "HARD SKILLS",
  sectionFlex = "flex-start",
  skillList,
  color = "#fff",
  isSkill = true,
}) {
  const [open, setOpen] = useState(false);

  return (
    <BannerCard
      open={open}
      sectionFlex={sectionFlex}
      className="shadow-inner drop-shadow-lg"
    >
      <DetailContainer>
        <Title>{headTitle}</Title>
        <ButtonContainer sectionFlex={sectionFlex}>
          <BlueButton onClick={() => setOpen(!open)}>
            {open ? "HIDE" : "SHOW"}
          </BlueButton>
        </ButtonContainer>
      </DetailContainer>
      {open && isSkill ? (
        <Skills color={color} dataList={skillList} />
      ) : (
        <ListContainer>
          {skillList.map((item, index) => (
            <SkillList key={index}>
              {!isSkill && <FcNext />}
              {item.title}
            </SkillList>
          ))}
        </ListContainer>
      )}
    </BannerCard>
  );
}

const ListContainer = styled.div`
  margin: 40px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillList = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: #fff;
  margin: 10px 0px;
`;

const BannerCard = styled.div`
  width: 480px;
  max-width: 600px;
  max-height: ${(props) => (props.open ? "1000px" : "170px")};
  padding: 30px;
  display: flex;
  justify-content: ${(props) => props.sectionFlex};
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  min-height: 175px;
  background-image: linear-gradient(
    to right,
    #213d73,
    #1c3f75,
    #164177,
    #0e4378,
    #02457a
  );
  transition: max-height 0.5s ease-in;
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 20px;
    width: auto;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
  color: #fff;
  margin: 0px auto;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;
