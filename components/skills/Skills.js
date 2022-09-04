import _ from "lodash";
import React from "react";
import styled from "styled-components";

export default function Skills({ dataList, maxWidth, color }) {
  return (
    <SectionContainer maxWidth={maxWidth}>
      {_.defaultTo(dataList, []).map((item, index) => (
        <div key={index}>
          <ListTitleContainer color={color}>
            <div style={{ marginRight: "10px" }}>{item.icon}</div>
            {item.mainTitle}
          </ListTitleContainer>
          <Container>
            {_.get(item, "data", []).map((item, index) => (
              <SkillsCard key={index} bgImg={item.logo}>
                <SkillsTextBox>{item.title}</SkillsTextBox>
              </SkillsCard>
            ))}
          </Container>
        </div>
      ))}
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: auto;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "480px")};
  margin: 0px auto;
  padding: 20px;
`;

const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${(p) => p.color};
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-start;
  padding: 10px 20px;

  @media (max-width: 1024px) {
    gap: 30px;
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    column-gap: 50px;
    justify-content: flex-start;
  }
`;

const SkillsCard = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url("${(props) => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const SkillsTextBox = styled.div`
  position: absolute;
  bottom: -40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: auto;
  background-color: #1b245a;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
`;
