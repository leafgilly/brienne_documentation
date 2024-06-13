import { Outlet, Link } from "react-router-dom";

const DocList = () => {

  const pagesVisited = JSON.parse(document.cookie);
  const enableBrienne = pagesVisited["Amanda"] && pagesVisited["Sally"] && pagesVisited["Morgan"] && pagesVisited["Rita"];
  console.log(enableBrienne);

  const disableAmanda = !(pagesVisited["Amanda"]);
  const disableSally = !(pagesVisited["Sally"]);
  const disableMorgan = !(pagesVisited["Morgan"]);
  const disableRita = !(pagesVisited["Rita"]);

  return (
    <>
    <p>A permanent link tree for a list of documents.</p>
    <ul>
      <li>
      <Link to={disableAmanda ? "/Amanda" : "#"} className={disableAmanda ? 'main-link-a' : 'disabled-link'}>Amanda</Link>
      </li>
      <li>
      <Link to={disableSally ? "/Sally" : "#"} className={disableSally ? 'main-link-s' : 'disabled-link'}>Sally</Link>
      {/* <Link to="/Sally">Sally</Link> */}
      </li>
      <li>
      <Link to={disableMorgan ? "/Morgan" : "#"} className={disableMorgan ? 'main-link-m' : 'disabled-link'}>Morgan</Link>
      </li>
      <li>
      <Link to={disableRita ? "/Rita" : "#"} className={disableRita ? 'main-link-r' : 'disabled-link'}>Rita</Link>
      </li>
      {/* <li>
      <Link to="/'Brienne'">"Brienne"</Link>
      </li> */}
      <li>
      <Link to={enableBrienne ? "/'Brienne'" : "#"} className={enableBrienne ? 'main-link-b' : 'disabled-link'}>"Brienne"</Link>
      </li>
      <li>
        <Link to="/misc">Misc</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
      <Outlet />
    </>
  )
};

export default DocList;
