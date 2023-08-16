export interface IButton {
  type?: 'submit';
  title: string;
  isValid: boolean;
  callBack?: () => void;
}
