import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.indentation.i0} auto;
    height: ${theme.valueInVh.vh100};
    width: ${theme.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${theme.dimensions.mobile}px) {
      width: ${theme.valueInPercent.pr25};
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.fontColor};
  `}
`;
