import styled, { keyframes } from "styled-components";

import { device } from "../../display";

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 50vh;

  @media only screen and ${device.tablet} {
    height: 200vh;
    flex-direction: column;
  }
`;

export const GridItem = styled.div`
  display: flex;
  width: 25rem;
  height: 100%;

  flex-direction: column;
  align-items: center;
  overflow: hidden;

  animation: 2s ${moveInBottom};
  border-radius: 15px;

  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and ${device.tablet} {
    margin-top: 10%;
  }
`;

export const UserImage = styled.img`
  width: 100%;
  height: 60%;
`;

export const DescList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-top: 3%;

  @media only screen and ${device.tablet} {
    width: 100%;
  }
`;

export const DescItem = styled.li`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: stretch;

  &:not(:first-child) {
    margin-bottom: 3%;
  }

  @media only screen and ${device.tablet} {
    padding-left: 10%;
    width: 100%;
  }

  @media only screen and ${device.mobileL} {
    width: 100%;
  }
`;

export const DescTitle = styled.p`
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 10px;

  @media only screen and ${device.tablet} {
    font-size: 2.5rem;
  }

  @media only screen and ${device.mobileL} {
    font-size: 2rem;
  }
`;

export const DescSubTitle = styled.p`
  font-size: 2rem;
  font-weight: 300;

  letter-spacing: 130%;
  margin: 0;

  @media only screen and ${device.tablet} {
    font-size: 1.5rem;
    margin: 0;
  }

  @media only screen and ${device.mobileL} {
    font-size: 1rem;
    margin: 0;
  }
`;

export const DescText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 130%;
  margin-bottom: 3%;

  @media only screen and ${device.tablet} {
    font-size: 1.4rem;
    margin: 0;
  }

  @media only screen and ${device.mobileL} {
    font-size: 1.3rem;
    margin: 0;
  }
`;
