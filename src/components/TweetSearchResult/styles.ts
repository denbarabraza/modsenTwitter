import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.indentation.i5};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  gap: ${({ theme }) => theme.valueInPx.px10};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  border: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};
  padding: ${({ theme }) => theme.indentation.i15};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.valueInPx.px10};
    justify-content: flex-start;
    align-items: center;
  }
`;

export const User = styled.li`
  width: ${({ theme }) => theme.valueInPercent.pr70};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.valueInPercent.pr90};
  }
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.fontColor};
  background: transparent;
  word-break: break-word;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }
`;

export const ButtonBlock = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr30};
  height: fit-content;
  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.valueInPercent.pr50};
  }
`;
