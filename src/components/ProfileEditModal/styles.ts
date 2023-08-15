import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: calc(
    ${({ theme }) => theme.valueInVh.vh100} + ${({ theme }) => theme.valueInPx.px40}
  );
  margin: ${({ theme }) => theme.indentation.i0} auto;
  max-height: ${({ theme }) => theme.valueInPercent.pr80};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.valueInPercent.pr80};
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.valueInPx.px15};
  margin-bottom: ${({ theme }) => theme.valueInPx.px20};
  width: ${({ theme }) => theme.valueInPercent.pr50};
`;

export const EditItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.valueInPx.px5};
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const Title = styled.h3`
  padding: ${({ theme }) => theme.valueInPx.px15} ${({ theme }) => theme.valueInPx.px0};
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.valueInPx.px20};
  color: ${({ theme }) => theme.colors.fontColor};
`;
export const GenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.valueInPx.px10};
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const Credentials = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.valueInPx.px10};
  color: ${({ theme }) => theme.usedColors.twitterColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const InputItem = styled.input`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  max-width: ${({ theme }) => theme.valueInPx.px400};
  height: ${({ theme }) => theme.valueInPx.px40};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.valueInPx.px25};
  color: ${({ theme }) => theme.colors.fontColor};
  word-break: break-word;

  background: transparent;
  border: none;

  border-bottom: 1px solid ${({ theme }) => theme.usedColors.grayOpacity};

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.usedColors.gray};
    outline: none;
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.usedColors.twitterColor};
    outline: none;
  }
`;

export const ErrorText = styled.div`
  margin-bottom: ${({ theme }) => theme.indentation.i10};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.usedColors.red};
  align-self: flex-start;
`;

export const UserIconItem = styled.div``;

export const UserIcon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px150};
  height: ${({ theme }) => theme.valueInPx.px150};
`;
