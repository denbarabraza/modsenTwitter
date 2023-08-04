import styled, { css, keyframes } from 'styled-components';

const hint = keyframes`
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(1.02)
  }`;

export const Container = styled.div`
  width: ${({ theme }) => theme.valueInVw.vw100};
  height: calc(
    ${({ theme }) => theme.valueInVh.vh100} - ${({ theme }) => theme.valueInPx.px40}
  );
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.fontColor};

  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: ${({ theme }) => theme.valueInPercent.pr50};
  padding: ${({ theme }) => theme.valueInPx.px20} ${({ theme }) => theme.valueInPx.px30};

  background: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  box-shadow:
    1px 1px 2px ${({ theme }) => theme.colors.boxShadow},
    -1px -1px 2px ${({ theme }) => theme.colors.boxShadow};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.valueInPx.px15};

  margin-bottom: ${({ theme }) => theme.valueInPx.px20};
`;

export const Title = styled.h3`
  padding: ${({ theme }) => theme.valueInPx.px15} ${({ theme }) => theme.valueInPx.px0};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.valueInPx.px20};
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const TextQuestion = styled.div`
  margin-bottom: ${({ theme }) => theme.indentation.i10};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.valueInPx.px25};
  color: ${({ theme }) => theme.colors.fontColor};

  opacity: 0.5;
`;

export const LinkRegistration = styled.div`
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.valueInPx.px25};
  color: ${({ theme }) => theme.colors.fontColor};
  text-decoration-line: underline;
`;

export const IconTwitter = styled.img`
  width: ${({ theme }) => theme.valueInPx.px30};
  height: ${({ theme }) => theme.valueInPx.px30};
`;

export const Selectors = styled.div`
  margin-bottom: ${({ theme }) => theme.valueInPx.px10};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPx.px30};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateBirthBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.valueInPx.px10};
`;

export const Selector = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.valueInPx.px30};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.usedColors.gray};
  border-radius: ${({ theme }) => theme.valueInPx.px5};
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.valueInPx.px2};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.usedColors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.usedColors.gray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.usedColors.gray};
  }
`;

export const MonthSelector = styled.select`
  width: ${({ theme }) => theme.valueInPercent.pr50};
  ${Selector}
`;

export const DayYearSelector = styled.select`
  width: ${({ theme }) => theme.valueInPercent.pr20};
  ${Selector}
`;

export const Option = styled.option`
  cursor: pointer;
  background: ${({ theme }) => theme.usedColors.white};
  color: ${({ theme }) => theme.usedColors.black};
`;
