import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    padding: 0 ${theme.indentation.i20};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPx.px50};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.headBackground};
    border-radius: ${theme.valueInPx.px10};
    border-bottom: ${theme.valueInPx.px1} solid ${theme.colors.headBackground};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      height: ${theme.valueInPx.px100};
    }
  `};
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px30};
    height: ${theme.valueInPx.px30};
    margin-right: ${theme.valueInPx.px25};

    &:hover {
      transform: scale(1.2);
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPx.px30};
      height: ${theme.valueInPx.px30};
    }
  `};
`;

export const HeaderRootItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.valueInPx.px10};
    align-items: center;
    max-width: ${theme.valueInPercent.pr80};
  `};
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderHomeNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.usedColors.white};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.x36};
    }
  `};
`;

export const Counter = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.valueInPx.px2};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.usedColors.white};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `};
`;
