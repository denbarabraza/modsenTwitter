import myBanner from '@/assets/back-twitter.png';
import myGoogleSvg from '@/assets/google.svg';
import myLogoSvg from '@/assets/logo.svg';
import { homePageText } from '@/constants/dataForPages.ts';
import { PATH } from '@/constants/path.ts';
import { useAppDispatch } from '@/hooks/useStoreControl.ts';
import { setAlert } from '@/store/slice/appSlice.ts';
import { signUpWithGoogleThunk } from '@/store/thunks';

import {
  Banner,
  ButtonIcon,
  ButtonLink,
  ButtonWithIcon,
  ButtonWrapper,
  Footer,
  Form,
  Icon,
  IconWrapper,
  Main,
  Nav,
  NavItem,
  NavItemLink,
  SubTitle,
  Text,
  TextLink,
  Title,
  Wrapper,
} from './style.ts';

const {
  title,
  subTitle,
  signUpGoogleText,
  signUpEmailText,
  termsText,
  termsOne,
  termsTwo,
  termsThree,
  question,
  loginText,
  navLinks,
  copyrightText,
} = homePageText;

export const Home = () => {
  const dispatch = useAppDispatch();
  const handleGoogleSignUp = async () => {
    try {
      dispatch(signUpWithGoogleThunk());
    } catch (e) {
      dispatch(
        setAlert({
          isVisible: true,
          message: (e as Error).message,
        }),
      );
    }
  };

  return (
    <Wrapper>
      <Main>
        <Banner src={myBanner} alt='Twitter Banner' />
        <Form>
          <IconWrapper>
            <Icon src={myLogoSvg} alt='Twitter Logo' />
          </IconWrapper>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <ButtonWrapper type='button' onClick={handleGoogleSignUp}>
            <ButtonWithIcon>
              <ButtonIcon src={myGoogleSvg} alt='Google Logo' />
              {signUpGoogleText}
            </ButtonWithIcon>
          </ButtonWrapper>
          <ButtonLink type='button' to={PATH.SIGN_UP}>
            {signUpEmailText}
          </ButtonLink>
          <Text>
            {termsText}
            <TextLink to={navLinks[2].to}>{navLinks[2].name}</TextLink>
            {termsOne}
            <TextLink to={navLinks[3].to}>{navLinks[3].name}</TextLink>
            {termsTwo}
            <TextLink to={navLinks[4].to}>{navLinks[4].name}</TextLink>
            {termsThree}
          </Text>
          <Text>
            {question}
            <TextLink to={PATH.LOGIN}>{loginText}</TextLink>
          </Text>
        </Form>
      </Main>
      <Footer>
        <Nav>
          {navLinks.map(({ name, to }) => (
            <NavItem key={name}>
              <NavItemLink to={to}>{name}</NavItemLink>
            </NavItem>
          ))}
          <NavItem>{copyrightText}</NavItem>
        </Nav>
      </Footer>
    </Wrapper>
  );
};
