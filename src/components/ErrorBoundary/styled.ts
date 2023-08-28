import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  ${({ theme }) => `
    top: ${theme.valueInPercent.pr50};
    left: ${theme.valueInPercent.pr50};
    transform: translate(-${theme.valueInPercent.pr50}, -${theme.valueInPercent.pr50});
    position: absolute;
    font-family: 'Dosis', 'sans-serif';
    text-align: center;
  `};
`;

export const ErrorText = styled.h3`
  ${({ theme }) => `
    color: ${theme.usedColors.black};
    font-size: ${theme.fontSizes.xl};
    letter-spacing: 0.2px;
    margin-bottom: ${theme.valueInPx.px50};
  `};
`;
