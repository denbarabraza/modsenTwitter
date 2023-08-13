import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  padding: ${({ theme }) => theme.indentation.i25} ${({ theme }) => theme.indentation.i15}
    ${({ theme }) => theme.indentation.i0};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-bottom: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};
`;

export const UserInfo = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  padding-top: ${({ theme }) => theme.indentation.i25};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

export const Icon = styled.img`
  position: absolute;
  top: -${({ theme }) => theme.valueInPx.px80};
  left: -${({ theme }) => theme.valueInPx.px1};
  width: ${({ theme }) => theme.valueInPx.px100};
  height: ${({ theme }) => theme.valueInPx.px100};
  align-self: flex-start;
  background-color: transparent;
  border: ${({ theme }) => theme.valueInPx.px1} solid transparent;
  border-radius: ${({ theme }) => theme.valueInPx.px5};

  &:hover {
    transform: scale(1.2);
  }
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Credentials = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Text = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.valueInPx.px10};
  width: ${({ theme }) => theme.valueInPx.px60};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.usedColors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    height: fit-content;
  }
`;

export const TextLink = styled(Link)`
  margin-left: ${({ theme }) => theme.valueInPercent.pr2};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.fontColor};
  opacity: 0.8;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    height: fit-content;
  }
`;

export const Statistics = styled.div`
  margin-bottom: ${({ theme }) => theme.indentation.i30};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  padding-top: ${({ theme }) => theme.indentation.i10};
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.valueInPx.px10};
  background-color: transparent;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const IconEditProfile = styled.img`
  width: ${({ theme }) => theme.valueInPx.px20};
  height: ${({ theme }) => theme.valueInPx.px20};

  &:hover {
    transform: scale(1.2);
  }
`;

export const NameBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px10};
`;
