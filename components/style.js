import styled from "styled-components";

export const Topic = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const SubTopic = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Desc = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};
  text-indent: 50px;
`;

export const DivCenter = styled.div`
  margin: 0px auto 0px auto;
`;
