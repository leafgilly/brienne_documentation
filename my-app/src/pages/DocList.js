import { Outlet, Link } from "react-router-dom";

import {connect} from 'react-redux';

const DocList = (props) => {

  const pagesVisited = JSON.parse(document.cookie);
  const enableBrienne = pagesVisited["Amanda"] && pagesVisited["Sally"] && pagesVisited["Morgan"] && pagesVisited["Rita"];

  const disableAmanda = !(pagesVisited["Amanda"]);
  const disableSally = !(pagesVisited["Sally"]);
  const disableMorgan = !(pagesVisited["Morgan"]);
  const disableRita = !(pagesVisited["Rita"]);

  console.log(pagesVisited);

  return (
    <>
    <p>A permanent link tree for a list of documents.</p>
    <ul>
      <li>
      <Link to={disableAmanda ? "/Amanda" : "#"} class={disableAmanda ? 'main-link-a' : 'disabled-link'}>Amanda</Link>
      </li>
      <li>
      <Link to={disableSally ? "/Sally" : "#"} class={disableSally ? 'main-link-s' : 'disabled-link'}>Sally</Link>
      {/* <Link to="/Sally">Sally</Link> */}
      </li>
      <li>
      <Link to={props.MorganVisited===0 ? "/Morgan" : "#"} class={props.MorganVisited===0 ? 'main-link-m' : 'disabled-link'}>{props.MorganName}</Link>
      </li>
      <li>
      <Link to={disableRita ? "/Rita" : "#"} class={disableRita ? 'main-link-r' : 'disabled-link'}>Rita</Link>
      </li>
      {/* <li>
      <Link to="/'Brienne'">"Brienne"</Link>
      </li> */}
      <li>
      <Link to={enableBrienne ? "/'Brienne'" : "#"} class={enableBrienne ? 'main-link-b' : 'disabled-link'}>"Brienne"</Link>
      </li>
      <li>
        <Link to="/misc">Misc</Link>
      </li>
      <li>
        <Link style={{color: 'red'}} to="/">Home</Link>
      </li>
    </ul>
      <Outlet />
    </>
  )
};

export default connect(function mapStateToProps(state){
  return {
      MorganVisited: state.MorganVisited,
      MorganName: state.MorganName,
  };
})(DocList)
