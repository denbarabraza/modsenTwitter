import styled, { css } from 'styled-components';

import { forwardPropGuard } from '@/utils/forwardPropGuard.ts';

export const LabelInput = styled.label`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  position: relative;
`;

export const InputItem = styled.input.withConfig({
  shouldForwardProp: forwardPropGuard(['withError']),
})<{ withError: boolean }>`
  ${({ theme, withError }) => css`
    width: ${theme.valueInPercent.pr100};
    max-width: ${theme.valueInPx.px400};
    min-height: ${theme.valueInPx.px40};
    padding: ${theme.valueInPx.px5};

    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeight.medium};
    line-height: ${theme.valueInPx.px25};
    color: ${theme.colors.fontColor};
    word-break: break-word;

    background: transparent;
    border: none;

    border-bottom: ${withError
      ? `1px solid ${theme.usedColors.red}`
      : `1px solid ${theme.usedColors.gray}`};

    &:hover {
      border-bottom: 1px solid ${theme.usedColors.gray};
      outline: none;
    }

    &:focus {
      border-bottom: 1px solid ${theme.usedColors.gray};
      outline: none;
    }
  `}
`;

export const IconShowPassword = styled.img`
  ${({ theme }) => css`
    cursor: pointer;
    width: ${theme.valueInPx.px16};
    height: ${theme.valueInPx.px16};
    position: absolute;
    top: ${theme.valueInPx.px25};
    right: ${theme.valueInPercent.pr2};
    transform: translateY(${theme.valueInPercent.pr50});
  `}
`;

export const ErrorText = styled.div`
  ${({ theme }) => css`
    color: ${theme.usedColors.red};
  `}
`;
