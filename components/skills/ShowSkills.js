import React, { useState } from "react";
import styled from "styled-components";
import Skills from "./Skills";

export default function ShowSkills({
  headTitle = "HARD SKILLS",
  sectionFlex = "flex-start",
  skillList,
}) {
  const [open, setOpen] = useState(false);

  return (
    <BannerCard open={open} sectionFlex={sectionFlex}>
      <DetailContainer>
        <Title>{headTitle}</Title>
        <ButtonContainer sectionFlex={sectionFlex}>
          <Button onClick={() => setOpen(!open)}>
            {open ? "HIDE" : "SHOW"}
          </Button>
        </ButtonContainer>
      </DetailContainer>
      {open && <Skills dataList={skillList} />}
    </BannerCard>
  );
}

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
  min-height: 170px;

  transition: max-height 0.5s ease-in;
  background: #e5feff;
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
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  width: 100px;
`;
