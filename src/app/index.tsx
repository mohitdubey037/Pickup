import "dotenv";
import { Helmet } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Routes from "Routes";
import { Provider } from "react-redux";
import store, { persistor } from "store/configureStore";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"; 


export function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App">
      <ToastContainer position={"top-right"} />
      <Helmet
        titleTemplate="PickUps"
        defaultTitle="PickUps"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="PickUps" />
      </Helmet>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </div>
  );
}
