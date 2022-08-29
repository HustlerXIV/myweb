import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const StylizedTab = styled.button`
  color: #fff;
  width: 100%;
  height: auto;
  padding: 20px 0px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  border-bottom-color: #0078ae;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #fff;
      font-weight: bold;
      animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 4rem;
  background: transparent;
  width: 100%;
  height: auto;
  padding: 40px 65px;
  gap: 30px;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  border: 3px solid #0078ae;
  border-top: none;
  box-shadow: inset 0 0 14px 0px #0078ae;
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65,
};

export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: #0078ae;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
            box-shadow: inset 0 0 0 0 rgba(238, 82, 83, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px #0078ae;
            box-shadow: inset 0 0 14px 0px #0078ae;
  }
`;
