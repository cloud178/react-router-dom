// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import {BrowserRouter} from "react-router-dom";
//
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
// root.render(
//     <App/>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
//
// // const root = document.getElementById("root");
// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
//
// ReactDOM.createRoot(root).render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />} />
//         </Routes>
//     </BrowserRouter>
// );






import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
    //  todo вроде как для работы с github pages нужно использовать вместо browserRouter HashRouter, но это не точно, чекнуть
    <BrowserRouter>
        {/*<Routes>*/}
        {/*    <Route path="/" element={<App />} />*/}
        {/*</Routes>*/}
        <App/>
    </BrowserRouter>
);

reportWebVitals();
