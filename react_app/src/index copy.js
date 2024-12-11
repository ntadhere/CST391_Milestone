// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App.js"



// ReactDOM.render(<App />, document.querySelector("#root"));

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
