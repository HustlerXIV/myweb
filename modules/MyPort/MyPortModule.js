import React from "react";
import styled from "styled-components";
import Carousel from "../../components/Carousel";
import { DivCenter, FlexCols, Topic } from "../../components/style";

function MyPortModule() {
  return (
    <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <SectionTitle>MY PORTFOLIO</SectionTitle>
      <Carousel />
    </div>
  );
}

const SectionTitle = styled.div`
  width: 300px;
  padding: 10px 20px;
  margin: 0px auto;
  font-size: 30px;
  font-weight: bold;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0px 80px rgba(0, 0, 0, 0.12);
  text-align: center;
`;

export default MyPortModule;
