import { Outlet, Link } from "react-router-dom";

const DocList = () => {

  const pagesVisited = JSON.parse(document.cookie);
  const enableBrienne = pagesVisited["Amanda"] && pagesVisited["Sally"] && pagesVisited["Morgan"] && pagesVisited["Rita"];
  console.log(enableBrienne);
 
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
      {/* <li>
      <Link to="/'Brienne'">"Brienne"</Link>
      </li> */}
      <li>
      <Link to={enableBrienne ? "/'Brienne'" : "#"} className='disabled-link'>"Brienne"</Link>
      {/* TODO: UPDATE THE CLASSNAME BASED ON WHETHER OR NOT ENABLEBRIENNE IS TRUE */}
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
