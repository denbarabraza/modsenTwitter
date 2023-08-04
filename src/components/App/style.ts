import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Dosis';
    font-weight: 300;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7MV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 500;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 600;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ6bQV3A.ttf') format('truetype');
  }

  * {
    font-family: 'Dosis', sans-serif;
    margin: ${({ theme }) => theme.valueInPx.px0};
    padding: ${({ theme }) => theme.valueInPx.px0};
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::-webkit-scrollbar {
      width: ${({ theme }) => theme.valueInPx.px2};
      height: ${({ theme }) => theme.valueInPx.px2};
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.usedColors.white};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.usedColors.gray};
    }

    &::-webkit-scrollbar-thumb:hover,
    &::-webkit-scrollbar-thumb:active {
      background-color: ${({ theme }) => theme.usedColors.gray};
    }

    &::-webkit-scrollbar-corner {
      background-color: ${({ theme }) => theme.usedColors.white};
    }


    &::-webkit-scrollbar-thumb:horizontal {
      background-color: ${({ theme }) => theme.usedColors.gray};
    }

    &::-webkit-scrollbar-thumb:hover:horizontal,
    &::-webkit-scrollbar-thumb:active:horizontal {
      background-color: ${({ theme }) => theme.usedColors.gray};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;
