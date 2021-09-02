import "./App.css";
import Routes from "./Routes";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { AuthReducer } from "./store/reducers/Auth";

const rootReducer = combineReducers({ authReducer:AuthReducer });

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
