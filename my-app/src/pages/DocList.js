import { Outlet, Link } from "react-router-dom";

import {connect} from 'react-redux';

const DocList = (props) => {

  const pagesVisited = JSON.parse(document.cookie);
  const enableBrienne = pagesVisited["Amanda"] && pagesVisited["Sally"] && pagesVisited["Morgan"] && pagesVisited["Rita"];

  const disableSally = !(pagesVisited["Sally"]);
  const disableRita = !(pagesVisited["Rita"]);

  console.log(pagesVisited);

  return (
    <>
    <div class='document'>
    <ul>
      <li>
      <Link to={props.AmandaVisited===0 ? "/Amanda" : "#"} class={props.AmandaVisited===0 ? 'main-link-a' : 'disabled-link'}>{props.AmandaName}</Link>
      </li>
      <li>
      <Link to={disableSally ? "/Sally" : "#"} class={disableSally ? 'main-link-s' : 'disabled-link'}>Sally</Link>
      {/* <Link to="/Sally">Sally</Link> */}
      </li>
      <li>
      <Link to={props.MorganVisited===0 ? "/Morgan" : "#"} class={props.MorganVisited===0 ? 'main-link-m' : 'disabled-link'}>{props.MorganName}</Link>
      </li>
      <li>
      <Link to={props.RitaVisited===0 ? "/Rita" : "#"} class={props.RitaVisited===0 ? 'main-link-r' : 'disabled-link'}>{props.RitaName}</Link>
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
    </ul>
      <Outlet />
      </div>
    </>
  )
};

export default connect(function mapStateToProps(state){
  return {
      MorganVisited: state.MorganVisited,
      AmandaVisited: state.AmandaVisited,
      RitaVisited: state.RitaVisited,
      MorganName: state.MorganName,
      AmandaName: state.AmandaName,
      RitaName: state.RitaName,
  };
})(DocList)
