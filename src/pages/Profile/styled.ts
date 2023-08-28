import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: ${theme.valueInVh.vh100};

    @media (max-width: ${theme.dimensions.mobile}px) {
      width: ${theme.valueInPercent.pr100};
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      width: ${theme.valueInPercent.pr100};
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.indentation.i0} auto;
    margin-bottom: ${theme.indentation.i20};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.valueInPx.px10};
    background-color: ${theme.colors.mainBackground};
    border-left: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};
    border-right: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};

    @media (max-width: ${theme.dimensions.mobile}px) {
      padding: ${theme.valueInPx.px15};
      width: ${theme.valueInPercent.pr100};
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      padding: ${theme.valueInPx.px15};
      width: ${theme.valueInPercent.pr100};
    }
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    height: ${theme.valueInPercent.pr30};
    width: ${theme.valueInPercent.pr100};

    @media (max-width: ${theme.dimensions.mobile}px) {
      padding: ${theme.indentation.i15};
      width: ${theme.valueInPercent.pr100};
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      padding: ${theme.indentation.i15};
      width: ${theme.valueInPercent.pr100};
    }
  `}
`;

export const Banner = styled.img`
  ${({ theme }) => css`
    height: ${theme.valueInPercent.pr100};
    width: ${theme.valueInPercent.pr100};
    background-size: contain;
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    height: ${theme.valueInPercent.pr100};
    width: ${theme.valueInPercent.pr100};
    padding: ${theme.indentation.i5};
    padding-left: ${theme.indentation.i50};
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.fontColor};
    border-bottom: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};
  `}
`;
