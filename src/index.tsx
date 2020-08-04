import * as ReactDOM from "react-dom";
import * as React from "react";
import { Game } from "./components/Game";
import { MenuPanel } from "./components/Menupanel";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import "../scss/app.scss";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div id="app">
        <Game />
        <MenuPanel />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
