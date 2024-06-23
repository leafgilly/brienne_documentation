import * as React from "react";

import { Link } from "react-router-dom";

import {connect} from 'react-redux';

import pencil_sound from '../audio/pencil_sound.mp3';
import pencil_sound2 from '../audio/pencil_sound_2.mp3';

const Morgan = (props) => {

    //TEMPORARY AUDIO SOLUTION. CONSIDER MAKING THIS MORE GLOBAL, EITHER PUTTING IT IN APP.JS OR SOMEHOW INTO STORE.JS (SEE SYNTAXBLITZ SUGGESTIONS)

    const [counter, setCounter] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    const timeUntilCorrupted = 10;

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

    function corrupt (amt) {
        props.dispatch({
            type: 'corruptMorgan',
            value: amt,
        });
    }

    function changeOpacity (amt) {
        props.dispatch({
            type: 'morganOpacity',
            value: amt,
        });
    }

    React.useEffect(() => {
        if (props.MorganCorruption >= 14 && counter*timeUntilCorrupted < 255) {
            setHover(1);
        } else if (counter*timeUntilCorrupted >= 255 && props.MorganVisited !== 1) {
            props.dispatch({
                type: 'visitMorgan',
                value: 1,
            });
        }
    }, [props.MorganCorruption, counter, timeUntilCorrupted]);

    return (
    <>
    <div class='document' style={{backgroundColor: props.MorganCorruption>=14 ? 
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
                corrupt(2);
                changeOpacity(.2);
        }}>blindingly bright.</span> 
            <span style={{display: props.MorganCorruption>=13 ? 'inline' : 'none'}}>blindingly bright.</span>
        
            Those who are close enough to Morgan will benefit from slow healing properties. 
            Physical ailements of any kind save for death can be fixed from remaining in this Stand's rays for long enough.
            It also has the ability to impart positive feelings among those who are affected by the light.</p>
        <h2>Known Relationships</h2>
        <li>Henri Becquerel: father. Amicable public relationship, unspoken distance in private. Wishes he would make a greater effort to understand her.</li>
        <li>Flora Becquerel: mother. Superficial love. Feels her attempts at connection are hollow.</li>
        <li>Jeeves [deceased]: bodyguard and father figure. They were inseparable. Losing him nearly broke her, but she seems to have made some peace with it.</li>
        <li>Jordyn Jones: Speedwagon Foundation field agent. Feels indebted and intensely grateful.</li>
        <li>Amanda Valentine: Coworker, close friend. Always liked her, even if their friendship developed slowly. Their time cohabitating led to a mutual respect and trust.</li>
        <li>Sally Reed: Coworker, close friend. Would regularly share the lab and work silently together. Highly respects her intelligence and wit.</li>
        <li>Rita Zeppeli: Coworker, close friend. Get takeout and go birdwatching together in Central Park at least once a month. Once loved having a rookie on the team, but grew to appreciate her equal companionship.</li>
        <li>Patagonia: Close friend. Met on work assignment, now do weekly outings. Trusts her enough to introduce her to her parents and take her to company dinners. Might be romantically interested, more observation needed. </li>

        <h2>Psychological Profile</h2>
        <p>Morgan’s childhood upbringing shaped her into a person who is desperate for social interaction and overjoyed by new experiences. Her desire 
        to seek out people has made her highly emotionally intelligent, and she possesses great skills in understanding both her own and others’ emotional states. 
        Her unrelenting positivity is one of her greatest strengths, but she also harbors some guilt and resentment towards herself and her Stand. She is also 
        highly dependent on her few, close relationships. The loss of a close friend will affect her especially greatly.</p>
        <h2>Author's Notes</h2>
        <p>Becquerel is a kind, gentle person who loves freely and greatly. I remember when I first met her: she would bounce on her heels with her hands 
            clasped tightly together. Now she shares her light freely. I used to keep my professional distance, but we share a familial love. She is my 
            greatest supporter, my heart, my conscience.</p>
        </div>

    {/* BRIENNE'S INTERACTIONS */}
        <div onClick={()=>{
            loadAudio();
            corrupt(1);
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===0 ? 'block' : 'none'}}>
            <p>There's... nothing here?</p>
        </div>

        <div onClick={()=>{
            playAudio();
            corrupt(1);
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===1 ? 'block' : 'none'}}>
            <p>But this can't just be it! There has to be something.</p>
        </div>

        <div onClick={()=>{
            corrupt(1);
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===2 ? 'block' : 'none'}}>
            <p>Wait. What is that?</p>
        </div>
        <div onClick={()=>{
            corrupt(1);
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
        <p style={{display: props.MorganVisited===0 ? 'block' : 'none'}}>
            <Link style={{color: 'red'}} to="/">Go Home</Link>
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
  