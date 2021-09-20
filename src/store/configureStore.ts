import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
  combineReducers,
} from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import { auth } from "./reducers/Auth";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { createReducer } from "./reducers";
import { localStore } from "./reducers/LocalStore";
import { signUp } from "./reducers/SignUp";
import rootSaga from "sagas";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];
  const persistConfig = {
    key: "root",
    blacklist:['signUp'],
    storage,
  };
  const rootReducer = combineReducers({
    auth: auth,
    localStore: localStore,
    signUp: signUp,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== "production" ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  });
  runSaga(rootSaga);
  return store;
}

const store = configureAppStore();
export const persistor = persistStore(store);

export default store;
