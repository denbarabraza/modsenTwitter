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

  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  max-width: 60%;
  padding: 20px 30px;

  background: #fff;
  border-radius: 10px;
  box-shadow:
    1px 1px 2px rgba(0, 0, 0, 0.1),
    -1px -1px 2px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-bottom: 20px;
`;

export const Title = styled.h3`
  padding: 15px 0;
  font-size: 26px;
  font-weight: 600;
  line-height: 22px;
  color: #000000;
`;

export const TextQuestion = styled.div`
  margin-bottom: 7px;

  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #000000;

  opacity: 0.5;
`;

export const LinkRegistration = styled.div`
  cursor: pointer;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #212121;
  text-decoration-line: underline;
`;

export const IconTwitter = styled.img`
  width: 30px;
  height: 30px;
`;

export const Selectors = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateBirthBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Selector = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  background: transparent;
  border: 1px solid gray;
  border-radius: 4px;
  color: black;
  font-size: 12px;

  &:hover {
    -webkit-animation: ${hint} 200ms ease-out;
    animation: ${hint} 200ms ease-out;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: gray;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: gray;
  }
`;

export const MonthSelector = styled.select`
  ${Selector}
  width: 50%;
`;

export const DayYearSelector = styled.select`
  ${Selector}
  width: 20%;
`;

export const Option = styled.option`
  cursor: pointer;
  background: white;
`;
