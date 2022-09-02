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
        <ShowSkills
          skillList={SoftSkill}
          isSkill={false}
          headTitle="SOFT SKILLS"
        />
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
        logo: "/hardskills/html.png",
        title: "HTML",
      },
      {
        logo: "/hardskills/css.jpeg",
        title: "CSS",
      },
      {
        logo: "/hardskills/js.svg.png",
        title: "JavaScript",
      },
      {
        logo: "/hardskills/php.png",
        title: "PHP",
      },
      {
        logo: "/hardskills/mysql.png",
        title: "MySQL",
      },
      {
        logo: "/hardskills/react.png",
        title: "ReactJs",
      },
      {
        logo: "/hardskills/nextjs.png",
        title: "NextJs",
      },
      {
        logo: "/hardskills/nestjs.png",
        title: "NestJs",
      },
      {
        logo: "/hardskills/kotlin.jpeg",
        title: "Kotlin",
      },
      {
        logo: "/hardskills/docker.png",
        title: "Docker",
      },
      {
        logo: "/hardskills/cypress.png",
        title: "CyPress",
      },
    ],
  },
  {
    mainTitle: "Photo & Video Edition",
    icon: <MdWeb />,
    data: [
      {
        logo: "/hardskills/photoshop.jpeg",
        title: "Photoshop",
      },
      {
        logo: "/hardskills/ai.jpeg",
        title: "Illustrator",
      },
      {
        logo: "/hardskills/ae.png",
        title: "After Effect",
      },
    ],
  },
];

const SoftSkill = [
  {
    title: "Time management skills",
  },
  {
    title: "Analytical thinking",
  },
  {
    title: "Critical Thinking and Problem solving",
  },
  {
    title: "Teamwork",
  },
  {
    title: "Eager to learn new things",
  },
];
