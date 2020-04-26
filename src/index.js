import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { addCharcterById } from "./actions";

const store = createStore(rootReducer);
console.log("store.getState()", store.getState());
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(addCharcterById(2));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
