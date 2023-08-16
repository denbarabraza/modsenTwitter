import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  padding: ${({ theme }) => theme.indentation.i25} ${({ theme }) => theme.indentation.i15}
    ${({ theme }) => theme.indentation.i10};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.formBackground};
  border-bottom: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.grayOpacity};

  color: ${({ theme }) => theme.colors.fontColor};

  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: backwards;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: ${({ theme }) => theme.valueInPercent.pr100};
  }
`;

export const TweetBlock = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr20};
  background-color: transparent;
`;

export const Tweet = styled.form`
  position: relative;
  margin: ${({ theme }) => theme.indentation.i0} auto;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: transparent;
`;

export const TextAreaWrapper = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  padding-left: ${({ theme }) => theme.indentation.i25};
  height: ${({ theme }) => theme.valueInPercent.pr100};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px70};
  height: ${({ theme }) => theme.valueInPx.px70};
  align-self: flex-start;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.valueInPx.px10};

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImageIcon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px20};
  height: ${({ theme }) => theme.valueInPx.px20};
  align-self: flex-start;
  background-color: transparent;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TextArea = styled.textarea`
  margin-top: ${({ theme }) => theme.indentation.i15};
  margin-bottom: ${({ theme }) => theme.indentation.i15};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPercent.pr80};
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  background-color: transparent;
  resize: none;
  border: none;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.usedColors.grayOpacity};
    opacity: 0.8;
  }

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const ErrorText = styled.p`
  margin-bottom: ${({ theme }) => theme.indentation.i25};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.usedColors.twitterColor};
  align-self: flex-start;
`;

export const FileWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.indentation.i15};
  background-color: transparent;
`;

export const UploadImage = styled.input``;

export const UploadFileLabel = styled.label`
  background-color: transparent;
  justify-content: start;
  cursor: pointer;
`;

export const PreloadImage = styled.img`
  margin-bottom: ${({ theme }) => theme.indentation.i15};
  width: ${({ theme }) => theme.valueInPercent.pr20};
  height: fit-content;
  border-radius: ${({ theme }) => theme.valueInPx.px15};
`;
