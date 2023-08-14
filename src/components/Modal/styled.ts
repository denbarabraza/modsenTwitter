import styled from 'styled-components';

export const ModalItem = styled.div<{ open: boolean }>`
  position: fixed;
  top: ${props => props.theme.valueInPx.px0};
  left: ${props => props.theme.valueInPx.px0};
  right: ${props => props.theme.valueInPx.px0};
  bottom: ${props => props.theme.valueInPx.px0};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ open }) => (open ? 1 : 0)};
  background-color: ${props => props.theme.colors.modalContentBackground};
  transition: 0.4s;
  z-index: 3;
  overflow-y: auto;

  transform: ${({ open }) => (open ? '' : 'scale(0.5)')};
`;

export const ModalContent = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.valueInVw.vw50};
  max-height: ${props => props.theme.valueInVh.vh90};
  margin: ${props => props.theme.indentation.i20};
  color: ${props => props.theme.colors.fontColor};
  background-color: ${props => props.theme.colors.modalItemBackground};
  border-radius: ${props => props.theme.valueInPx.px10};
  overflow-y: auto;

  transition: 0.4s all;

  transform: ${({ open }) => (open ? '' : 'scale(1)')};
  @media (max-width: 574px) {
    width: ${props => props.theme.valueInVw.vw80};
    height: ${props => props.theme.valueInVh.vh90};
  }
`;
