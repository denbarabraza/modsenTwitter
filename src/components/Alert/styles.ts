import styled from 'styled-components';

export const Message = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.valueInPercent.pr10};
  right: ${({ theme }) => theme.valueInPercent.pr5};
  width: fit-content;
  height: ${({ theme }) => theme.valueInPercent.pr5};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.indentation.i15};
  background-color: ${({ theme }) => theme.usedColors.twitterColor};
  color: ${({ theme }) => theme.usedColors.grayOpacity};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.twitterColor};
  border-radius: ${({ theme }) => theme.valueInPx.px5};
  opacity: 0.8;

  z-index: 100;
`;
