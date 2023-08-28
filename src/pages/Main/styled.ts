import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${theme.dimensions.tablet}px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  `}
`;

export const MenuItemBlock = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr30};
    height: 100vh;
    @media (max-width: ${theme.dimensions.tablet}px) {
      display: none;
    }
  `}
`;
