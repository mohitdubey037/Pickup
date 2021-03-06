import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
  combineReducers,
} from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import { auth } from "./reducers/AuthReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { orderReducer } from "./reducers/OrderReducer";
import { createReducer } from "./reducers";
import { localStore } from "./reducers/LocalStoreReducer";
import { signUp } from "./reducers/SignUpReducer";
import rootSaga from "../sagas";
import { signIn } from "./reducers/SignInReducer";
import { globalState } from "./reducers/GlobalReducer";
import { singleShipment } from "./reducers/SingleShipmentReducer";
import { paymentCardReducer } from "./reducers/PaymentReducer";
import { childAccountDetails } from "./reducers/ChildAccountReducer";

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
    whitelist: ["auth"],
    blacklist: [
      "signUp",
      "localStore",
      "signIn",
      "globalState",
      "singleShipment",
      "order",
    ],
    storage,
  };
  const rootReducer = combineReducers({
    auth: auth,
    localStore: localStore,
    signUp: signUp,
    signIn: signIn,
    globalState: globalState,
    singleShipment: singleShipment,
    order: orderReducer,
    paymentCard: paymentCardReducer,
    childAccountDetails: childAccountDetails
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== "production",
    enhancers,
  });
  runSaga(rootSaga);
  return store;
}

const store = configureAppStore();
export const persistor = persistStore(store);

export default store;
