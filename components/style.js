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
  display: flex;
  align-items: center;
  gap: 5px;
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
  transform: ${(props) => props.transform};

  @media (max-width: 1024px) {
    max-width: ${(props) => props.TBmaxWidth};
  }

  @media (max-width: 750px) {
    max-width: ${(props) => (props.MB1maxWidth ? props.MB1maxWidth : "300px")};
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
  filter: drop-shadow(3px 3px 0px #ff6d63);

  &:hover {
    background-color: #ff6d63;
    filter: drop-shadow(3px 3px 0px #f44336);
    transition: 0.3s all ease-out;
  }
`;

export const NormalButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: #4709a0;
  filter: drop-shadow(3px 3px 0px #9246ff);
  color: #fff;

  &:hover {
    background-color: #9246ff;
    filter: drop-shadow(3px 3px 0px #4709a0);
    transition: 0.3s all ease-out;
  }

  &:disabled {
    background-color: #e7e7e7;
    filter: drop-shadow(3px 3px 0px #e7e7e7);
    color: #aaaaaa;
    cursor: not-allowed;
  }
`;

export const BlueButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: #00b2ec;
  filter: drop-shadow(3px 3px 0px #4ed3ff);
  border: 2px solid #00b2ec;
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4ed3ff;
    filter: drop-shadow(3px 3px 0px #00b2ec);
    transition: 0.3s all ease-out;
  }
`;

export const TransButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background-color: #1b255a;

  border: 2px solid #fff;
  filter: drop-shadow(3px 3px 0px #f44336);
  color: #fff;

  &:hover {
    background-color: #fff;
    color: black;
    filter: drop-shadow(3px 3px 0px #f44336);
    transition: 0.3s all ease-out;
  }

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }
`;

export const NavButton = styled.button`
  width: auto;
  padding: 6px 12px;
  border: none;
  border-radius: 10px;
  background-color: #00b2ec;
  font-size: 12px;
  filter: drop-shadow(3px 3px 0px #4ed3ff);
  border: 2px solid #00b2ec;
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4ed3ff;
    filter: drop-shadow(3px 3px 0px #00b2ec);
    transition: 0.3s all ease-out;
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

export const ResumeButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  background-color: #00b2ec;
  filter: drop-shadow(3px 3px 0px #4ed3ff);
  border: 2px solid #00b2ec;
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4ed3ff;
    filter: drop-shadow(3px 3px 0px #00b2ec);
    transition: 0.3s all ease-out;
  }
`;

export const PortButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  background-color: #1b255a;
  filter: drop-shadow(3px 3px 0px #4ed3ff);
  border: 2px solid #00b2ec;
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4ed3ff;
    filter: drop-shadow(3px 3px 0px #00b2ec);
    transition: 0.3s all ease-out;
  }
`;

export const LetsConnectButton = styled.button`
  width: auto;
  padding: 12px 22px;
  border: none;
  background-color: #1b255a;
  filter: drop-shadow(3px 3px 0px #4ed3ff);
  border: 2px solid #00b2ec;
  color: #fff;

  &:disabled {
    background-color: #e7e7e7;
    color: black;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #4ed3ff;
    filter: drop-shadow(3px 3px 0px #00b2ec);
    transition: 0.3s all ease-out;
  }
`;
