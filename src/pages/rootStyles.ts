import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.valueInPercent.pr25};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.fontColor};
`;
