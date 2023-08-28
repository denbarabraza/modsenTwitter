import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
  `}
`;

export const MenuBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.valueInPx.px15};
    width: ${theme.valueInPercent.pr50};
  `}
`;

export const IconLogo = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px30};
    height: ${theme.valueInPx.px30};
    margin: ${theme.indentation.i15} ${theme.indentation.i0};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPx.px70};
      height: ${theme.valueInPx.px70};
    }
  `}
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    margin: ${theme.valueInPercent.pr5} auto;
    padding: ${theme.valueInPx.px10} ${theme.valueInPx.px5};
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${theme.colors.formBackground};
    border-radius: ${theme.valueInPx.px10};
    border: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};

    @media (max-width: ${theme.dimensions.mobile}px) {
      margin: ${theme.valueInPercent.pr2};
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      margin: ${theme.valueInPercent.pr5};
    }

    @media (max-width: ${theme.dimensions.laptop}px) {
      flex-direction: column;
    }
  `}
`;

export const IconPhotoItem = styled.div`
  ${({ theme }) => css`
    padding: ${theme.valueInPx.px5} ${theme.valueInPx.px0};
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Credentials = styled.div`
  ${({ theme }) => css`
    max-width: max-content;
    height: fit-content;
    padding-left: ${theme.indentation.i5};
    display: flex;
    word-break: break-word;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxxl};
    }
  `}
`;

export const TelegramValue = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.light};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxxl};
    }
  `}
`;

export const IconPhoto = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px50};
    height: ${theme.valueInPx.px50};
    background-color: transparent;
    align-self: flex-start;
    border: ${theme.valueInPx.px1} solid transparent;
    border-radius: ${theme.valueInPercent.pr50};

    &:hover {
      transform: scale(1.2);
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPx.px60};
      height: ${theme.valueInPx.px50};
    }
  `}
`;
