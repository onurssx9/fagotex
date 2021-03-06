import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #454545;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body.fontLoaded {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #app {
    height: 100%;
  }

  p,
  label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5em;
  }

  div {
    display: flex;
    box-sizing: border-box;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent; 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #dedede; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #f9c53f; 
    }
  }

  * {
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }
`;
