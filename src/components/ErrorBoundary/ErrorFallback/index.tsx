import { ErrorText, ErrorWrapper } from '@/components/ErrorBoundary/style.ts';

export const ErrorFallback = () => {
  return (
    <ErrorWrapper>
      <ErrorText>Something went wrong, please reload the page</ErrorText>
    </ErrorWrapper>
  );
};
