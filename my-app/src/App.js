import './App.css';
// import { Form, Field } from 'react-final-form'

import {Routes, Route, HashRouter } from "react-router-dom";
import Amanda from "./pages/Amanda";
import Sally from "./pages/Sally";
import Sally2 from "./pages/Sally2";
import Morgan from "./pages/Morgan";
import Rita from "./pages/Rita";
import Brienne from "./pages/Brienne";
import Brienne2 from "./pages/Brienne2";
import Page2 from "./pages/Page2";
import Misc from "./pages/Misc";
import Styles from './Styles'

function App() {

  return (
    <Styles>
    <HashRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Page2 />} />
        {/* <Route index element={<Page1 />} /> */}
        <Route path="/Amanda" element={<Amanda />} />
        <Route path="/Sally" element={<Sally />} />
        <Route path="/Morgan" element={<Morgan />} />
        <Route path="/Rita" element={<Rita />} />
        <Route path="/theAgent" element={<Brienne />} />
        <Route path="/acknowledgements" element={<Misc />} />
        <Route path="/Sally/prank" element={<Sally2 />} />
        <Route path="/Brienne/tryAgain" element={<Brienne2 />} />
        </Route>
      </Routes>
    </HashRouter>
    </Styles>
  );
}

export default App;
