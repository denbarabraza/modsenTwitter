import styled, { css, keyframes } from 'styled-components';

const hint = keyframes`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.02)
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    height: calc(${theme.valueInVh.vh100} + ${theme.valueInPx.px40});
    overflow: auto;
  `};
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

export const InnerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: ${theme.valueInPercent.pr50};
    padding: ${theme.valueInPx.px20} ${theme.valueInPx.px30};
    margin: ${theme.valueInPx.px40} ${theme.valueInPx.px0};
    background: ${theme.colors.formBackground};
    border-radius: ${theme.valueInPx.px10};
    box-shadow:
      1px 1px 2px ${theme.colors.boxShadow},
      -1px -1px 2px ${theme.colors.boxShadow};

    @media (max-width: ${theme.dimensions.mobile}px) {
      max-width: ${theme.valueInPercent.pr80};
    }
  `};
`;

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.valueInPx.px15};
    margin-bottom: ${theme.valueInPx.px20};
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

export const TextQuestion = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i10};
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.semibold};
    line-height: ${theme.valueInPx.px25};
    color: ${theme.colors.fontColor};
    opacity: 0.5;
  `};
`;

export const LinkRegistration = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeight.semibold};
    line-height: ${theme.valueInPx.px25};
    color: ${theme.colors.fontColor};
    text-decoration-line: underline;

    &:hover {
      transform: scale(1.05);
    }
  `};
`;

export const IconTwitter = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px30};
    height: ${theme.valueInPx.px30};
  `};
`;

export const Selector = css`
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

export const GenderSelector = styled.select`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr50};
    ${Selector}
  `};
`;

export const Option = styled.option`
  ${({ theme }) => css`
    cursor: pointer;
    background: ${theme.usedColors.white};
    color: ${theme.usedColorsblack};
  `};
`;
