import styled, { css, keyframes } from 'styled-components';

const hint = keyframes`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.02)
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.fontColor};

    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
  `};
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    padding: ${theme.valueInPx.px15} ${theme.valueInPx.px0};
    font-size: ${theme.fontSizes.xxxl};
    font-weight: ${theme.fontWeight.semibold};
    line-height: ${theme.valueInPx.px20};
    color: ${theme.colors.fontColor};
  `};
`;

export const Selectors = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.valueInPx.px10};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPx.px30};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `};
`;

export const DateBirthBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.valueInPercent.pr100};
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.valueInPx.px10};
  `};
`;

export const Selector = styled.select`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.valueInPx.px30};
    background: transparent;
    border: 1px solid ${theme.usedColors.gray};
    border-radius: ${theme.valueInPx.px5};
    color: ${theme.colors.fontColor};
    font-size: ${theme.fontSizes.sm};

    &:hover {
      -webkit-animation: ${hint} 200ms ease-out;
      animation: ${hint} 200ms ease-out;
      cursor: pointer;
    }

    &::-webkit-scrollbar {
      width: ${theme.valueInPx.px2};
    }

    &::-webkit-scrollbar-track {
      background-color: ${theme.usedColors.white};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.usedColors.gray};
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.usedColors.gray};
    }
  `};
`;

export const MonthSelector = styled(Selector)`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr50};
  `};
`;

export const DayYearSelector = styled(Selector)`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr20};
  `};
`;

export const Option = styled.option`
  ${({ theme }) => css`
    cursor: pointer;
    background: ${theme.usedColors.white};
    color: ${theme.usedColors.black};
  `};
`;
