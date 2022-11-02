import React from "react";
import styled from "styled-components";
import { Desc } from "./style";

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
    total: "2 Years 2 Months",
    company: "Soilfish Co.,Ltd.",
  },
  {
    name: "Software Developer",
    year: "Dec 2021-NOW",
    total: "1 Year",
    company: "Soilfish Co.,Ltd.",
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
            <Text>{item.name}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Text = styled.div`
  font-size: 18px;
`;

export default TimeLine;
