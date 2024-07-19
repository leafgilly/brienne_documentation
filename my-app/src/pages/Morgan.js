import React, {useState, useCallback, useEffect } from 'react';

import { Link } from "react-router-dom";

import {connect} from 'react-redux';

const Morgan = (props) => {

    //TEMPORARY AUDIO SOLUTION. CONSIDER MAKING THIS MORE GLOBAL, EITHER PUTTING IT IN APP.JS OR SOMEHOW INTO STORE.JS (SEE SYNTAXBLITZ SUGGESTIONS)

    const [counter, setCounter] = React.useState(0);

    const names = [
        'TRAITOR', 'TRAITOR', 'M̷U̴R̷D̶E̴R̶E̸R̷', 'M̴̼̈́Ư̴̤R̴͖̚D̷̢̀Ḛ̸̒R̷͍͗È̸̩R̷̟̔', 'TRAITOR', "Y̴̹̓e̸̛̙s̵͙̒,̵͓̀ ̴͚͝y̷̟͂o̸̡̾u̸̥̽ ̷̨͠d̵̜͆į̷̍ḑ̵͋.̶͕͂"
    ]

    const [newGlitch, setnewGlitch] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        // console.log(index);
        setnewGlitch(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 100);
        return () => clearInterval(intervalID);
    }, [shuffle])

    // A TIMER THAT INCREMENTS MORGAN'S CORRUPTION

    function brighten (amt) {
        props.dispatch({
            type: 'morganLight',
            value: amt,
        });
    }

    React.useEffect(() => {
        if (props.MorganCorruption>=14) { //CAN IMPROVE ON THIS SO IT GETS BRIGHTER FASTER ONCE IT REACHES A VISIBILITY THRESHOLD
            const timer = counter < 255 && setInterval(() => setCounter(counter + 1), 500);
            brighten(1);
            return () => clearInterval(timer);
        }
    }, [counter, props.MorganCorruption]);

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
        if (counter >= 255 && props.MorganVisited !== 1) {
            props.dispatch({
                type: 'visitMorgan',
                value: 1,
            });
        }
    }, [props.MorganCorruption, counter]);

    return (
    <>
    <div class='openFolder'>
        <div class="openNametag"><p>
        <Link style={{color: 'red'}} to="/">Go Back</Link>
    </p></div>
    <div class='document' style={{backgroundColor: props.MorganCorruption>=14 ? 'rgba(' + props.MorganLight + ',' + props.MorganLight + ',' + props.MorganLight + ')' : 'black', color: 'white'}}>

        {/* BRIENNE'S INTERACTIONS */}
        <div onClick={()=>{
            // loadAudio();
            corrupt(1);
        }} class='interactive enabled-link-b no-select-text' style={{display: props.MorganCorruption===0 ? 'block' : 'none'}}>
            <p>There's... nothing here?</p>
        </div>

        <div onClick={()=>{
            // playAudio();
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

        <div style={{color: 'rgba(255, 255, 255,' + props.MorganOpacity}}>
        <h1>Morgan Becquerel Documentation</h1>
        <h1 style={{display: props.MorganCorruption<14 ? 'block' : 'none'}}>Threat Level: E</h1>
        <h1 style={{display: props.MorganCorruption===14 ? 'block' : 'none'}}>Threat Level: <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>E</span></h1>
        <h1 style={{display: props.MorganCorruption>=15 ? 'block' : 'none'}}>Threat Level: <b class='enabled-link-b'>Wouldn't hurt a fly</b></h1>
        <h2>Previous Names and Aliases</h2>
        <ul>
            <li style={{display: props.MorganCorruption<15 ? 'list-item' : 'none'}}>Stella Becquerel - as of 1990, Becquerel chose to go by her middle name 'Morgan'</li>
            <li style={{display: props.MorganCorruption===15 ? 'list-item' : 'none'}}>Stella Becquerel - as of 1990, Becquerel chose to go by her middle name <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>'Morgan'</span></li>
            <li style={{display: props.MorganCorruption>=16 ? 'list-item' : 'none'}}>Stella Becquerel - as of 1990, Becquerel chose to go by her middle name <b class='enabled-link-b'>
                because she hated her light and wanted to get away from it in every way she could.</b></li>
        </ul>
        <h2>Stand and Supernatural Abilities</h2>
        <h3>Neon Trees</h3>
        <p style={{display: props.MorganCorruption<16 ? 'block' : 'none'}}>Neon Trees manifests as a glove and sunglasses but is always active--the ability cannot be turned off. 
            This Stand makes anything that comes into contact with the user's skin become bright. 
            The longer the exposure to the user's skin, the brighter the object gets.</p>
        <p style={{display: props.MorganCorruption===16 ? 'block' : 'none'}}>Neon Trees <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>manifests</span> as a glove and sunglasses but is always active--the ability cannot be turned off. 
            This Stand makes anything that comes into contact with the user's skin become bright. 
            The longer the exposure to the user's skin, the brighter the object gets.</p>
        <p style={{display: props.MorganCorruption===17 ? 'block' : 'none'}}>Neon Trees manifest<b class='enabled-link-b'>ed</b> as a glove and sunglasses but is always active--<span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>the ability cannot be turned off.</span> This Stand makes anything 
            that comes into contact with the user's skin become bright. The longer the exposure to the user's skin, the brighter the object gets.</p>
            <p style={{display: props.MorganCorruption===18 ? 'block' : 'none'}}>Neon Trees manifest<b class='enabled-link-b'>ed</b> as a glove and sunglasses but is always active--
            <b class='enabled-link-b'>because she cannot live without it.</b>
            This Stand makes anything that comes into contact with the user's skin <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>become bright.</span> The 
            longer the exposure to the user's skin, the brighter the object gets.</p>
            <p style={{display: props.MorganCorruption===19 ? 'block' : 'none'}}>Neon Trees manifest<b class='enabled-link-b'>ed</b> as a glove and sunglasses but is always active--
            <b class='enabled-link-b'>taking her light from her will kill her.</b> This Stand makes anything that comes into contact with the user's skin <b class='enabled-link-b'>absorb into you, ripping all life from the host body.</b> The 
            longer the exposure to the user's skin, <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>the brighter the object gets.</span></p>
            <p style={{display: props.MorganCorruption===20 ? 'block' : 'none'}}>Neon Trees manifest<b class='enabled-link-b'>ed</b> as a glove and sunglasses but is always active--
            <b class='enabled-link-b'>taking her light from her will kill her.</b> This Stand makes anything that comes into contact with the user's skin <b class='enabled-link-b'>absorb into you, ripping all life from the host body.</b> The 
            longer the exposure to the user's skin, <b class='enabled-link-b'>it's <b onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>poetic</b>, in a way. In death, she escaped her Stand.</b></p>
            <p style={{display: props.MorganCorruption>=21 ? 'block' : 'none'}}>Neon Trees manifest<b class='enabled-link-b'>ed</b> as a glove and sunglasses but is always active--
            <b class='enabled-link-b'>taking her light from her will kill her.</b> This Stand makes anything that comes into contact with the user's skin <b class='enabled-link-b'>absorb into you, ripping all life from the host body.</b> The 
            longer the exposure to the user's skin, <b class='enabled-link-b'>it's <b style={{color: 'red'}}>CRUELTY</b>, in a way. In death, she escaped her Stand.</b></p>
        
        <h3>Neon Trees Act 2: Favorite Daze</h3>
        <div style={{display: props.MorganCorruption<21 ? 'block' : 'none', backgroundColor: 'rgba(' + props.MorganLight*3 + ',' + props.MorganLight*3 + ',' + props.MorganLight*3 + ')'}}>
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
        
        </div>
        <div style={{display: props.MorganCorruption===21 ? 'block' : 'none', backgroundColor: 'rgba(' + props.MorganLight*3 + ',' + props.MorganLight*3 + ',' + props.MorganLight*3 + ')'}}>
        <p>Neon Trees' light spreads through root-like veins along the user's body, creating sparks as it travels.
            Excluding the <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>circuitry</span>--the physical form of her Stand--Morgan's body becomes blindingly bright.
            Those who are close enough to Morgan will benefit from slow healing properties. 
            Physical ailements of any kind save for death can be fixed from remaining in this Stand's rays for long enough.
            It also has the ability to impart positive feelings among those who are affected by the light.</p>
        </div>
        <div style={{display: props.MorganCorruption>=22 ? 'block' : 'none', backgroundColor: 'rgba(' + props.MorganLight*3 + ',' + props.MorganLight*3 + ',' + props.MorganLight*3 + ')'}}>
        <p>Neon Trees' light spreads through root-like veins along the user's body, creating sparks as it travels.
            Excluding the <b class='enabled-link-b'>the circuits were all you could see of her; she shone like sunlight</b>--the physical form of her Stand--Morgan's body becomes blindingly bright.
            Those who are close enough to Morgan will benefit from slow healing properties. 
            Physical ailements of any kind save for death can be fixed from remaining in this Stand's rays for long enough.
            It also has the ability to impart positive feelings among those who are affected by the light.</p>
        </div>
        <h2>Known Relationships</h2>
        <ul>
        <li style={{display: props.MorganCorruption<22 ? 'list-item' : 'none'}}>Henri Becquerel: father. Amicable public relationship, unspoken distance in private. Wishes he would make a greater effort to understand her.</li>
        <li style={{display: props.MorganCorruption===22 ? 'list-item' : 'none'}}>Henri Becquerel: father. Amicable public relationship, unspoken distance in private. <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>Wishes he would make a greater effort to understand her.</span></li>
        <li style={{display: props.MorganCorruption>=23 ? 'list-item' : 'none'}}>Henri Becquerel: father. Amicable public relationship, unspoken distance in private. <b class="enabled-link-b">He would sue you for what you did.</b></li>
        
        <li style={{display: props.MorganCorruption<23 ? 'list-item' : 'none'}}>Flora Becquerel: mother. Superficial love. Feels her attempts at connection are hollow.</li>
        <li style={{display: props.MorganCorruption===23 ? 'list-item' : 'none'}}>Flora Becquerel: mother. Superficial love. <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>Feels her attempts at connection are hollow.</span></li>
        <li style={{display: props.MorganCorruption>=24 ? 'list-item' : 'none'}}>Flora Becquerel: mother. Superficial love. <b class="enabled-link-b">She might've called it mercy.</b></li>
        
        <li style={{display: props.MorganCorruption<24 ? 'list-item' : 'none'}}>Jeeves [deceased]: bodyguard and father figure. They were inseparable. Losing him nearly broke her, but she seems to have made some peace with it.</li>
        <li style={{display: props.MorganCorruption===24 ? 'list-item' : 'none'}}>Jeeves [deceased]: bodyguard and father figure. They were inseparable. <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>Losing him nearly broke her, but she seems to have made some peace with it.</span></li>
        <li style={{display: props.MorganCorruption===25 ? 'list-item' : 'none'}}>Jeeves [<span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>deceased</span>]: bodyguard and father figure. They were inseparable. <b class="enabled-link-b">He'd have already killed you.</b></li>
        <li style={{display: props.MorganCorruption>=26 ? 'list-item' : 'none'}}>Jeeves [<b style={{color: 'red'}}>RETIRED</b>]: bodyguard and father figure. They were inseparable. <b class="enabled-link-b">He'd have already killed you.</b></li>
        <li style={{display: props.MorganCorruption<=25 ? 'list-item' : 'none'}}>Jordyn Jones: Speedwagon Foundation field agent. Feels indebted and intensely grateful.</li>
        <li style={{display: props.MorganCorruption>=26 ? 'list-item' : 'none'}}>Jordyn Jones [<b style={{color: 'red'}}>RETIRED</b>]: Speedwagon Foundation field agent. Feels indebted and intensely grateful.</li>
        <li style={{display: props.MorganCorruption<=25 ? 'list-item' : 'none'}}>{props.AmandaName}: Coworker, close friend. Always liked her, even if their friendship developed slowly. Their time cohabitating led to a mutual respect and trust.</li>
        <li style={{display: props.MorganCorruption>=26 ? 'list-item' : 'none'}}>{props.AmandaName} [<b style={{color: 'red'}}>RETIRED</b>]: Coworker, close friend. Always liked her, even if their friendship developed slowly. Their time cohabitating led to a mutual respect and trust.</li>
        <li style={{display: props.MorganCorruption<=25 ? 'list-item' : 'none'}}>{props.SallyName}: Coworker, close friend. Would regularly share the lab and work silently together. Highly respects her intelligence and wit.</li>
        <li style={{display: props.MorganCorruption>=26 ? 'list-item' : 'none'}}>{props.SallyName} [<b style={{color: 'red'}}>RETIRED</b>]: Coworker, close friend. Would regularly share the lab and work silently together. Highly respects her intelligence and wit.</li>
        <li style={{display: props.MorganCorruption<=25 ? 'list-item' : 'none'}}>{props.RitaName}: Coworker, close friend. Get takeout and go birdwatching together in Central Park at least once a month. Once loved having a rookie on the team, but grew to appreciate her equal companionship.</li>
        <li style={{display: props.MorganCorruption>=26 ? 'list-item' : 'none'}}>{props.RitaName} [<b style={{color: 'red'}}>RETIRED</b>]: Coworker, close friend. Get takeout and go birdwatching together in Central Park at least once a month. Once loved having a rookie on the team, but grew to appreciate her equal companionship.</li>
        <li style={{display: props.MorganCorruption<26 ? 'list-item' : 'none'}}>Patagonia: Close friend. Met on work assignment, now do weekly outings. Trusts her enough to introduce her to her parents and take her to company dinners. Might be romantically interested, more observation needed. </li>
        <li style={{display: props.MorganCorruption===26 ? 'list-item' : 'none'}}>Patagonia: Close friend. Met on work assignment, now do weekly outings. Trusts her enough to introduce her to her parents and take her to company dinners. Might be romantically interested, <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>more observation needed.</span></li>
        <li style={{display: props.MorganCorruption>=27 ? 'list-item' : 'none'}}>Patagonia: Close friend. Met on work assignment, now do weekly outings. Trusts her enough to introduce her to her parents and take her to company dinners. Might be romantically interested, <b style={{color: 'red'}}>maybe she can kill you...</b></li>
        </ul>
        <h2>Psychological Profile</h2>
        <p style={{display: props.MorganCorruption<27 ? 'block' : 'none'}}>Morgan’s childhood upbringing shaped her into a person who is desperate for social interaction and overjoyed by new experiences. Her desire 
        to seek out people has made her highly emotionally intelligent, and she possesses great skills in understanding both her own and others’ emotional states. 
        Her unrelenting positivity is one of her greatest strengths, but she also harbors some guilt and resentment towards herself and her Stand. She is also 
        highly dependent on her few, close relationships. The loss of a close friend will affect her especially greatly.</p>
        <p style={{display: props.MorganCorruption===27 ? 'block' : 'none'}}> <span onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-m no-select-text'>Morgan’s childhood upbringing shaped her into a person who is desperate for social interaction and overjoyed by new experiences. Her desire 
        to seek out people has made her highly emotionally intelligent, and she possesses great skills in understanding both her own and others’ emotional states. 
        Her unrelenting positivity is one of her greatest strengths, but she also harbors some guilt and resentment towards herself and her Stand. She is also 
        highly dependent on her few, close relationships. The loss of a close friend will affect her especially greatly.</span></p>
        <p style={{display: props.MorganCorruption>=28 ? 'block' : 'none', color: 'lightpink', fontStyle: 'italic'}}>“I mean, Brienne, you saved me. I was… I was stuck in that house for so many years, and you 
            found me a way out. You made me clothes that wouldn’t take to my light. You found a school I could attend remotely. You got me a job. You built me a whole life! 
            And I thought that that was just what you did for everyone–what with Paperback Writer, and all. But now… <b style={{color: 'black'}}>did you really save me just to use me?”</b></p>

        <h2 style={{display: props.MorganCorruption<28 ? 'block' : 'none'}}>Author's Notes</h2>
        <h2 style={{display: props.MorganCorruption===28 ? 'block' : 'none'}}> <span onClick={()=>{
        corrupt(1);
        props.dispatch({
            type: 'visitMorgan',
            value: 1,
        });
    }} class='interactive enabled-link-m no-select-text'>Author's Notes</span></h2>
        <h2 style={{display: props.MorganCorruption>=29 ? 'block' : 'none', color: 'black'}}>Yes.</h2>

        <p style={{display: props.MorganCorruption<28 ? 'block' : 'none'}}>Becquerel is a kind, gentle person who loves freely and greatly. I remember when I first met her: she would bounce on her heels with her hands 
            clasped tightly together. Now she shares her light freely. I used to keep my professional distance, but we share a familial love. She is my 
            greatest supporter, my heart, my conscience.</p>
        <p style={{display: props.MorganCorruption>=29 ? 'block' : 'none', color: 'black'}}><b>{newGlitch}</b></p>
        </div>
        {/* <p style={{display: props.MorganVisited===0 ? 'block' : 'none'}}>
            <Link style={{color: 'red'}} to="/">Go Home</Link>
        </p> */}
        <div class='enabled-link-b no-select-text' style={{display: props.MorganLight >= 85 && props.MorganLight < 153 ? 'block' : 'none'}}>
            <p><b>Is this... Neon Trees?</b></p>
        </div>
        <div class='enabled-link-b no-select-text' style={{display: props.MorganLight >= 153 && props.MorganLight < 255 ? 'block' : 'none'}}>
            <p><b>Maybe this is what I get for taking her light from her.</b></p>
        </div>
        <div class='interactive enabled-link-b no-select-text' style={{display: props.MorganVisited>=1 && props.MorganLight>=255 ? 'block' : 'none'}}>
            <Link style={{color: 'rgb(51, 125, 255)'}} to="/">It's too bright to see...</Link>
        </div>
    </div>
    </div>
    
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganCorruption: state.MorganCorruption,
        MorganOpacity: state.MorganOpacity,
        MorganVisited: state.MorganVisited,
        MorganLight: state.MorganLight,
        MorganName: state.MorganName,
        AmandaName: state.AmandaName,
        RitaName: state.RitaName,
        SallyName: state.SallyName,
    };
  })(Morgan);
  