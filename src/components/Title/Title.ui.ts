import styled from "styled-components";
import { themeColors, themeBreakpoints } from "theme/theme";
import { Breakpoint } from "shared/types/Breakpoints.type";

type TitleWrapperProps = {
  size: Breakpoint<number>;
  color?: string;
};

const { darkGray } = themeColors;
const { xsm, sm, md, lg, xl } = themeBreakpoints;

export const TitleWrapper = styled.div<TitleWrapperProps>`
  font-weight: 700;
  letter-spacing: 0;
  color: ${(props) => props.color || darkGray};
  font-size: ${(props) => props.size.default}rem;
  @media (min-width: ${xsm}) {
    ${(props) => props.size.xsm && "font-size:" + props.size.xsm + "rem"}
  }
  @media (min-width: ${sm}) {
    ${(props) => props.size.sm && "font-size:" + props.size.sm + "rem"}
  }
  @media (min-width: ${md}) {
    ${(props) => props.size.md && "font-size:" + props.size.md + "rem"}
  }
  @media (min-width: ${lg}) {
    ${(props) => props.size.lg && "font-size:" + props.size.lg + "rem"}
  }
  @media (min-width: ${xl}) {
    ${(props) => props.size.xl && "font-size:" + props.size.xl + "rem"}
  }
`;
