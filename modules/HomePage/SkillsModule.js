import React from "react";
import ShowSkills from "@components/skills/ShowSkills";
import { MdWeb } from "react-icons/md";
import styled from "styled-components";
export default function SkillsModule() {
  return (
    <div
      data-aos="fade-up"
      className="container  mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
    >
      <Container>
        <ShowSkills skillList={SkillsData} />
        <ShowSkills skillList={SkillsData} headTitle="SOFT SKILLS" />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  max-height: 100%;
  margin-top: 50px;
  @media (max-width: 576px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

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
