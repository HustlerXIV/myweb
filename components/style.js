import styled from "styled-components";

export const Topic = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const SubTopic = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: ${(props) => props.width};
  border-bottom: ${(props) => props.underline};
  padding-bottom: ${(props) => props.pb};
`;

export const Desc = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  text-indent: ${(props) => props.indent};
`;

export const DivCenter = styled.div`
  margin: 0px auto 0px auto;
`;

export const FlexCols = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivWidth = styled.div`
  width: 100%;
  height: auto;
  max-width: ${(props) => props.maxWidth};
`;
