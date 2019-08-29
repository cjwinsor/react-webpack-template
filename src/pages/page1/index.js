import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const App = ({name}) => {
  return <div>Hello React,Webpack 4 & Babel 7! {name}</div>;
};

ReactDOM.render(<App name="Kevin" />, document.querySelector("#root"));