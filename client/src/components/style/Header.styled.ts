import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.div`
  ${mixins.flexCenter};
  letter-spacing: ${theme.spacing.xs};
  background-color: ${theme.colors.black};
`;

export const HeaderText = styled.h3`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.md};
`;
