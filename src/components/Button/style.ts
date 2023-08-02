import styled from 'styled-components';

export const ButtonItem = styled.button`
  cursor: pointer;

  padding: 8px 0;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;

  background: #1da1f2;
  border: none;
  border-radius: 30px;
  box-shadow:
    0 4px 18px rgba(71, 75, 87, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease - in -out;

  &:disabled {
    background-color: gray;
    opacity: 0.5;

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
