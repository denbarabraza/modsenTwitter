import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.indentation.i5};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const User = styled.li`
  width: ${({ theme }) => theme.valueInPercent.pr80};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.fontColor};
  background: transparent;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const ButtonBlock = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr20};
  height: fit-content;
`;
