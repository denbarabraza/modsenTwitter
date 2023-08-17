import { Container, Spinner, Wrapper } from './style.ts';

export const Loader = () => {
  return (
    <Container>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Container>
  );
};
