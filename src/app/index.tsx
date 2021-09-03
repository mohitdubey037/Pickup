
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// import { GlobalStyle } from '../styles/global-styles';


import { useTranslation } from 'react-i18next';
import Routes from 'Routes';
import './App.css'
import { Provider } from 'react-redux';
import store from 'store/configureStore';

export function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App">
    <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="Pickups B2B"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
  <Provider store={store}>


      <Routes/>
      </Provider>
      </div>
      );
}
