import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i5};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    gap: ${theme.valueInPx.px10};
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
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
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: transparent;
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px40};
    height: ${theme.valueInPx.px40};
    margin-right: ${theme.valueInPercent.pr2};
    align-self: center;
    background-color: transparent;
    border: ${theme.valueInPx.px1} solid transparent;
    border-radius: ${theme.valueInPx.px10};

    &:hover {
      transform: scale(1.2);
    }
  `}
`;

export const UserName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.fontColor};
    background: transparent;

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const UserEmail = styled.p`
  ${({ theme }) => css`
    margin-right: ${theme.indentation.i5};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.fontColor};
    background: transparent;
  `}
`;

export const UserDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.valueInPercent.pr80};
    height: fit-content;
  `}
`;

export const ButtonBlock = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr50};
    height: fit-content;
  `}
`;
