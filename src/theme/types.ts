export interface IUsedColors {
  black: string;
  blackOpacity: string;
  white: string;
  darkGrayBlue: string;
  darkBlue: string;
  gray: string;
  grayOpacity: string;
  twitterColor: string;
  red: string;
}

export interface ITheme {
  colors: {
    fontColor: string;
    fontColorOpacity: string;
    headBackground: string;
    mainBackground: string;
    formBackground: string;
    boxShadow: string;
    toggleBackground: string;
    toggleBackgroundChecked: string;
    toggleCircle: string;
    toggleBorder: string;
  };
  usedColors: IUsedColors;
  fontSizes: {
    sm: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
    x36: string;
    x60: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  indentation: {
    i0: number;
    i5: string;
    i10: string;
    i15: string;
    i20: string;
    i25: string;
    i30: string;
    i40: string;
    i50: string;
    i150: string;
  };
  valueInPx: {
    px0: string;
    px1: string;
    px2: string;
    px5: string;
    px10: string;
    px15: string;
    px16: string;
    px20: string;
    px25: string;
    px30: string;
    px40: string;
    px45: string;
    px50: string;
    px60: string;
    px70: string;
    px100: string;
    px150: string;
    px200: string;
    px250: string;
    px300: string;
    px370: string;
    px400: string;
    px480: string;
  };
  valueInPercent: {
    pr2: string;
    pr10: string;
    pr20: string;
    pr40: string;
    pr50: string;
    pr60: string;
    pr70: string;
    pr80: string;
    pr100: string;
    pr150: string;
    pr300: string;
  };
  valueInVh: {
    vh7: string;
    vh18: string;
    vh30: string;
    vh40: string;
    vh50: string;
    vh60: string;
    vh75: string;
    vh90: string;
    vh100: string;
  };
  valueInVw: {
    vw25: string;
    vw35: string;
    vw50: string;
    vw60: string;
    vw80: string;
    vw90: string;
    vw100: string;
  };
  dimensions: {
    mobile: number;
    tablet: number;
    laptop: number;
    bigScreen: number;
  };
}

export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark',
}
