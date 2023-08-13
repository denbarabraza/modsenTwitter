import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${({ theme }) => theme.valueInPercent.pr30};
  height: 100vh;
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px10};
  width: 70%;
`;

export const IconLogo = styled.img`
  width: ${({ theme }) => theme.valueInPx.px30};
  height: ${({ theme }) => theme.valueInPx.px30};
  margin: ${({ theme }) => theme.indentation.i15} ${({ theme }) => theme.indentation.i0};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px70};
    height: ${({ theme }) => theme.valueInPx.px70};
  }
`;

export const UserInfo = styled.div`
  margin: ${({ theme }) => theme.valueInPercent.pr5} auto;
  padding: ${({ theme }) => theme.valueInPx.px10} ${({ theme }) => theme.valueInPx.px5};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  border: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.valueInPercent.pr2};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    margin: ${({ theme }) => theme.valueInPercent.pr5};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    flex-direction: column;
  }
`;

export const IconPhotoItem = styled.div`
  padding: ${({ theme }) => theme.valueInPx.px10} ${({ theme }) => theme.valueInPx.px0};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Credentials = styled.div`
  max-width: max-content;
  height: fit-content;
  padding-left: ${({ theme }) => theme.indentation.i5};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
`;

export const Email = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
`;

export const IconPhoto = styled.img`
  width: ${({ theme }) => theme.valueInPx.px50};
  height: ${({ theme }) => theme.valueInPx.px50};
  background-color: transparent;
  align-self: flex-start;
  border: ${({ theme }) => theme.valueInPx.px1} solid transparent;
  border-radius: ${({ theme }) => theme.valueInPercent.pr50};

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-left: ${({ theme }) => theme.indentation.i25};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px60};
    height: ${({ theme }) => theme.valueInPx.px50};
  }
`;
