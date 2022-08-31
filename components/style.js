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

  @media (max-width: 1024px) {
    max-width: ${(props) => props.TBmaxWidth};
  }

  @media (max-width: 750px) {
    max-width: 300px;
  }

  @media (max-width: 576px) {
    max-width: ${(props) => props.MBmaxWidth};
  }
`;

export const RedButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: #f44336;
  color: #fff;
  filter: drop-shadow(2px 2px 2px #f44336);
`;

export const NormalButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: #4709a0;
  filter: drop-shadow(2px 2px 2px #2c0169);
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }
`;

export const BlueButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: #00b2ec;
  filter: drop-shadow(2px 2px 2px #00b2ec);
  border: 2px solid #00b2ec;
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }
`;

export const TransButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid #fff;
  filter: drop-shadow(2px 2px 2px #fff);

  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }
`;

export const BannerTitle = styled.div`
  width: auto;
  color: #fff;
  font-size: 4vw;
  word-wrap: break-word;
  @media (max-width: 640px) {
    font-size: 8vw;
  }
`;

export const BannerSubTitle = styled.div`
  width: auto;
  color: #fff;
  font-size: 1.5vw;
  word-wrap: break-word;
  @media (max-width: 640px) {
    font-size: 1vw;
  }
`;

export const BannerDesc = styled.div`
  width: auto;
  color: #fff;
  font-size: 1vw;
  word-wrap: break-word;
  @media (max-width: 640px) {
    font-size: 0.5vw;
  }
`;

export const WidthFlex = styled.div`
  width: 50%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
