import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@middleware/authorization';
import { configureStore } from '@store/index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
// @ts-ignore
import theme from '@rebass/preset';

const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Auth0Provider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </ThemeProvider>, document.getElementById('root'));
