// import './App.css';
import { Form, Field } from 'react-final-form'

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DocList from "./pages/DocList";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";

import React from 'react'
import Styles from './Styles'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

function App() {
  return (
    <Styles>
    <h1>Hello, Brienne.</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocList />}>
          <Route index element={<Home />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Styles>
  );
}

export default App;
