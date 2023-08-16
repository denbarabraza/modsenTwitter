import { ReactNode } from 'react';

export interface IFormWrapper {
  children?: ReactNode;
  title?: string;
  questionText?: string;
  linkTitle?: string;
  linkPath?: string;
}
