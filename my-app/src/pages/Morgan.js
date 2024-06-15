import { Link } from "react-router-dom";

import {connect} from 'react-redux';

const Morgan = (props) => {

    //VISITED STATE

    var pagesVisited = JSON.parse(document.cookie);
    pagesVisited["Morgan"] = true;
    document.cookie = JSON.stringify(pagesVisited);

    return (
    <>
    <body style={{backgroundColor: 'black', color: 'white'}}>
        <div style={{color: 'rgba(255, 255, 255,' + props.MorganOpacity}}>
        <h1>Morgan Becquerel Documentation</h1>
        <h1>Threat Level: E</h1>
        <h2>Previous Names and Aliases</h2>
        <ul>
            <li>Stella Becquerel - as of 1990, Becquerel chose to go by her middle name 'Morgan'</li>
        </ul>
        <h2>Stand and Supernatural Abilities</h2>
        <h3>Neon Trees</h3>
        <p>Neon Trees manifests as a glove and sunglasses but is always active--the ability cannot be turned off. 
            This Stand makes anything that comes into contact with the user's skin become bright. 
            The longer the exposure to the user's skin, the brighter the object gets.</p>
        <h3>Neon Trees Act 2: Favorite Daze</h3>
        <p>Neon Trees' light spreads through root-like veins along the user's body, creating sparks as it travels.
            Excluding the circuitry--the physical form of her Stand--Morgan's body becomes&nbsp;
            <span id='flicker' class='enabled-link-m no-select-text' style={{display: props.MorganCorruption===2 ? 'inline' : 'none'}}>blindingly bright.</span>
            <span class='interactive enabled-link-m no-select-text' style={{display: props.MorganCorruption>=3 && props.MorganCorruption<13 ? 'inline' : 'none'}}
            onClick={()=>{
                props.dispatch({
                    type: 'corruptMorgan',
                    value: 1,
                });
                props.dispatch({
                    type: 'morganOpacity',
                    value: 0.1,
                });
        }}>blindingly bright.</span> 
            <span style={{display: props.MorganCorruption>=13 ? 'inline' : 'none'}}>blindingly bright.</span>
        
            Those who are close enough to Morgan will benefit from slow healing properties. 
            Physical ailements of any kind save for death can be fixed from remaining in this Stand's rays for long enough.
            It also has the ability to impart positive feelings among those who are affected by the light.</p>
        <h2>Known Relationships</h2>

        <h2>Psychological Profile</h2>
        <h2>Relevant Cases</h2>
        <p>Case 1</p>
        <p>Case 3</p>
        <h2>Author's Notes</h2>
        </div>

    {/* BRIENNE'S INTERACTIONS */}
        <div onClick={()=>{
            props.dispatch({
                type: 'corruptMorgan',
                value: 1,
            });
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===0 ? 'block' : 'none'}}>
            <p>There's... nothing here?</p>
        </div>

        <div onClick={()=>{
            props.dispatch({
                type: 'corruptMorgan',
                value: 1,
            });
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===1 ? 'block' : 'none'}}>
            <p>But this can't just be it! There has to be something.</p>
        </div>

        <div onClick={()=>{
            props.dispatch({
                type: 'corruptMorgan',
                value: 1,
            });
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===2 ? 'block' : 'none'}}>
            <p>Wait. What is that?</p>
        </div>
        <div onClick={()=>{
            props.dispatch({
                type: 'corruptMorgan',
                value: 1,
            });
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===13 ? 'block' : 'none'}}>
            <p>There's got to be something here, somewhere. I just have to find it.</p>
        </div>

        <p>Corruption: {props.MorganCorruption}</p>
        <p>Opacity: {props.MorganOpacity}</p>
        <button onClick={()=>{
            props.dispatch({
                type: 'morganOpacity',
                value: 0.1,
            });
            props.dispatch({
                type: 'corruptMorgan',
                value: 1,
            });
        }} display={props.MorganOpacity>=30}>Test</button>

        <div style={{brightness: '200%'}}>
            <p>TEST</p>
        </div>

        <p>
            <Link style={{color: 'red'}} to="/page2">Go Home</Link>
        </p>
    </body>
    
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganCorruption: state.MorganCorruption,
        MorganHighCorruption: state.MorganCorruption > 30 ? 'morgan is corrupted' : 'morgan is NOT corrupted',
        MorganOpacity: state.MorganOpacity
    };
  })(Morgan);
  