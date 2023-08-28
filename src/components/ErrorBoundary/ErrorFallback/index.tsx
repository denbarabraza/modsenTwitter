import { ErrorText, ErrorWrapper } from '@/components/ErrorBoundary/styled.ts';

export const ErrorFallback = () => {
  return (
    <ErrorWrapper>
      <ErrorText>Something went wrong, please reload the page</ErrorText>
    </ErrorWrapper>
  );
};
