import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  top: ${({ theme }) => theme.valueInPercent.pr50};
  left: ${({ theme }) => theme.valueInPercent.pr50};
  transform: translate(
    -${({ theme }) => theme.valueInPercent.pr50},
    -${({ theme }) => theme.valueInPercent.pr50}
  );
  position: absolute;
  font-family: 'Dosis', 'sans-serif';
  text-align: center;
`;

export const ErrorText = styled.h3`
  color: ${({ theme }) => theme.usedColors.black};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  letter-spacing: 0.2px;
  margin-bottom: ${({ theme }) => theme.valueInPx.px50};
`;
