import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  border: 1px solid blue;
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px10};
  width: 70%;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px30};
  height: ${({ theme }) => theme.valueInPx.px30};
  margin: ${({ theme }) => theme.indentation.i15} ${({ theme }) => theme.indentation.i0};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px70};
    height: ${({ theme }) => theme.valueInPx.px70};
  }
`;
