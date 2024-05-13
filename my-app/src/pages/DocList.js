import { Outlet, Link } from "react-router-dom";

const DocList = () => {
  return (
    <>
    <p>A permanent link tree for a list of documents.</p>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
    
      <Outlet />
    </>
  )
};

export default DocList;
