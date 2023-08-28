import styled from 'styled-components';

import { forwardPropGuard } from '@/utils/forwardPropGuard.ts';

export const LabelInput = styled.label`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  position: relative;
`;

export const InputItem = styled('input').withConfig({
  shouldForwardProp: forwardPropGuard<{ withError: boolean }>(['withError']),
})<{ withError: boolean }>`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  max-width: ${({ theme }) => theme.valueInPx.px400};
  min-height: ${({ theme }) => theme.valueInPx.px40};
  padding: ${({ theme }) => theme.valueInPx.px5};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.valueInPx.px25};
  color: ${({ theme }) => theme.colors.fontColor};
  word-break: break-word;

  background: transparent;
  border: none;

  border-bottom: ${({ withError, theme }) =>
    withError
      ? `1px solid ${theme.usedColors.red}`
      : `1px solid ${theme.usedColors.gray}`};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.usedColors.gray};
    outline: none;
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.usedColors.gray};
    outline: none;
  }
`;

export const IconShowPassword = styled.img`
  cursor: pointer;
  width: ${({ theme }) => theme.valueInPx.px16};
  height: ${({ theme }) => theme.valueInPx.px16};
  position: absolute;
  top: ${({ theme }) => theme.valueInPx.px25};
  right: ${({ theme }) => theme.valueInPercent.pr2};
  transform: translateY(${({ theme }) => theme.valueInPercent.pr50});
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.usedColors.red};
`;
