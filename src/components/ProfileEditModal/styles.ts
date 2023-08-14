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
  justify-content: flex-start;
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
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const Credentials = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.valueInPx.px25};
  color: ${({ theme }) => theme.colors.fontColor};

  @media (min-width: ${({ theme }) => theme.dimensions.bigScreen}px) {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;

export const UserIconItem = styled.div``;

export const UserIcon = styled.img`
  width: ${({ theme }) => theme.valueInPx.px150};
  height: ${({ theme }) => theme.valueInPx.px150};
`;
