import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { Topic } from "./style";

const Loading = ({ title }) => (
  <Section className="bg-mainColor bg-opacity-50">
    <Article>
      <ReactLoading type="spinningBubbles" color="#fff" />
      <Topic style={{ color: "#fff", marginTop: "20px" }}>{title}</Topic>
    </Article>
  </Section>
);

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Prop = styled.h2`
  color: #fff;
  font-size: 20px;
`;

export default Loading;
