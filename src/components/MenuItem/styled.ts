import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled(Link)<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    display: flex;
    gap: ${theme.valueInPx.px10};
    align-self: flex-start;
    font-weight: ${theme.fontWeight.normal};
    font-size: ${isActive ? theme.fontSizes.xl : theme.fontSizes.l};
    color: ${isActive ? theme.usedColors.twitterColor : theme.colors.fontColor};
    text-decoration: ${isActive ? 'underline' : 'none'};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    @media (max-width: ${theme.dimensions.laptop}px) {
      gap: ${theme.valueInPx.px5};
      font-size: ${theme.fontSizes.m};
      font-weight: ${theme.fontWeight.normal};
      height: fit-content;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.x36};
      height: fit-content;
    }
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px20};
    height: ${theme.valueInPx.px20};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPx.px60};
      height: ${theme.valueInPx.px50};
    }
  `}
`;
