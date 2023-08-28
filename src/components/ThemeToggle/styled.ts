import styled, { css } from 'styled-components';

export const ToggleContainer = styled.div<{ open: boolean }>`
  ${({ theme }) => css`
    margin: ${theme.indentation.i20} ${theme.indentation.i0};
  `}
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const ToggleInput = styled.input`
  ${({ theme }) => css`
    opacity: ${theme.valueInPx.px0};
    width: ${theme.valueInPx.px0};
    height: ${theme.valueInPx.px0};
  `}
`;

export const ToggleSlider = styled.span`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px50};
    height: ${theme.valueInPx.px30};
    border-radius: ${theme.valueInPx.px20};
    background-color: ${theme.colors.toggleBackground};
    border: 1px solid ${theme.colors.toggleBorder};
    position: relative;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &::before {
      content: '';
      position: absolute;
      width: ${theme.valueInPx.px20};
      height: ${theme.valueInPx.px20};
      border-radius: ${theme.valueInPercent.pr50};
      background-color: ${theme.colors.toggleCircle};
      top: ${theme.valueInPx.px5};
      left: ${theme.valueInPx.px2};
      transition: transform 0.2s ease-in-out;
    }

    ${ToggleInput}:checked + & {
      background-color: ${theme.colors.toggleBackgroundChecked};
    }

    ${ToggleInput}:checked + &::before {
      transform: translateX(${theme.valueInPx.px25});
    }
  `}
`;
