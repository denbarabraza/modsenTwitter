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

  background: ${({ theme }) => theme.colors.formBackground};
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
  top: ${({ theme }) => theme.valueInPx.px40};
  right: ${({ theme }) => theme.valueInPercent.pr2};
  transform: translateY(${({ theme }) => theme.valueInPercent.pr50});
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.usedColors.red};
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPx.px100};
  opacity: 0.7;
  border-radius: ${({ theme }) => theme.valueInPx.px15};
  border: 2px dashed ${({ theme }) => theme.usedColors.blackOpacity};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.usedColors.white};
  }
`;

export const Label = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  border-radius: inherit;

  height: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const LabelIMG = styled.img`
  height: ${({ theme }) => theme.valueInPercent.pr100};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  opacity: 0.7;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LabelText = styled.div`
  word-break: break-word;
  position: absolute;

  &:hover {
    z-index: 4;
  }
`;
