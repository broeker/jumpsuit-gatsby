/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  custom: {
    logofont: 'Baloo Bhaina',
    secondarytext: '#666',
  },
  palette: {
    primary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    secondary: {
      light: blue[300],
      main: blue[800],
      dark: blue[700],
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Roboto',
    fontSize: 20,
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: '2em',
      color: '#666',
    },
    h5: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: '1.2em',
      color: '#666',
    },
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
