// import './App.css';
import { Form, Field } from 'react-final-form'

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import DocList from "./pages/DocList";
import Home from "./pages/Home";
import Amanda from "./pages/Amanda";
import Sally from "./pages/Sally";
import Morgan from "./pages/Morgan";
import Rita from "./pages/Rita";
import Page2 from "./pages/Page2";

import React, {useState} from 'react'
import Styles from './Styles'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

function App() {
  const changeText = () => {
    window.alert("clicked");
  //  document.getElementById('vampire').innerHTML = 'newtext';
  }
  const [buttonText, setButtonText] = useState('Submit');
 
    const handleClick = () => {
      window.alert('newclick');
        setButtonText(buttonText === 'Submit' ? 'Loading...' : 'Submit');
    };

  return (
    <Styles>
    <h1>Hello, Brienne.</h1>
    <div>
            <h1>Geeksforgeeks</h1>
            <button onClick={handleClick} >
                {buttonText}
            </button>
        </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocList />}>
        <Route index element={<Home />} />
        <Route path="Amanda" element={<Amanda />} />
        <Route path="Sally" element={<Sally />} />
        <Route path="Morgan" element={<Morgan />} />
        <Route path="Rita" element={<Rita />} />
        <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Styles>
  );
}

export default App;
