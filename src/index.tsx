import * as ReactDOM from "react-dom";
import * as React from "react";
import "../dist/styles.css";
import { Game } from "./components/Game";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);

const App: React.FC = () => {
  // const dispatch = useDispatch();
  React.useEffect(() => {
    const timer: number = setInterval(() => {}, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
