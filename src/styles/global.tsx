import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  /* Fonts */
  @font-face {
    font-family: "WorkSans";
    src: url("/fonts/WorkSans/WorkSans-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Light.ttf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins/Poppins-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  /* Reset css */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  textarea, input, button, select {
    font-family: inherit;
  }
`;
