import styled, { css } from 'styled-components';

export const ModalItem = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    position: fixed;
    top: ${theme.valueInPx.px0};
    left: ${theme.valueInPx.px0};
    right: ${theme.valueInPx.px0};
    bottom: ${theme.valueInPx.px0};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${open ? 1 : 0};
    background-color: ${theme.colors.modalContentBackground};
    transition: 0.4s;
    z-index: 300;
    overflow-y: auto;
    transform: ${open ? '' : 'scale(0.5)'};
  `}
`;

export const ModalContent = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${theme.valueInVw.vw50};
    max-height: ${theme.valueInVh.vh90};
    margin: ${theme.indentation.i20};
    color: ${theme.colors.fontColor};
    background-color: ${theme.colors.modalItemBackground};
    border-radius: ${theme.valueInPx.px10};
    overflow-y: auto;
    transition: 0.4s all;
    transform: ${open ? '' : 'scale(1)'};

    @media (max-width: ${theme.dimensions.tablet}px) {
      width: ${theme.valueInVw.vw90};
      max-height: ${theme.valueInVh.vh75};
    }
  `}
`;
