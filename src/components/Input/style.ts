import styled from 'styled-components';

import { forwardPropGuard } from '@/utils/forwardPropGuard.ts';

export const LabelInput = styled.label`
  width: 100%;
  position: relative;
`;

export const InputItem = styled('input').withConfig({
  shouldForwardProp: forwardPropGuard<{ withError: boolean }>(['withError']),
})<{ withError: boolean }>`
  width: 100%;
  max-width: 400px;
  min-height: 35px;
  padding: 5px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #000;
  word-break: break-word;

  background: #fff;
  border: none;

  border-bottom: ${({ withError }) =>
    withError ? '1px solid #cc1439' : '1px solid gray'};

  &:hover {
    border-bottom: 1px solid gray;
    outline: none;
  }

  &:focus {
    border-bottom: 1px solid gray;
    outline: none;
  }
`;

export const IconShowPassword = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
`;

export const ErrorText = styled.div`
  color: #ff244b;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100px;
  background-color: rgb(234, 234, 234);
  opacity: 0.7;
  border-radius: 15px;
  border: 2px dashed rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgb(255, 255, 255);
  }
`;

export const Label = styled.div`
  position: absolute;
  width: 100%;
  border-radius: inherit;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #030202;
`;

export const LabelIMG = styled.img`
  height: 100%;
  width: 100%;
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
