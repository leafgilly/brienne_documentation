import { Outlet, Link } from "react-router-dom";

import {connect} from 'react-redux';

const DocList = (props) => {

  return (
    <>
    <div class='mainPage'>
    {/* <ul>
      <li>
      <Link to={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? "/theAgent" : "#"} class={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? 'main-link-b' : 'disabled-link'}>Agent Paperback Writer</Link>
      </li>
      <li>
      <Link to={props.AmandaVisited===0 ? "/Amanda" : "#"} class={props.AmandaVisited===0 ? 'main-link-a' : 'disabled-link'}>{props.AmandaName}</Link>
      </li>
      <li>
      <Link to={props.MorganVisited===0 ? "/Morgan" : "#"} class={props.MorganVisited===0 ? 'main-link-m' : 'disabled-link'}>{props.MorganName}</Link>
      </li>
      <li>
      <Link to={props.RitaVisited===0 ? "/Rita" : "#"} class={props.RitaVisited===0 ? 'main-link-r' : 'disabled-link'}>{props.RitaName}</Link>
      </li>
      <li>
      <Link to={props.SallyVisited===0 ? "/Sally" : "#"} class={props.SallyVisited===0 ? 'main-link-s' : 'disabled-link'}>{props.SallyName}</Link>
      </li>
      <li>
        <Link to="/misc">Misc</Link>
      </li>

      </ul> */}
            {/* <li>
      <Link to={"/theAgent"}>"Brienne Test"</Link>
      </li> */}
      {/* style={{margin: '100px 0px 0px -100px'}} */}
      <div>
        <div class='folder'>
          <div class='nametag'>
            <Link to={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? "/theAgent" : "#"} class={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? 'main-link-b' : 'disabled-link'}>Agent Paperback Writer</Link>
          </div>
        </div>
        <div class='folder' style={{margin: '50px'}}>
          <div class='nametag'>
          <Link to={props.AmandaVisited===0 ? "/Amanda" : "#"} class={props.AmandaVisited===0 ? 'main-link-a' : 'disabled-link'}>{props.AmandaName}</Link>
          </div>
        </div>
        <div class='folder' style={{margin: '100px'}}>
          <div class='nametag'>
          <Link to={props.MorganVisited===0 ? "/Morgan" : "#"} class={props.MorganVisited===0 ? 'main-link-m' : 'disabled-link'}>{props.MorganName}</Link>
          </div>
        </div>
        <div class='folder' style={{margin: '150px'}}>
          <div class='nametag'>
          <Link to={props.RitaVisited===0 ? "/Rita" : "#"} class={props.RitaVisited===0 ? 'main-link-r' : 'disabled-link'}>{props.RitaName}</Link>
          </div>
        </div>
        <div class='folder' style={{margin: '200px'}}>
          <div class='nametag'>
          <Link to={props.SallyVisited===0 ? "/Sally" : "#"} class={props.SallyVisited===0 ? 'main-link-s' : 'disabled-link'}>{props.SallyName}</Link>
          </div>
        </div>
      </div>
      <div class='post-it'>Informer Company: Internal Team Documentation</div>
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
      SallyVisited: state.SallyVisited,
      MorganName: state.MorganName,
      AmandaName: state.AmandaName,
      RitaName: state.RitaName,
      SallyName: state.SallyName,
  };
})(DocList)
