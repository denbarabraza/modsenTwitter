import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    padding: ${theme.indentation.i25} ${theme.indentation.i15}
      ${({ theme }) => theme.indentation.i0};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${theme.colors.mainBackground};
    border-bottom: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};
  `}
`;

export const UserInfo = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInPercent.pr100};
    padding-top: ${theme.indentation.i20};
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${theme.colors.mainBackground};

    @media (max-width: ${theme.dimensions.tablet}px) {
      padding-top: ${theme.indentation.i10};
    }
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: -${theme.valueInPercent.pr60};
    left: -${theme.valueInPx.px1};
    width: ${theme.valueInPx.px100};
    height: ${theme.valueInPx.px100};
    align-self: flex-start;
    background-color: transparent;
    border: ${theme.valueInPx.px1} solid transparent;
    border-radius: ${theme.valueInPx.px5};

    &:hover {
      transform: scale(1.2);
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      top: -${theme.valueInPercent.pr80};
    }
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const Credentials = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.valueInPx.px10};
    width: ${theme.valueInPx.px60};
    font-weight: ${theme.fontWeight.normal};
    font-size: ${theme.fontSizes.m};
    color: ${theme.usedColors.fontColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
      height: fit-content;
    }
  `}
`;

export const TextLink = styled(Link)`
  ${({ theme }) => css`
    margin-left: ${theme.valueInPercent.pr2};
    font-size: ${theme.fontSizes.m};
    color: ${theme.colors.fontColor};
    opacity: 0.8;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
      height: fit-content;
    }
  `}
`;

export const Statistics = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i30};
    width: ${theme.valueInPercent.pr100};
    padding-top: ${theme.indentation.i10};
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    gap: ${theme.valueInPx.px10};
    background-color: transparent;

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const IconEditProfile = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px20};
    height: ${theme.valueInPx.px20};

    &:hover {
      transform: scale(1.2);
    }
  `}
`;

export const NameBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.valueInPx.px10};
  `}
`;
