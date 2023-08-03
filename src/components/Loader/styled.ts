import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: ${({ theme }) => theme.valueInPx.px0};
  left: ${({ theme }) => theme.valueInPx.px0};

  width: ${({ theme }) => theme.valueInVw.vw100};
  height: ${({ theme }) => theme.valueInVh.vh100};

  opacity: 0.7;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.valueInPercent.pr10};
  height: ${({ theme }) => theme.valueInPercent.pr10};
  border: 2px solid ${({ theme }) => theme.usedColors.twitterColor};
  border-top-color: ${({ theme }) => theme.usedColors.twitterColor};
  border-radius: ${({ theme }) => theme.valueInPercent.pr50};
  animation: ${spin} 1s ease-in-out infinite;
`;
