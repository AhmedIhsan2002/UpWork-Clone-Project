"use client";
import styled from "styled-components";

type Props = {
  width?: string;
  gap?: string;
  padding?: string;
  margin?: string;
};

export const StyledPage = styled.div<Props>`
  width: ${(props) => props.width};
  min-height: 100vh;
  margin-top: 40px;
`;

export const StyledFlex = styled.div<Props>`
  display: flex;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledAlignFlex = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledAlignFlexStart = styled.div<Props>`
  display: flex;
  align-items: start;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledBetweenFlexStart = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
export const StyledFlexCenter = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledFlexCenterColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const StyledFlexColumn = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledBetweenFlex = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.padding};
`;

export const StyledBetweenAlignFlex = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export const StyledGrid150 = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
  margin: ${(props) => props.margin};
`;

export const StyledGrid180 = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid250 = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledGrid300 = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${(props) => props.gap};
  width: 100%;
`;

export const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: 850px 1fr;
  gap: 25px;
`;

export const StyledGridJobsFilter = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  gap: 25px;
`;

export const StyledSection = styled.section<Props>`
  background-color: var(--white-color);
  border: 1px solid var(--gray-300-color);
  border-radius: 20px !important;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  position: relative;
  @media (max-width: 768px) {
    border-radius: 0 !important;
  }
  overflow: hidden;
`;

export const StyledReExSupp = styled.div`
  margin-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  h2 {
    color: var(--dark-color);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.2px;
    margin-bottom: 20px;
  }

  @media (max-width: 426px) {
    h2 {
      font-size: 18px;
    }
  }
`;
