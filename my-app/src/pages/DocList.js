import { Outlet, Link } from "react-router-dom";

import Amanda from "./Amanda";

const DocList = () => {
  return (
    <>
    <p>A permanent link tree for a list of documents.</p>
    <ul>
      <li>
      <Link to="/Amanda">Amanda</Link>
      </li>
      <li>
      <Link to="/Sally">Sally</Link>
      </li>
      <li>
      <Link to="/Morgan">Morgan</Link>
      </li>
      <li>
      <Link to="/Rita">Rita</Link>
      </li>
      <li>
        <Link to="/misc">Misc</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    {/* <p> ------------- </p>
     <Amanda /> */}
      <Outlet />
    </>
  )
};

export default DocList;
