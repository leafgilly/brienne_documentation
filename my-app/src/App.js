import './App.css';
// import { Form, Field } from 'react-final-form'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amanda from "./pages/Amanda";
import Sally from "./pages/Sally";
import Morgan from "./pages/Morgan";
import Rita from "./pages/Rita";
import Brienne from "./pages/Brienne";
import Page2 from "./pages/Page2";
import Misc from "./pages/Misc";
import Styles from './Styles'

function App() {

  return (
    <Styles>
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Page2 />} />
        {/* <Route index element={<Page1 />} /> */}
        <Route path="Amanda" element={<Amanda />} />
        <Route path="Sally" element={<Sally />} />
        <Route path="Morgan" element={<Morgan />} />
        <Route path="Rita" element={<Rita />} />
        <Route path="theAgent" element={<Brienne />} />
        <Route path="misc" element={<Misc />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Styles>
  );
}

export default App;
