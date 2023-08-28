import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    padding: ${theme.indentation.i25} ${theme.indentation.i15} ${theme.indentation.i10};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${theme.colors.formBackground};
    border-bottom: ${theme.valueInPx.px1} solid ${theme.usedColors.grayOpacity};

    color: ${theme.colors.fontColor};

    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;

    @media (max-width: ${theme.dimensions.mobile}px) {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: ${theme.valueInPercent.pr100};
    }
  `};
`;

export const TweetBlock = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr20};
    background-color: transparent;
  `};
`;

export const Tweet = styled.form`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.indentation.i0} auto;
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr100};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: transparent;
  `};
`;

export const TextAreaWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.valueInPercent.pr100};
    padding-left: ${theme.indentation.i25};
    height: ${theme.valueInPercent.pr100};
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  `};
`;

export const Icon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px70};
    height: ${theme.valueInPx.px70};
    align-self: flex-start;
    background-color: transparent;
    border-radius: ${theme.valueInPx.px10};

    &:hover {
      transform: scale(1.2);
    }
  `};
`;

export const ImageIcon = styled.img`
  ${({ theme }) => css`
    width: ${theme.valueInPx.px20};
    height: ${theme.valueInPx.px20};
    align-self: flex-start;
    background-color: transparent;

    &:hover {
      transform: scale(1.2);
    }
  `};
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    margin-top: ${theme.indentation.i15};
    margin-bottom: ${theme.indentation.i15};
    width: ${theme.valueInPercent.pr100};
    height: ${theme.valueInPercent.pr80};
    color: ${theme.colors.fontColor};
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeight.medium};
    background-color: transparent;
    resize: none;
    border: none;
    outline: none;

    &::placeholder {
      color: ${theme.usedColors.grayOpacity};
      opacity: 0.8;
    }

    @media (min-width: ${theme.dimensions.bigScreen}px) {
      font-size: ${theme.fontSizes.xxl};
    }
  `};
`;

export const FileWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i15};
    background-color: transparent;
  `};
`;

export const UploadImage = styled.input``;

export const UploadFileLabel = styled.label`
  background-color: transparent;
  justify-content: start;
  cursor: pointer;
`;

export const PreloadImage = styled.img`
  ${({ theme }) => css`
    margin-bottom: ${theme.indentation.i15};
    width: ${theme.valueInPercent.pr20};
    height: fit-content;
    border-radius: ${theme.valueInPx.px15};
  `};
`;
