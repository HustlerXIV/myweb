import React from "react";
import styled from "styled-components";
import { Desc, ResponsiveImage } from "./style";
import { FcNext, FcPrevious } from "react-icons/fc";

const experiences = [
  {
    name: "Graphic Designer (Internship)",
    year: "Jan - Mar 2020",
    total: "3 Months",
    company: "InterSite (Thailand) Co.,Ltd.",
    finished: true,
  },
  {
    name: "Web Developer & Graphic Designer",
    year: "2019-2020",
    total: "1 Year",
    company: "Self employed",
    finished: true,
  },
  {
    name: "Communication Coordinator",
    year: "Oct 2020-2021",
    total: "1 Year 2 Months",
    company: "Franco-Thai Chamber of Commerce",
    finished: true,
  },
  {
    name: "Web Developer (Volunteer)",
    year: "Oct 2020 - Feb 2023",
    total: "2 Years 6 Months",
    company: "Scripture Union Thailand",
    finished: true,
  },
  {
    name: "Software Developer",
    year: "Dec 2021 - Feb 2023",
    total: "1 Year 4 Months",
    company: "Soilfish Co.,Ltd.",
    finished: true,
  },
  {
    name: "Software Developer",
    year: "Mar 2023 - NOW",
    total: "2 Months",
    company: "Hokkaido Tourism Management",
    finished: false,
  },
];

function TimeLine() {
  return (
    <div className="flex justify-center">
      <ul className="timeline">
        {experiences.map((item, index) => (
          <li key={index}>
            <Desc
              style={{ color: "#B2B8BB" }}
            >{`${item.year} at ${item.company} (${item.total})`}</Desc>
            <TextContainer>
              <Text>{item.name}</Text>
              {!item.finished && (
                <>
                  <FcPrevious />
                  <Text>NOW</Text>
                  <FcNext />
                </>
              )}
            </TextContainer>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Text = styled.div`
  font-size: 18px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export default TimeLine;
