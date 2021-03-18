import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import "./index.css";
import Detail from "./pages/detail";
import Homepage from "./pages/home";
import Upload from "./pages/upload/upload";

const App = () => {
  return (
    <div className="select-none">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={"/"} exact component={Homepage} />
          <Route path={"/upload"} component={Upload} />
          <Route path={"/detail/:id"} component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
