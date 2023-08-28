import styled, { css } from 'styled-components';

export const StyledBurgerMenu = styled.button<{ open: boolean }>`
  ${({ theme, open }) => css`
    @media (min-width: ${theme.dimensions.tablet}px) {
      display: none;
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      display: flex;
      width: ${theme.valueInPx.px40};
      margin-left: 20px;
      flex-direction: column;
      justify-content: center;
      grid-area: 1 / 2 / 2 / 3;
      grid-gap: ${theme.valueInPx.px5};
      align-items: flex-end;
      width: ${theme.valueInPercent.pr10};
      height: ${theme.valueInPercent.pr50};
      padding: ${theme.indentation.i0};
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
    }

    div {
      position: relative;
      z-index: 200;
      width: ${theme.valueInPx.px30};
      height: ${theme.valueInPx.px3};
      border-radius: ${theme.valueInPx.px5};
      transition: all 0.3s linear;
      transform-origin: ${theme.valueInPx.px1};
      background-color: ${open ? theme.usedColors.twitterColor : theme.usedColors.white};

      &:first-child {
        transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      &:nth-child(2) {
        opacity: ${open ? '0' : '1'};
        transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
      }

      &:nth-child(3) {
        transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `};
`;
