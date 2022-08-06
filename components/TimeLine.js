import React from "react";
import styled from "styled-components";

const experiences = [
  {
    name: "Intership",
    year: "2020",
    total: "3 Months",
    finisied: true,
    color: "#fff",
  },
  {
    name: "Intership",
    year: "2020",
    total: "3 Months",
    finisied: true,
    color: "red",
  },
  {
    name: "Intership",
    year: "2020",
    total: "3 Months",
    finisied: false,
    color: "blue",
  },
];

function TimeLine() {
  return (
    <div className="flex gap-40 justify-center">
      {experiences.map((item, index) => (
        <>
          <div key={index} style={{ position: "relative" }}>
            {item.finisied && (
              <div className="progress">
                <div className="color"></div>
              </div>
            )}
            <div
              className="planet"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: item.color,
              }}
            >
              {!item.finisied && (
                <div style={{ position: "absolute", top: "-25%" }}>
                  <div className="contain-flag">
                    <div className="pole"></div>
                    <div className="flag"></div>
                  </div>
                </div>
              )}

              <div className="crater1"></div>
              <div className="crater2"></div>
              <div className="crater3"></div>

              <DetailContainer>test</DetailContainer>
              <Year>{item.year}</Year>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

const Year = styled.div`
  font-size: 20px;
  color: #fff;
  z-index: 100;
`;

const DetailContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 10px;
  background-color: #000;
`;

const Name = styled.div``;

export default TimeLine;
