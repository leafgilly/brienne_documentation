import { Outlet, Link } from "react-router-dom";

import {connect} from 'react-redux';

const DocList = (props) => {

  return (
    <>
    <div className='mainPage'>
    {/* <ul>
      <li>
      <Link to={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? "/theAgent" : "#"} className={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? 'main-link-b' : 'disabled-link'}>Agent Paperback Writer</Link>
      </li>
      <li>
      <Link to={props.AmandaVisited===0 ? "/Amanda" : "#"} className={props.AmandaVisited===0 ? 'main-link-a' : 'disabled-link'}>{props.AmandaName}</Link>
      </li>
      <li>
      <Link to={props.MorganVisited===0 ? "/Morgan" : "#"} className={props.MorganVisited===0 ? 'main-link-m' : 'disabled-link'}>{props.MorganName}</Link>
      </li>
      <li>
      <Link to={props.RitaVisited===0 ? "/Rita" : "#"} className={props.RitaVisited===0 ? 'main-link-r' : 'disabled-link'}>{props.RitaName}</Link>
      </li>
      <li>
      <Link to={props.SallyVisited===0 ? "/Sally" : "#"} className={props.SallyVisited===0 ? 'main-link-s' : 'disabled-link'}>{props.SallyName}</Link>
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
        <div className='folder'>
          <div className='nametag'>
            <Link to={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? "/theAgent" : "#"} className={props.AmandaVisited===1 && props.MorganVisited===1 && props.RitaVisited===1 && props.SallyVisited===1 ? 'main-link-b' : 'disabled-link'}>Agent Paperback Writer</Link>
          </div>
        </div>
        <div className='folder' style={{margin: '50px'}}>
          <div className='nametag'>
          <Link to={props.AmandaVisited===0 ? "/Amanda" : "#"} className={props.AmandaVisited===0 ? 'main-link-a' : 'disabled-link'}>{props.AmandaName}</Link>
          </div>
        </div>
        <div className='folder' style={{margin: '100px'}}>
          <div className='nametag'>
          <Link to={props.MorganVisited===0 ? "/Morgan" : "#"} className={props.MorganVisited===0 ? 'main-link-m' : 'disabled-link'}>{props.MorganName}</Link>
          </div>
        </div>
        <div className='folder' style={{margin: '150px'}}>
          <div className='nametag'>
          <Link to={props.RitaVisited===0 ? "/Rita" : "#"} className={props.RitaVisited===0 ? 'main-link-r' : 'disabled-link'}>{props.RitaName}</Link>
          </div>
        </div>
        <div className='folder' style={{margin: '200px'}}>
          <div className='nametag'>
          <Link to={props.SallyVisited===0 ? "/Sally" : "#"} className={props.SallyVisited===0 ? 'main-link-s' : 'disabled-link'}>{props.SallyName}</Link>
          </div>
        </div>
      </div>
      <div style={{display: props.BrienneVisited===0 ? 'block' : 'none'}} className='post-it'>Informer Company: Internal Team Documentation</div>
      <div style={{display: props.BrienneVisited===1 ? 'block' : 'none'}} className='post-it'>Just you now. You and me.</div>
      <div style={{display: props.BrienneVisited===1 ? 'block' : 'none', margin: '425px 0px 0px 400px'}} className='post-it'><Link className='interactive enabled-link-b' to="/acknowledgements">Acknowledge-&nbsp;ments</Link></div>
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
      BrienneVisited: state.BrienneVisited,
      MorganName: state.MorganName,
      AmandaName: state.AmandaName,
      RitaName: state.RitaName,
      SallyName: state.SallyName,
  };
})(DocList)
