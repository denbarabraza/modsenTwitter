import styled from 'styled-components';

export const ToggleContainer = styled.div<{ open: boolean }>`
  margin: ${({ theme }) => theme.indentation.i20} ${props => props.theme.indentation.i0};
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const ToggleInput = styled.input`
  opacity: ${({ theme }) => theme.valueInPx.px0};
  width: ${({ theme }) => theme.valueInPx.px0};
  height: ${({ theme }) => theme.valueInPx.px0};
`;

export const ToggleSlider = styled.span`
  width: ${({ theme }) => theme.valueInPx.px50};
  height: ${({ theme }) => theme.valueInPx.px30};
  border-radius: ${({ theme }) => theme.valueInPx.px20};
  background-color: ${({ theme }) => theme.colors.toggleBackground};
  border: 1px solid ${({ theme }) => theme.colors.toggleBorder};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.valueInPx.px20};
    height: ${({ theme }) => theme.valueInPx.px20};
    border-radius: ${({ theme }) => theme.valueInPercent.pr50};
    background-color: ${({ theme }) => theme.colors.toggleCircle};
    top: ${({ theme }) => theme.valueInPx.px5};
    left: ${({ theme }) => theme.valueInPx.px2};
    transition: transform 0.2s ease-in-out;
  }

  ${ToggleInput}:checked + & {
    background-color: ${({ theme }) => theme.colors.toggleBackgroundChecked};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(${({ theme }) => theme.valueInPx.px25});
  }
`;
