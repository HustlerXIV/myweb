import React from "react";
import styled from "styled-components";
import { Desc } from "./style";
import { FcNext, FcPrevious } from "react-icons/fc";
import { dateDifference, getCurrentDate } from "@utils/date";

const experiences = [
  {
    name: "Software Developer",
    year: "Mar 2023 - NOW",
    startDate: "2023-03-01",
    endDate: getCurrentDate(),
    company: "Hokkaido Tourism Management",
    finished: false,
  },
  {
    name: "Software Developer",
    year: "Dec 2021 - Feb 2023",
    startDate: "2021-12-01",
    endDate: "2023-03-01",
    company: "Soilfish Co.,Ltd.",
    finished: true,
  },
  {
    name: "Web Developer (Volunteer)",
    year: "Oct 2020 - Mar 2023",
    startDate: "2020-10-01",
    endDate: "2023-03-01",
    company: "Scripture Union Thailand",
    finished: true,
  },
  {
    name: "Communication Coordinator",
    year: "Oct 2020 - Nov 2021",
    startDate: "2021-10-01",
    endDate: "2022-11-01",
    company: "Franco-Thai Chamber of Commerce",
    finished: true,
  },
  {
    name: "Graphic Designer (Internship)",
    year: "Jan - Mar 2020",
    startDate: "2020-01-01",
    endDate: "2020-04-01",
    company: "InterSite (Thailand) Co.,Ltd.",
    finished: true,
  },
];

function TimeLine() {
  return (
    <div className="flex justify-center">
      <ul className="timeline">
        {experiences.map((item, index) => (
          <li key={index}>
            <Desc style={{ color: "#B2B8BB" }}>{`${item.year} at ${
              item.company
            } (${dateDifference(item.startDate, item.endDate)})`}</Desc>
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
