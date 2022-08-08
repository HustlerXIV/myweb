import _ from "lodash";
import React from "react";
import styled from "styled-components";

export default function Skills({ dataList, test = "test" }) {
  console.log(test);
  return (
    <div>
      <Container>
        {_.defaultTo(dataList, [
          {
            logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
            title: "HTML",
          },
        ]).map((item, index) => (
          <SkillsCard key={index} bgImg={item.logo}>
            <SkillsTextBox>{item.title}</SkillsTextBox>
          </SkillsCard>
        ))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 10px;
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
  background-color: #29dde0;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
`;
