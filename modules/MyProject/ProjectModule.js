import React from "react";
import styled from "styled-components";
import {
  Desc,
  RedButton,
  ResponsiveImage,
  SubTopic,
  Topic,
} from "../../components/style";
import Skills from "../../components/skills/Skills";
import { MdWeb } from "react-icons/md";
import Link from "next/link";

const SkillsData = [
  {
    mainTitle: "Web Development",
    icon: <MdWeb />,
    data: [
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "HTML",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "CSS",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "JavaScript",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "PHP",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "MySQL",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "ReactJs",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "NextJs",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "NestJs",
      },
      {
        logo: "https://blog.urbanpiper.com/content/images/2021/06/logo-react.png",
        title: "Kotlin",
      },
    ],
  },
];

export default function ProjectModule() {
  return (
    <Container>
      <Left data-aos="fade-right">
        <ResponsiveImage src="/me-right.png" />
      </Left>
      <Right data-aos="fade-left">
        <Card>
          <SubTopic fs="25px">Test</SubTopic>
          <Topic fs="40px">Test</Topic>
          <Desc fs="20px">test</Desc>
        </Card>
        <SkillCard>
          <Skills maxWidth="auto" dataList={SkillsData} />
        </SkillCard>
        <Link href="/my-projects">
          <RedButton>Back to see all projects</RedButton>
        </Link>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  width: 100%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SkillCard = styled.div`
  background-color: #fff;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  width: 100%;
  height: auto;
  padding: 40px;
`;
