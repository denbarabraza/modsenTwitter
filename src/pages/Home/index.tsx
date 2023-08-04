export const Home = () => {
  return (
    <div>Home</div>
    /* <Wrapper>
               <Main>
                 <Banner src={MyBanner} alt='Twitter Banner' />
                 <Form>
                   <IconWrapper>
                     <Icon src={MyLogoSvg} alt='Twitter Logo' />
                   </IconWrapper>
                   <Title>{title}</Title>
                   <SubTitle>{subTitle}</SubTitle>
                   <ButtonWrapper onClick={handleGoogleSignUp} data-cy='GoogleSignIn'>
                     <ButtonWithIcon>
                       <ButtonIcon src={MyGoogleSvg} alt='Google Logo' />
                       {signUpGoogleText}
                     </ButtonWithIcon>
                   </ButtonWrapper>
                   <ButtonLink data-cy='signUpLink' to={SIGN_UP}>
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
                     <TextLink data-cy='logInLink' to={LOGIN}>
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
               <Alert />
             </Wrapper> */
  );
};
