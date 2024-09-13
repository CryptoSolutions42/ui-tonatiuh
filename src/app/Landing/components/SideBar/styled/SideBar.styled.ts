import styled from 'styled-components';

export const StyledSideBar = styled.div`
  position: fixed;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 980px) {
    display: none;
  }
`;

export const AnchorLink = styled.a`
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  &.active {
    background-color: rgba(255, 255, 255);
  }
`;

export const AnchorWrapper = styled.div`
  &.active {
    position: relative;
    width: 19.5px;
    height: 19.5px;
    left: -6.5px;
    top: -6.5px;
    border: 1px solid #ffffff;
    border-radius: 100%;
    color: rgba(255, 255, 255);
  }
`;
