import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@middleware/authorization';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
// @ts-ignore
import theme from '@rebass/preset';

ReactDOM.render(
  <Auth0Provider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Auth0Provider>, document.getElementById('root'));
