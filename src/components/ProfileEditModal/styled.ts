import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    margin: ${theme.indentation.i0} auto;
    max-height: ${theme.valueInPercent.pr80};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: ${theme.dimensions.mobile}px) {
      height: ${theme.valueInPercent.pr80};
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.valueInPx.px15};
    margin-bottom: ${theme.valueInPx.px20};
    width: ${theme.valueInPercent.pr50};
  `}
`;

export const EditItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${theme.valueInPx.px5};
    width: ${theme.valueInPercent.pr100};
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    padding: ${theme.valueInPx.px15} ${theme.valueInPx.px0};
    font-size: ${theme.fontSizes.xxxl};
    font-weight: ${theme.fontWeight.semibold};
    line-height: ${theme.valueInPx.px20};
    color: ${theme.colors.fontColor};
  `}
`;

export const GenderBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${theme.valueInPx.px10};
    width: ${theme.valueInPercent.pr100};
  `}
`;

export const Credentials = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeight.medium};
    line-height: ${theme.valueInPx.px10};
    color: ${theme.usedColors.twitterColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.l}px;
    }
  `}
`;

export const InputItem = styled.input`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    max-width: ${theme.valueInPx.px400};
    height: ${theme.valueInPx.px40};
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeight.medium};
    line-height: ${theme.valueInPx.px25};
    color: ${theme.colors.fontColor};
    word-break: break-word;
    background: transparent;
    border: none;
    border-bottom: 1px solid ${theme.usedColors.grayOpacity};

    &:hover {
      border-bottom: 1px solid ${theme.usedColors.gray};
      outline: none;
    }

    &:focus {
      border-bottom: 1px solid ${theme.usedColors.twitterColor};
      outline: none;
    }
  `}
`;

export const ErrorText = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i10};
    font-size: ${theme.fontSizes.m};
    color: ${theme.usedColors.red};
    align-self: flex-start;
  `}
`;

export const UserIconItem = styled.div``;

export const UserIcon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px150};
    height: ${theme.valueInPx.px150};
  `}
`;
