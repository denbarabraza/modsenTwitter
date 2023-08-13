import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInVw.vw100};
  height: ${({ theme }) => theme.valueInPercent.pr100};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${({ theme }) => theme.indentation.i0};
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: calc(
    ${({ theme }) => theme.valueInVh.vh100} - ${({ theme }) => theme.valueInPx.px50}
  );

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }
`;

export const Banner = styled.img`
  height: ${({ theme }) => theme.valueInPercent.pr100};
  width: ${({ theme }) => theme.valueInPercent.pr60};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPercent.pr80};
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: ${({ theme }) => theme.valueInPercent.pr2} auto;
  width: ${({ theme }) => theme.valueInPercent.pr40};
  padding-left: ${({ theme }) => theme.indentation.i40};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.valueInPercent.pr300};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin: ${({ theme }) => theme.indentation.i150} auto;
  }
`;

export const IconWrapper = styled.button`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  border: none;
  background: transparent;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px60};
    height: ${({ theme }) => theme.valueInPx.px60};
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px60};
  height: ${({ theme }) => theme.valueInPx.px60};

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px100};
    height: ${({ theme }) => theme.valueInPx.px100};
  }
`;

export const Title = styled.h1`
  margin-top: ${({ theme }) => theme.indentation.i25};
  margin-bottom: ${({ theme }) => theme.indentation.i25};
  font-size: ${({ theme }) => theme.fontSizes.x60};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.x36};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    margin-top: ${({ theme }) => theme.indentation.i40};
  }
`;

export const SubTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.indentation.i40};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.x36};
  }
`;

export const Button = css`
  width: ${({ theme }) => theme.valueInPx.px300};
  height: ${({ theme }) => theme.valueInPx.px40};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-bottom: ${({ theme }) => theme.indentation.i15};
  border: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};
  border-radius: ${({ theme }) => theme.valueInPx.px40};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.fontColor};

  &:hover {
    scale: 1.05;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.valueInPercent.pr80};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPercent.pr60};
    height: ${({ theme }) => theme.valueInPx.px60};
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const ButtonWrapper = styled.button`
  ${Button}
`;

export const ButtonLink = styled(Link)`
  ${Button}
`;

export const ButtonWithIcon = styled.div`
  margin: ${({ theme }) => theme.indentation.i0} auto;
  height: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonIcon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px20};
  height: ${({ theme }) => theme.valueInPx.px20};
  margin-right: ${({ theme }) => theme.indentation.i15};

  &:hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  width: ${({ theme }) => theme.valueInPercent.pr60};
  margin-bottom: ${({ theme }) => theme.indentation.i25};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.valueInPercent.pr80};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const TextLink = styled(Link)`
  margin-bottom: ${({ theme }) => theme.indentation.i25};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.usedColors.twitterColor};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Footer = styled.footer`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  min-height: ${({ theme }) => theme.valueInPx.px60};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }
`;

export const Nav = styled.ul`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  margin: ${({ theme }) => theme.indentation.i0} ${({ theme }) => theme.indentation.i50};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.valueInPx.px10};
  align-items: center;
  justify-content: space-around;
  height: ${({ theme }) => theme.valueInPx.px60};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.valueInPx.px25};
  }
`;

export const NavItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.usedColors.twitterColor};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.usedColors.twitterColor};
    cursor: pointer;
  }
`;
