import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInVw.vw100};
    height: ${theme.valueInPercent.pr100};

    @media (max-width: ${theme.dimensions.mobile}px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.indentation.i0};
    }
  `}
`;

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    width: ${theme.valueInPercent.pr100};
    height: calc(${theme.valueInVh.vh100} - ${theme.valueInPx.px50});

    @media (max-width: ${theme.dimensions.mobile}px) {
      height: fit-content;
    }

    @media (max-width: ${theme.dimensions.laptop}px) {
      width: ${theme.valueInPercent.pr100};
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      width: ${theme.valueInPercent.pr100};
    }
  `}
`;

export const Banner = styled.img`
  ${({ theme }) => css`
    height: ${theme.valueInPercent.pr100};
    width: ${theme.valueInPercent.pr60};

    @media (max-width: ${theme.dimensions.mobile}px) {
      display: none;
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      display: none;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPercent.pr80};
    }
  `}
`;

export const Form = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: ${theme.valueInPercent.pr2} auto;
    width: ${theme.valueInPercent.pr40};
    padding-left: ${theme.indentation.i40};

    @media (max-width: ${theme.dimensions.tablet}px) {
      width: ${theme.valueInPercent.pr300};
      align-items: center;
      padding-left: ${theme.indentation.i0};
      padding: ${theme.indentation.i10};
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      margin: ${theme.indentation.i150} auto;
    }
  `}
`;

export const IconWrapper = styled.button`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    border: none;
    background: transparent;
    cursor: pointer;

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPx.px60};
      height: ${theme.valueInPx.px60};
    }
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px60};
    height: ${theme.valueInPx.px60};

    &:hover {
      transform: scale(1.2);
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPx.px100};
      height: ${theme.valueInPx.px100};
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.indentation.i25};
    margin-bottom: ${theme.indentation.i25};
    font-size: ${theme.fontSizes.x60};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.tablet}px) {
      font-size: ${theme.fontSizes.x36};
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      margin-top: ${theme.indentation.i40};
    }
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i40};
    font-size: ${theme.fontSizes.xxxl};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.tablet}px) {
      font-size: ${theme.fontSizes.xl};
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.x36};
    }
  `}
`;

export const Button = css`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px300};
    height: ${theme.valueInPx.px40};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin-bottom: ${theme.indentation.i15};
    border: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};
    border-radius: ${theme.valueInPx.px40};
    font-weight: ${theme.fontWeight.semibold};
    font-size: ${theme.fontSizes.l};
    color: ${theme.colors.fontColor};

    &:hover {
      scale: 1.05;
      cursor: pointer;
    }

    @media (min-width: ${theme.dimensions.tablet}px) {
      width: ${theme.valueInPercent.pr80};
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPercent.pr60};
      height: ${theme.valueInPx.px60};
      font-size: ${theme.fontSizes.m};
    }
  `}
`;

export const ButtonWrapper = styled.button`
  ${Button}
`;

export const ButtonLink = styled(Link)`
  ${Button}
`;

export const ButtonWithIcon = styled.div`
  ${({ theme }) => css`
    margin: ${theme.indentation.i0} auto;
    height: ${theme.valueInPercent.pr100};
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ButtonIcon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px20};
    height: ${theme.valueInPx.px20};
    margin-right: ${theme.indentation.i15};

    &:hover {
      transform: scale(1.1);
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr60};
    margin-bottom: ${theme.indentation.i25};
    font-weight: ${theme.fontWeight.normal};
    font-size: ${theme.fontSizes.m};
    color: ${theme.colors.fontColor};

    @media (max-width: ${theme.dimensions.mobile}px) {
      width: ${theme.valueInPercent.pr80};
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      width: ${theme.valueInPercent.pr100};
      text-align: center;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const TextLink = styled(Link)`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i25};
    font-size: ${theme.fontSizes.m};
    color: ${theme.usedColors.twitterColor};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    min-height: ${theme.valueInPx.px60};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${theme.dimensions.tablet}px) {
      height: ${theme.valueInPx.px150};
      width: ${theme.valueInPercent.pr100};
    }
  `}
`;

export const Nav = styled.ul`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    margin: ${theme.indentation.i0} ${theme.indentation.i50};
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.valueInPx.px10};
    align-items: center;
    justify-content: space-around;
    height: ${theme.valueInPx.px60};
    color: ${theme.colors.fontColor};

    @media (max-width: ${theme.dimensions.mobile}px) {
      margin: ${theme.valueInPx.px25};
    }
  `}
`;

export const NavItem = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const NavItemLink = styled(Link)`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.usedColors.twitterColor};

    &:hover {
      text-decoration: underline;
      color: ${theme.usedColors.twitterColor};
      cursor: pointer;
    }
  `}
`;
