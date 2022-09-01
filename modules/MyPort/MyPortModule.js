import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Carousel from "@components/Carousel";
import { BlueButton, DivCenter, FlexCols, Topic } from "@components/style";

function MyPortModule({ projectData }) {
  return (
    <div
      id="my-projects"
      data-aos="fade-up"
      className="container mx-auto max-w-7xl px-6 sm:px-6 lg:px-8"
    >
      <SectionTitle>MY PROJECTS</SectionTitle>
      <Carousel data={projectData} />
      <ButtonContainer>
        <Link href="/my-projects">
          <BlueButton>SEE ALL PROJECTS</BlueButton>
        </Link>
      </ButtonContainer>
    </div>
  );
}

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SectionTitle = styled.div`
  width: auto;
  max-width: 400px;
  padding: 10px 20px;
  margin: 0px auto 0px auto;
  font-size: 30px;
  font-weight: bold;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0px 80px rgba(0, 0, 0, 0.12);
  text-align: center;
`;

export default MyPortModule;
