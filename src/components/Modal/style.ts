import styled from 'styled-components';

export const ModalItem = styled.div<{ open: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.valueInPx.px0};
  left: ${({ theme }) => theme.valueInPx.px0};
  right: ${({ theme }) => theme.valueInPx.px0};
  bottom: ${({ theme }) => theme.valueInPx.px0};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ open }) => (open ? 1 : 0)};
  background-color: ${({ theme }) => theme.colors.modalContentBackground};
  transition: 0.4s;
  z-index: 300;
  overflow-y: auto;

  transform: ${({ open }) => (open ? '' : 'scale(0.5)')};
`;

export const ModalContent = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.valueInVw.vw50};
  max-height: ${({ theme }) => theme.valueInVh.vh90};
  margin: ${({ theme }) => theme.indentation.i20};
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: ${({ theme }) => theme.colors.modalItemBackground};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  overflow-y: auto;

  transition: 0.4s all;

  transform: ${({ open }) => (open ? '' : 'scale(1)')};
  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.valueInVw.vw90};
    max-height: ${({ theme }) => theme.valueInVh.vh75};
  }
`;
