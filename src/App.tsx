import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "@fontsource/roboto";
import { Provider } from "react-redux";

import { Home } from "@Home/pages/Home";
import store from "@Home/store";
import "@Home/translations";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
