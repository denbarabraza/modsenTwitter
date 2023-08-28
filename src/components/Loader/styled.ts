import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 10;
    top: ${theme.valueInPx.px0};
    left: ${theme.valueInPx.px0};

    width: ${theme.valueInVw.vw100};
    height: ${theme.valueInVh.vh100};

    opacity: 0.7;
    background-color: ${theme.colors.mainBackground};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
  `}
`;

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    width: ${theme.valueInPercent.pr10};
    height: ${theme.valueInPercent.pr10};
    border: 2px solid ${theme.usedColors.twitterColor};
    border-top-color: ${theme.usedColors.twitterColor};
    border-radius: ${theme.valueInPercent.pr50};
    animation: ${spin} 1s ease-in-out infinite;
  `}
`;
