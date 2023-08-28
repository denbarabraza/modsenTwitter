import styled, { css } from 'styled-components';

export const Message = styled.div`
  ${({ theme }) => css`
    position: fixed;
    bottom: ${theme.valueInPercent.pr5};
    right: ${theme.valueInPercent.pr2};
    width: fit-content;
    height: ${theme.valueInPercent.pr10};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.indentation.i15};
    background-color: ${theme.usedColors.twitterColor};
    color: ${theme.usedColors.white};
    font-size: ${theme.fontSizes.xl};
    border: ${theme.valueInPx.px1} solid ${theme.usedColors.twitterColor};
    border-radius: ${theme.valueInPx.px20};

    z-index: 100;
  `};
`;
