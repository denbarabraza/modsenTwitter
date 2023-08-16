import styled from 'styled-components';

export const StyledMenu = styled.div<{ open: boolean }>`
  top: ${({ theme }) => theme.valueInPx.px0};
  left: ${({ theme }) => theme.valueInPx.px0};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.burgerMenuBackground};
  z-index: 4;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.valueInPx.px10};
  color: ${props => props.theme.colors.fontColor};

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  overflow: ${({ open }) => (open ? 'hidden' : '')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

export const StyledLink = styled.a`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
`;
