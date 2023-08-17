import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const MenuItemBlock = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr30};
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    display: none;
  }
`;
