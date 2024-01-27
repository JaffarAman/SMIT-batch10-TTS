// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";

const root = document.getElementById("root")
const createRoot = ReactDom.createRoot(root)
createRoot.render(<App />)