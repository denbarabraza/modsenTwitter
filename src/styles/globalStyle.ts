import { createGlobalStyle } from 'styled-components';

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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
