import * as React from "react";

import { Link } from "react-router-dom";

import {connect} from 'react-redux';

import pencil_sound from '../audio/pencil_sound.mp3';
import pencil_sound2 from '../audio/pencil_sound_2.mp3';

const Morgan = (props) => {

    //TEMPORARY AUDIO SOLUTION. CONSIDER MAKING THIS MORE GLOBAL, EITHER PUTTING IT IN APP.JS OR SOMEHOW INTO STORE.JS (SEE SYNTAXBLITZ SUGGESTIONS)

    const [counter, setCounter] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    const timeUntilCorrupted = 5;

    let pencilSound = new Audio(pencil_sound);
    let pencilSound2 = new Audio(pencil_sound2);

    const [audioError, setAudioError] = React.useState();
    const [audio, setAudio1] = React.useState();
    const [audio2, setAudio2] = React.useState();
  
    // 1. load the audio in a user interaction
    const loadAudio = () => {
      const _audio = pencilSound;
      const __audio = pencilSound2;
      _audio.load();
      __audio.load();
      _audio.addEventListener('canplaythrough', () => {
        console.log('loaded audio');
        setAudio1(_audio);
      });
      __audio.addEventListener('canplaythrough', () => {
        console.log('loaded audio');
        setAudio2(__audio);
      });
    };

    const [swap, changeAudio] = React.useState(0);
  
    // 2. now you can play the audio on all subsequent events
    const playAudio = async () => {
        if (swap === 0) {
            changeAudio(1);
            setAudioError(undefined);
            await new Promise((r) => setTimeout(r, 100));
            audio && audio.play().catch((e) => {
                setAudioError(e);
            });
        } else if (swap === 1) {
            changeAudio(0);
            setAudioError(undefined);
            await new Promise((r) => setTimeout(r, 100));
            audio2 && audio2.play().catch((e) => {
                setAudioError(e);
            });
        }
    };

    // A TIMER THAT INCREMENTS MORGAN'S CORRUPTION

    React.useEffect(() => {
        if (hover === 0) {
            return;
        }
        const timer =
        counter < 255 && setInterval(() => setCounter(counter + 1), 500);
        return () => clearInterval(timer);
    }, [counter, hover]);
    console.log(hover);

    return (
    <>
    <div onMouseLeave={()=>{
        if (props.MorganCorruption >= 14) {
            setHover(0);
        }
    }}
        onMouseOver={()=>{
            if (props.MorganCorruption >= 14 && counter*timeUntilCorrupted < 255) {
                setHover(1);
            } else if (counter*timeUntilCorrupted >= 255 && props.MorganVisited !== 1) {
                props.dispatch({
                    type: 'visitMorgan',
                    value: 1,
                });
            }
        }} style={{backgroundColor: props.MorganCorruption>=14 ? 
        'rgba(' + counter*timeUntilCorrupted + ',' + counter*timeUntilCorrupted + ',' + counter*timeUntilCorrupted + ')' : 'black', 
        color: 'white'}}>

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
            loadAudio();
            props.dispatch({
                type: 'corruptMorgan',
                value: 1,
            });
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===0 ? 'block' : 'none'}}>
            <p>There's... nothing here?</p>
        </div>

        <div onClick={()=>{
            playAudio();
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
        <div class='enabled-link-b no-select-text' style={{display: counter*timeUntilCorrupted >= 85 && counter*timeUntilCorrupted < 153 ? 'block' : 'none'}}>
            <p>Is this... Neon Trees?</p>
        </div>
        <div class='enabled-link-b no-select-text' style={{display: counter*timeUntilCorrupted >= 153 && counter*timeUntilCorrupted < 255 ? 'block' : 'none'}}>
            <p>Maybe this is what I get for taking her light from her.</p>
        </div>
        <div class='interactive enabled-link-b no-select-text' style={{display: props.MorganVisited===1 ? 'block' : 'none'}}>
            <Link style={{color: 'blue'}} to="/page2">It's too bright to see...</Link>
        </div>
        <p>
            <Link style={{color: 'red'}} to="/page2">Go Home</Link>
        </p>
    </div>
    
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganName: state.MorganName,
        MorganCorruption: state.MorganCorruption,
        MorganOpacity: state.MorganOpacity,
        MorganVisited: state.MorganVisited,
    };
  })(Morgan);
  