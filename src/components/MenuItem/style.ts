import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.valueInPx.px10};
  align-self: flex-start;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.fontColor};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-top: ${({ theme }) => theme.valueInPercent.pr2};
    height: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    margin-top: ${({ theme }) => theme.valueInPercent.pr2};
    height: fit-content;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.x36};
    height: fit-content;
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px20};
  height: ${({ theme }) => theme.valueInPx.px20};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px60};
    height: ${({ theme }) => theme.valueInPx.px50};
  }
`;
