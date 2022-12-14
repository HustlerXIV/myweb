import React from "react";
import styled from "styled-components";
import {
  Desc,
  NormalButton,
  RedButton,
  ResponsiveImage,
  SubTopic,
  Topic,
} from "@components/style";
import Skills from "@components/skills/Skills";

import Link from "next/link";
import _ from "lodash";

export default function ProjectModule({ data }) {
  const title = _.get(data, "title", "");
  const type = _.get(data, "type", "");
  const desc = _.get(data, "desc", "");
  const img = _.get(data, "img", "");

  const utilities = _.get(data, "utilities", []);
  const demo = _.get(data, "demo", "");
  const isPort = _.get(data, "isPort", false);

  return (
    <Container>
      <Left data-aos="fade-right">
        <ResponsiveImage
          TBmaxWidth="800px"
          MBmaxWidth="500px"
          MB1maxWidth="500px"
          src={img}
        />
      </Left>
      <Right>
        <Card>
          <HeadContainer>
            <div>
              <SubTopic style={{ color: "#D38BDC" }} weight="normal" fs="20px">
                {type}
              </SubTopic>
              <Topic fs="40px">{title}</Topic>
            </div>
            {isPort && (
              <a href={demo} target="_blank" rel="noreferrer">
                <NormalButton disabled={demo === "" ? true : false}>
                  VIEW WEB
                </NormalButton>
              </a>
            )}
          </HeadContainer>

          <Desc style={{ marginTop: "20px" }} fs="20px">
            {desc}
          </Desc>
        </Card>
        {isPort && (
          <SkillCard>
            <Skills maxWidth="auto" dataList={utilities} />
          </SkillCard>
        )}

        <ButtonContainer>
          <Link href="/my-projects">
            <RedButton>BACK TO ALL PROJECTS</RedButton>
          </Link>
        </ButtonContainer>
      </Right>
    </Container>
  );
}

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 750px) {
    justify-content: flex-start;
  }
`;

const Left = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

const Right = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  width: 100%;
  height: auto;
  padding: 40px;
`;

const SkillCard = styled.div`
  background-color: #fff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  width: 100%;
  height: auto;
  padding: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;
