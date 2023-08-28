import { Container, Spinner, Wrapper } from './styled.ts';

export const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Container>
  );
};
