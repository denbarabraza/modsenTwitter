import styled from 'styled-components';

export const ButtonItem = styled.button`
  cursor: pointer;

  padding: ${({ theme }) => theme.valueInPx.px10} ${({ theme }) => theme.valueInPx.px0};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.valueInPx.px20};
  color: ${({ theme }) => theme.usedColors.white};

  background: ${({ theme }) => theme.usedColors.twitterColor};
  border: none;
  border-radius: ${({ theme }) => theme.valueInPx.px30};
  box-shadow: 0 4px 18px ${({ theme }) => theme.colors.boxShadow}
  transition: all 0.2s ease - in -out;

  &:disabled {
    background-color: ${({ theme }) => theme.usedColors.grayOpacity};

    &:hover {
      transform: none;
    }

    &:active {
      transform: none;
    }
  }

  &:hover {
    transform: translateY(2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(-1px);
  }
`;
