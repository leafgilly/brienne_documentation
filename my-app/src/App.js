// import './App.css';
// import { Form, Field } from 'react-final-form'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DocList from "./pages/DocList";
import Page1 from "./pages/Page1";
import Amanda from "./pages/Amanda";
import Sally from "./pages/Sally";
import Morgan from "./pages/Morgan";
import Rita from "./pages/Rita";
import Page2 from "./pages/Page2";
import Styles from './Styles'

function App() {

  return (
    <Styles>
    <h1>Hello, Brienne.</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Page1 />} />
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
