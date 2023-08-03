import { FC, memo, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import twitter from '@/assets/logo.svg';

import {
  Container,
  IconTwitter,
  InnerWrapper,
  LinkRegistration,
  TextQuestion,
  Title,
  Wrapper,
} from './style.ts';

interface IFormWrapper {
  children?: ReactNode;
  title?: string;
  questionText?: string;
  linkTitle?: string;
  linkPath?: string;
}

export const FormWrapper: FC<IFormWrapper> = memo(
  ({ children, title, questionText, linkTitle, linkPath }) => {
    const navigate = useNavigate();
    const onClickNavigate = () => {
      console.log(linkPath);

      if (linkPath) {
        navigate(linkPath, { replace: true });
      }
    };

    return (
      <Container>
        <Wrapper>
          <InnerWrapper>
            <IconTwitter src={twitter} alt='twitter logo' />
            <Title>{title}</Title>
            {children}
            {questionText && <TextQuestion>{questionText}</TextQuestion>}
            {linkPath && (
              <LinkRegistration onClick={onClickNavigate}>{linkTitle}</LinkRegistration>
            )}
          </InnerWrapper>
        </Wrapper>
      </Container>
    );
  },
);