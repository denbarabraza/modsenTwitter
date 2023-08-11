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
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px40};
  height: ${({ theme }) => theme.valueInPx.px40};
  margin-right: ${({ theme }) => theme.valueInPercent.pr2};
  align-self: flex-start;
  background-color: transparent;
  border: ${({ theme }) => theme.valueInPx.px1} solid transparent;
  border-radius: ${({ theme }) => theme.valueInPx.px10};

  &:hover {
    transform: scale(1.2);
  }
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.fontColor};
  background: transparent;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const UserEmail = styled.p`
  margin-right: ${({ theme }) => theme.indentation.i5};
  margin-top: ${({ theme }) => theme.indentation.i5};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.fontColor};
  background: transparent;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: ${({ theme }) => theme.valueInPercent.pr80};
  height: fit-content;
`;

export const ButtonBlock = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr20};
  height: fit-content;
`;
