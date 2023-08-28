import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.valueInPercent.pr2};
    width: ${theme.valueInPercent.pr30};
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.fontColor};

    @media (max-width: ${theme.dimensions.mobile}px) {
      padding: ${theme.valueInPx.px15};
      width: ${theme.valueInPercent.pr100};
    }

    @media (max-width: ${theme.dimensions.tablet}px) {
      padding: ${theme.valueInPx.px15};
      width: ${theme.valueInPercent.pr80};
    }
  `}
`;

export const SearchWrapper = styled.form`
  ${({ theme }) => css`
    margin: ${theme.indentation.i0} auto;
    margin-bottom: ${theme.indentation.i5};
    width: ${theme.valueInPercent.pr100};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: ${theme.valueInPx.px15};
    padding-right: ${theme.valueInPx.px15};
    background: ${theme.colors.formBackground};
    border-radius: ${theme.valueInPx.px15};
    border: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};

    &:hover {
      border-color: ${theme.usedColors.darkBlue};
    }

    &:focus-within {
      border-color: ${theme.usedColors.twitterColor};
    }
  `}
`;

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px16};
    height: ${theme.valueInPx.px16};
    background: transparent;
    opacity: 0.6;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      width: ${theme.valueInPx.px20};
      height: ${theme.valueInPx.px20};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr80};
    height: ${theme.valueInPercent.pr100};
    padding: ${theme.indentation.i15};
    background-color: transparent;
    outline: none;
    border: none;
    font-size: ${theme.fontSizes.m};
    color: ${theme.colors.fontColor};

    &::placeholder {
      color: ${theme.colors.fontColor};
      opacity: 0.7;
    }

    @media (max-width: ${theme.dimensions.laptop}px) {
      font-size: ${theme.fontSizes.sm};
      width: ${theme.valueInPercent.pr90};
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const ResultWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i5};
    padding: ${theme.indentation.i15};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background: ${theme.colors.formBackground};
    border-radius: ${theme.valueInPx.px15};
    border: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    height: ${theme.valueInPercent.pr100};
    width: ${theme.valueInPercent.pr100};
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.fontColor};
    background: transparent;
  `}
`;

export const ResultList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: ${theme.valueInPx.px15};
    margin: ${theme.valueInPercent.pr2} auto;
    width: ${theme.valueInPercent.pr100};
    background-color: transparent;
  `}
`;

export const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const SideSearchAction = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.usedColors.twitterColor};
    background: transparent;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xl};
  `}
`;

export const Nav = styled.ul`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    margin-top: ${theme.valueInPercent.pr2};
    display: flex;
    gap: ${theme.valueInPx.px5};
    flex-wrap: wrap;
    align-items: flex-start;
  `}
`;

export const NavItem = styled.li`
  ${({ theme }) => css`
    margin-top: ${theme.valueInPercent.pr2};
    margin-left: ${theme.valueInPercent.pr2};
    font-size: ${theme.fontSizes.sm};

    @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  `}
`;

export const NavItemLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.fontColor};

    &:hover {
      text-decoration: underline;
      color: ${theme.usedColors.twitterColor};
      cursor: pointer;
    }
  `}
`;
