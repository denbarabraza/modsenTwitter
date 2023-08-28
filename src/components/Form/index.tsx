import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import twitter from '@/assets/logo.svg';
import { IFormWrapper } from '@/components/Form/interface.ts';
import { PATH } from '@/constants/path.ts';

import {
  Container,
  IconTwitter,
  InnerWrapper,
  LinkRegistration,
  TextQuestion,
  Title,
  Wrapper,
} from './styled.ts';

export const FormWrapper: FC<IFormWrapper> = memo(
  ({ children, title, questionText, linkTitle, linkPath }) => {
    const navigate = useNavigate();
    const onClickNavigate = () => {
      if (linkPath) {
        navigate(linkPath, { replace: true });
      }
    };

    const onClickNavigateHome = () => {
      if (linkPath) {
        navigate(PATH.HOME, { replace: true });
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
            {linkTitle === 'Sign Up' && (
              <LinkRegistration onClick={onClickNavigateHome}>
                Go to Home
              </LinkRegistration>
            )}
          </InnerWrapper>
        </Wrapper>
      </Container>
    );
  },
);
