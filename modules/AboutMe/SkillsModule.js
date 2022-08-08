import React from "react";
import styled from "styled-components";
import { MdWeb } from "react-icons/md";
import Skills from "../../components/Skills";

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

function SkillsModule() {
  return (
    <SectionContainer>
      {SkillsData.map((item, index) => (
        <div key={index}>
          <ListTitleContainer>
            <div style={{ marginRight: "10px" }}>{item.icon}</div>
            {item.mainTitle}
          </ListTitleContainer>
          <Skills dataList={item.data} />
        </div>
      ))}
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-top: 5px;
`;

export default SkillsModule;
