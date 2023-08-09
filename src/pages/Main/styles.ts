import styled from 'styled-components';

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ theme }) => theme.valueInPercent.pr55};
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  border: 1px solid red;
`;
