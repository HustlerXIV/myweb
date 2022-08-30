import styled from "styled-components";

export const Topic = styled.div`
  font-size: ${(props) => (props.fs ? props.fs : "30px")};
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "black")};
  border-bottom: ${(props) => props.underline};
  width: ${(props) => props.width};
`;

export const SubTopic = styled.div`
  font-size: ${(props) => (props.fs ? props.fs : "20px")};
  font-weight: normal;
  width: ${(props) => props.width};
  border-bottom: ${(props) => props.underline};
  padding-bottom: ${(props) => props.pb};
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const Desc = styled.div`
  font-size: ${(props) => (props.fs ? props.fs : "14px")};
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

export const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  max-width: ${(props) => props.maxWidth};
`;

export const RedButton = styled.button`
  width: auto;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #f44336;
  color: #fff;
`;

export const NormalButton = styled.button`
  width: auto;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background-color: #008cba;
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }
`;
