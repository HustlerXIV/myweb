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
    finisied: true,
  },
  {
    name: "Web Developer & Graphic Designer",
    year: "2019-2020",
    total: "1 Year",
    company: "Self employed",
    finisied: true,
  },
  {
    name: "Communication Coordinator",
    year: "Oct 2020-2021",
    total: "1 Year 2 Months",
    company: "Franco-Thai Chamber of Commerce",
    finisied: true,
  },
  {
    name: "Web Developer (Volunteer)",
    year: "Oct 2020-NOW",
    total: "2 Years 5 Months",
    company: "Soilfish Co.,Ltd.",
    finisied: false,
  },
  {
    name: "Software Developer",
    year: "Dec 2021-NOW",
    total: "1 Year 3 Months",
    company: "Soilfish Co.,Ltd.",
    finisied: false,
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
              {!item.finisied && (
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
