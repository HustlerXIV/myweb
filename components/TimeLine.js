import React from "react";
import styled from "styled-components";
import { Desc } from "./style";

const experiences = [
  {
    name: "Internship (Graphic Designer)",
    year: "2020",
    total: "3 Months",
    company: "InterSite Co.,Ltd.",
    finisied: true,
  },
  {
    name: "Web Developer & Graphic Designer",
    year: "2019-2020",
    total: "1 Year",
    company: "Franco-Thai Chamber of Commerce",
    finisied: true,
  },
  {
    name: "Communication Coordinator",
    year: "2020-2021",
    total: "1 Year 2 Months",
    company: "Franco-Thai Chamber of Commerce",
    finisied: true,
  },
  {
    name: "Volunteer (Web Developer)",
    year: "2021-NOW",
    total: "1 Year 3 Months",
    company: "Soilfish Co.,Ltd.",
  },
  {
    name: "Software Developer",
    year: "2021-NOW",
    total: "9 Months",
    company: "Soilfish Co.,Ltd.",
  },
];

function TimeLine() {
  return (
    <div className="flex justify-center">
      <ul className="timeline">
        {experiences.map((item, index) => (
          <li key={index}>
            <Desc>{`${item.year} at ${item.company} (${item.total})`}</Desc>
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
