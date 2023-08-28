import styled, { css } from 'styled-components';

export const ButtonItem = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: ${theme.valueInPercent.pr100};

    padding: ${theme.valueInPx.px5} ${theme.valueInPx.px0};

    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.medium};
    line-height: ${theme.valueInPx.px20};
    color: ${theme.usedColors.white};

    background: ${theme.usedColors.twitterColor};
    border: none;
    border-radius: ${theme.valueInPx.px30};
    box-shadow: 0 4px 18px ${theme.colors.boxShadow};
    transition: all 0.2s ease-in-out;

    &:disabled {
      background-color: ${theme.usedColors.grayOpacity};

      &:hover {
        transform: none;
      }

      &:active {
        transform: none;
      }
    }

    &:hover {
      transform: translateY(2px);
      opacity: 0.9;
    }

    &:active {
      transform: translateY(-1px);
    }
  `};
`;
