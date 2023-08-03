import { DefaultTheme } from 'styled-components';

import { ITheme, IUsedColors, ThemeEnum } from '@/theme/types';

export const usedColors: IUsedColors = {
  black: 'rgb(0,0,0)',
  blackOpacity: 'rgba(0,0,0,0.5)',
  white: 'rgb(255,255,255)',
  gray: 'rgb(68,68,68)',
  grayOpacity: 'rgba(143,143,143,0.5)',
  twitterColor: 'rgba(29,161,242)',
};

const baseTheme: ITheme = {
  colors: {
    fontColor: usedColors.black,
    fontColorOpacity: usedColors.blackOpacity,
    headBackground: usedColors.twitterColor,
    mainBackground: usedColors.white,
    boxShadow: usedColors.grayOpacity,
    toggleBackground: usedColors.white,
    toggleBackgroundChecked: usedColors.white,
    toggleCircle: usedColors.twitterColor,
    toggleBorder: usedColors.twitterColor,
  },
  usedColors: { ...usedColors },
  fontSizes: {
    sm: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '22px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  indentation: {
    i0: 0,
    i5: '5px',
    i10: '10px',
    i20: '20px',
    i30: '30px',
    i40: '40px',
    i50: '50px',
  },
  valueInPx: {
    px0: '0',
    px1: '0',
    px2: '2px',
    px5: '5px',
    px10: '10px',
    px20: '20px',
    px25: '25px',
    px30: '30px',
    px40: '40px',
    px45: '45px',
    px50: '50px',
    px60: '60px',
    px70: '70px',
    px100: '100px',
    px150: '150px',
    px200: '200px',
    px250: '250px',
    px300: '300px',
    px370: '370px',
    px400: '400px',
    px480: '480px',
  },
  valueInPercent: {
    pr10: '10%',
    pr50: '50%',
    pr70: '70%',
    pr100: '100%',
    pr150: '150%',
  },
  valueInVh: {
    vh7: '7vh',
    vh18: '18vh',
    vh30: '30vh',
    vh40: '40vh',
    vh50: '50vh',
    vh60: '60vh',
    vh75: '75vh',
    vh90: '90vh',
    vh100: '100vh',
  },
  valueInVw: {
    vw25: '25vw',
    vw35: '35vw',
    vw50: '50vw',
    vw60: '60vw',
    vw80: '80vw',
    vw90: '90vw',
    vw100: '100vw',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.Light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.Dark,

  colors: {
    ...baseTheme.colors,
    fontColor: usedColors.white,
    fontColorOpacity: usedColors.grayOpacity,
    headBackground: usedColors.black,
    mainBackground: usedColors.black,
    boxShadow: usedColors.grayOpacity,
    toggleBackground: usedColors.twitterColor,
    toggleBackgroundChecked: usedColors.twitterColor,
    toggleCircle: usedColors.white,
    toggleBorder: usedColors.twitterColor,
  },
};
