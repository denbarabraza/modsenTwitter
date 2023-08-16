import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: ${({ theme }) => theme.valueInVh.vh100};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MainWrapper = styled.div`
  margin: ${({ theme }) => theme.indentation.i0} auto;
  margin-bottom: ${({ theme }) => theme.indentation.i20};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px10};
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-left: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};
  border-right: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.valueInPx.px15};
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    padding: ${({ theme }) => theme.valueInPx.px15};
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }
`;

export const BannerBlock = styled.div`
  height: ${({ theme }) => theme.valueInPercent.pr30};
  width: ${({ theme }) => theme.valueInPercent.pr100};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.indentation.i15};
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    padding: ${({ theme }) => theme.indentation.i15};
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }
`;

export const Banner = styled.img`
  height: ${({ theme }) => theme.valueInPercent.pr100};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  background-size: contain;
`;

export const Title = styled.p`
  height: ${({ theme }) => theme.valueInPercent.pr100};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  padding: ${({ theme }) => theme.indentation.i5};
  padding-left: ${({ theme }) => theme.indentation.i50};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.fontColor};
  border-bottom: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};
`;
