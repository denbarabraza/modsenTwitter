import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i5};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    gap: ${theme.valueInPx.px10};
    border-radius: ${theme.valueInPx.px10};
    border: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};
    padding: ${theme.indentation.i15};

    @media (max-width: ${theme.dimensions.laptop}px) {
      display: flex;
      flex-direction: column;
      gap: ${theme.valueInPx.px10};
      justify-content: flex-start;
      align-items: center;
    }
  `}
`;

export const User = styled.li`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr70};
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: transparent;

    @media (max-width: ${theme.dimensions.laptop}px) {
      width: ${theme.valueInPercent.pr90};
    }
  `}
`;

export const UserName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.light};
    color: ${theme.colors.fontColor};
    background: transparent;
    word-break: break-word;

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
      width: ${theme.valueInPercent.pr100};
    }
  `}
`;

export const ButtonBlock = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr30};
    height: fit-content;
    @media (max-width: ${theme.dimensions.laptop}px) {
      width: ${theme.valueInPercent.pr50};
    }
  `}
`;
