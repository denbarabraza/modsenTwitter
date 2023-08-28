import styled from 'styled-components';

export const StyledBurgerMenu = styled.button<{ open: boolean }>`
  @media (min-width: ${({ theme }) => theme.dimensions.tablet}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    display: flex;
    width: ${({ theme }) => theme.valueInPx.px40};
    margin-left: 20px;
    flex-direction: column;
    justify-content: center;
    grid-area: 1 / 2 / 2 / 3;
    grid-gap: ${({ theme }) => theme.valueInPx.px5};
    align-items: flex-end;
    width: ${({ theme }) => theme.valueInPercent.pr10};
    height: ${({ theme }) => theme.valueInPercent.pr50};
    padding: ${({ theme }) => theme.indentation.i0};
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  div {
    position: relative;
    z-index: 200;
    width: ${({ theme }) => theme.valueInPx.px30};
    height: ${({ theme }) => theme.valueInPx.px3};
    border-radius: ${({ theme }) => theme.valueInPx.px5};
    transition: all 0.3s linear;
    transform-origin: ${({ theme }) => theme.valueInPx.px1};
    background-color: ${({ theme, open }) =>
      open ? theme.usedColors.twitterColor : theme.usedColors.white};

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
