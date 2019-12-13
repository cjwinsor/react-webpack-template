import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const App = ({name}) => {
  return <div>{name} is awesome!</div>;
};

ReactDOM.render(<App name="Kevin" />, document.querySelector("#root2"));