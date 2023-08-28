import styled, { css } from 'styled-components';

import { forwardPropGuard } from '@/utils/forwardPropGuard.ts';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    padding: ${theme.indentation.i5} ${theme.indentation.i15};

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${theme.colors.mainBackground};
    border-bottom: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};

    @media (max-width: ${theme.dimensions.mobile}px) {
      padding: ${theme.indentation.i15};
      width: ${theme.valueInPercent.pr100};
    }
  `}
`;

export const Tweet = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: ${theme.colors.tweetBackground};
    border-radius: ${theme.valueInPx.px10};
  `}
`;

export const TweetContentWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    padding: ${theme.indentation.i10};
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: ${theme.valueInPx.px15};
    right: ${theme.valueInPx.px5};
    width: ${theme.valueInPercent.pr10};
    height: ${theme.valueInPercent.pr80};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.usedColors.twitterColor};
    color: ${theme.usedColors.grayOpacity};
    border-radius: ${theme.valueInPx.px10};

    z-index: 100;
  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px60};
    height: ${theme.valueInPx.px50};
    align-self: flex-start;
    background-color: transparent;
    border-radius: ${theme.valueInPx.px10};
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  `}
`;

export const ImageIcon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px20};
    height: ${theme.valueInPercent.pr100};
    align-self: flex-start;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${theme.dimensions.mobile}px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `}
`;

export const UserDataBlock = styled.div`
  position: relative;
  width: ${({ theme }) => theme.valueInPercent.pr80};
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
`;

export const EditIcon = styled.img`
  ${({ theme }) => css`
    position: absolute;
    right: ${theme.valueInPx.px5};
    width: ${theme.valueInPx.px20};
    height: ${theme.valueInPx.px15};
    align-self: flex-start;
    background-color: transparent;

    &:hover {
      transform: scale(1.2);
    }
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.indentation.i5};
    margin-right: ${theme.indentation.i5};
    font-size: ${theme.fontSizes.l};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.fontColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const Credentials = styled.p`
  ${({ theme }) => css`
    margin-right: ${theme.indentation.i5};
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.usedColors.twitterColor};

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl}px;
    }
  `}
`;

export const TweetText = styled.p`
  ${({ theme }) => css`
    margin: ${theme.indentation.i15} ${({ theme }) => theme.indentation.i0};
    width: ${theme.valueInPercent.pr100};
    height: fit-content;
    background: transparent;
    color: ${theme.colors.fontColor};
    word-break: break-word;
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeight.normal};

    @media (max-width: ${theme.dimensions.mobile}px) {
      margin-bottom: ${theme.indentation.i5};
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `}
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr30};
    object-fit: contain;
    border-radius: ${theme.valueInPx.px10};
  `}
`;

export const LikeCount = styled('p').withConfig({
  shouldForwardProp: forwardPropGuard<{ isLiked: boolean }>(['isLiked']),
})<{ isLiked: boolean }>`
  ${({ theme, isLiked }) => css`
    margin-left: ${theme.indentation.i5};
    font-size: ${theme.fontSizes.sm};
    font-weight: ${theme.fontWeight.normal};
    color: ${isLiked ? theme.usedColors.red : theme.colors.fontColor};
  `}
`;
