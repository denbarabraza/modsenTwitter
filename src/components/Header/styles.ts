import styled from 'styled-components';

import { usedColors } from '@/theme/theme.ts';

export const HeaderWrapper = styled.header`
  padding: 0 ${({ theme }) => theme.indentation.i20};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPx.px50};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.headBackground};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  border-bottom: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.colors.headBackground};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    height: ${({ theme }) => theme.valueInPx.px100};
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px10};
  height: ${({ theme }) => theme.valueInPx.px10};
  margin-right: ${({ theme }) => theme.valueInPx.px25};

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px30};
    height: ${({ theme }) => theme.valueInPx.px30};
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderHomeNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.usedColors.white};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.x36};
  }
`;

export const Counter = styled.p`
  margin-top: ${({ theme }) => theme.valueInPx.px2};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.usedColors.white};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;
