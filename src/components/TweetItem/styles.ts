import styled from 'styled-components';

import { forwardPropGuard } from '@/utils/forwardPropGuard.ts';

export const Wrapper = styled.header`
  position: relative;
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  padding: ${({ theme }) => theme.indentation.i5} ${({ theme }) => theme.indentation.i15};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-bottom: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding: ${({ theme }) => theme.indentation.i15};
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }
`;

export const Tweet = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.formBackground};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
`;

export const TweetContentWrapper = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  padding: ${({ theme }) => theme.indentation.i10};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.valueInPx.px15};
  right: ${({ theme }) => theme.valueInPx.px5};
  width: ${({ theme }) => theme.valueInPercent.pr10};
  height: ${({ theme }) => theme.valueInPercent.pr80};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.usedColors.twitterColor};
  color: ${({ theme }) => theme.usedColors.grayOpacity};
  border-radius: ${({ theme }) => theme.valueInPx.px10};

  z-index: 100;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px60};
  height: ${({ theme }) => theme.valueInPx.px50};
  align-self: flex-start;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImageIcon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px20};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  align-self: flex-start;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Info = styled.div`
  position: relative;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const UserDataBlock = styled.div`
  position: relative;
  width: ${({ theme }) => theme.valueInPercent.pr80};
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
`;

export const EditIcon = styled.img`
  position: absolute;
  right: ${({ theme }) => theme.valueInPx.px5};
  width: ${({ theme }) => theme.valueInPx.px20};
  height: ${({ theme }) => theme.valueInPx.px15};
  align-self: flex-start;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Name = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.indentation.i5};
  margin-right: ${({ theme }) => theme.indentation.i5};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const Credentials = styled.p`
  margin-right: ${({ theme }) => theme.indentation.i5};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.usedColors.twitterColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  }
`;

export const TweetText = styled.p`
  margin: ${({ theme }) => theme.indentation.i15} ${({ theme }) => theme.indentation.i0};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: fit-content;
  background: transparent;
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin-bottom: ${({ theme }) => theme.indentation.i5};
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.valueInPercent.pr30};
  object-fit: contain;
  border-radius: ${({ theme }) => theme.valueInPx.px10};
`;

export const LikeCount = styled('p').withConfig({
  shouldForwardProp: forwardPropGuard<{ isLiked: boolean }>(['isLiked']),
})<{ isLiked: boolean }>`
  margin-left: ${({ theme }) => theme.indentation.i5};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme, isLiked }) =>
    isLiked ? theme.usedColors.red : theme.colors.fontColor};
`;
