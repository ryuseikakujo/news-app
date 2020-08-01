import React from "react";
// import dummyArticles from "./dummies/articles.json";
import { AppNavigator } from "./navigation";
import { Provider } from "react-redux";
import store from "./store";

export default App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
