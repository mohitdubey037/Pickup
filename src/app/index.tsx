
import * as React from 'react';
import { Helmet } from 'react-helmet-async';


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
        titleTemplate="PickUps"
        defaultTitle="PickUps"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="PickUps" />
      </Helmet>
  <Provider store={store}>


      <Routes/>
      </Provider>
      </div>
      );
}
