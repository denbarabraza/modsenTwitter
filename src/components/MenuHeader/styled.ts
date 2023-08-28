import styled, { css } from 'styled-components';

export const StyledMenu = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    top: ${theme.valueInPx.px0};
    left: ${theme.valueInPx.px0};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    position: absolute;
    background-color: ${theme.colors.burgerMenuBackground};
    z-index: 4;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.valueInPx.px10};
    color: ${theme.colors.fontColor};

    transition: transform 0.3s ease-in-out;
    transform: ${open ? 'translateX(0)' : 'translateX(-100%)'};
    overflow: ${open ? 'hidden' : ''};
    visibility: ${open ? 'visible' : 'hidden'};
  `}
`;

export const StyledLink = styled.a`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
  `}
`;
