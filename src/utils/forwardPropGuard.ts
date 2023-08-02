export const forwardPropGuard =
  <TProps extends {}>(propKeys: Array<keyof TProps>) =>
  (propName: string) =>
    !propKeys.includes(propName as keyof TProps);
