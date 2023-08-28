import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.valueInPercent.pr2};
  width: ${({ theme }) => theme.valueInPercent.pr30};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.fontColor};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.valueInPx.px15};
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    padding: ${({ theme }) => theme.valueInPx.px15};
    width: ${({ theme }) => theme.valueInPercent.pr80};
  }
`;

export const SearchWrapper = styled.form`
  margin: ${({ theme }) => theme.indentation.i0} auto;
  margin-bottom: ${({ theme }) => theme.indentation.i5};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${({ theme }) => theme.valueInPx.px15};
  padding-right: ${({ theme }) => theme.valueInPx.px15};
  background: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.valueInPx.px15};
  border: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};

  &:hover {
    border-color: ${({ theme }) => theme.usedColors.darkBlue};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.usedColors.twitterColor};
  }
`;

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px16};
  height: ${({ theme }) => theme.valueInPx.px16};
  background: transparent;
  opacity: 0.6;

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    width: ${({ theme }) => theme.valueInPx.px20};
    height: ${({ theme }) => theme.valueInPx.px20};
  }
`;

export const Input = styled.input`
  width: ${({ theme }) => theme.valueInPercent.pr80};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  padding: ${({ theme }) => theme.indentation.i15};
  background-color: transparent;
  outline: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.fontColor};

  &::placeholder {
    color: ${({ theme }) => theme.colors.fontColor};
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    width: ${({ theme }) => theme.valueInPercent.pr90};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const ResultWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.indentation.i5};
  padding: ${({ theme }) => theme.indentation.i15};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.valueInPx.px15};
  border: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};
`;

export const Title = styled.p`
  height: ${({ theme }) => theme.valueInPercent.pr100};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.fontColor};
  background: transparent;
`;

export const ResultList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px15};
  margin: ${({ theme }) => theme.valueInPercent.pr2} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  background-color: transparent;
`;

export const ActionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const SideSearchAction = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.usedColors.twitterColor};
  background: transparent;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Nav = styled.ul`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  margin-top: ${({ theme }) => theme.valueInPercent.pr2};
  display: flex;
  gap: ${({ theme }) => theme.valueInPx.px5};
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const NavItem = styled.li`
  margin-top: ${({ theme }) => theme.valueInPercent.pr2};
  margin-left: ${({ theme }) => theme.valueInPercent.pr2};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const NavItemLink = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.usedColors.twitterColor};
    cursor: pointer;
  }
`;
