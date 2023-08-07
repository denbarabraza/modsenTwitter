import myBanner from '@/assets/back-twitter.png';
import MyGoogleSvg from '@/assets/google.svg';
import MyLogoSvg from '@/assets/logo.svg';
import { homePageText } from '@/constants/homePage.ts';
import { PATH } from '@/constants/path.ts';

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
  return (
    <Wrapper>
      <Main>
        <Banner src={myBanner} alt='Twitter Banner' />
        <Form>
          <IconWrapper>
            <Icon src={MyLogoSvg} alt='Twitter Logo' />
          </IconWrapper>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <ButtonWrapper onClick={() => console.log('Google')}>
            <ButtonWithIcon>
              <ButtonIcon src={MyGoogleSvg} alt='Google Logo' />
              {signUpGoogleText}
            </ButtonWithIcon>
          </ButtonWrapper>
          <ButtonLink to={PATH.SIGN_UP}>{signUpEmailText}</ButtonLink>
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
            <TextLink data-cy='logInLink' to={PATH.LOGIN}>
              {loginText}
            </TextLink>
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
