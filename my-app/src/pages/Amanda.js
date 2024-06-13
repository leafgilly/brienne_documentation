import { Link } from "react-router-dom";
import React, {useState, useCallback, useEffect } from 'react';
import {connect} from 'react-redux';

const Amanda = (props) => {

    //VISITED STATE

    var pagesVisited = JSON.parse(document.cookie);
    pagesVisited["Amanda"] = true;
    document.cookie = JSON.stringify(pagesVisited);

    //CODE THAT CHANGES THE DISPLAYED TEXT ON A CLICK

    const [buttonText, setButtonText] = useState('vampire');
 
    const handleClick = () => {
        setButtonText(buttonText === 'vampire' ? 'y̸̘͐ö̸͎ǔ̸͚ ̶̘̈́k̷̼͊i̴͚͝ĺ̴̝l̷͕̂e̷̙͌d̶̞̚ ̵͓̉h̶͚͝e̸͍̎r̴̡̐. YOU BURNED HER WITH THE SUN' : 'vampire');
    };

    //CODE THAT PERIODICALLY CHANGES THE TEXT DISPLAYED ON THE SCREEN USING A TIMER

    const names = [
        'she is fine', 'she is fine', 'she is fine', "she is d̶͈͒e̶͖͆â̷̙d̸̢̽"
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

    return (
    <><h1>Amanda Valentine Documentation</h1>
    <h1>Threat Level: C (previously A)</h1>
    <h2>Previous Names and Aliases</h2>
    <ul>
        <li>Amanda Valentina</li>
    </ul>
    <h2>Stand and Supernatural Abilities</h2>
    <div>
        <p>something something something <b id="vampire" onClick={handleClick} color="red">{buttonText}</b> something else</p>
        <p id="glitch" >glitch text</p>
        <p>{props.AmandaCorruption > 30 ? newGlitch : ''}</p>
    </div>
    <h2>Known Relationships</h2>
    <h2>Psychological Profile</h2>
    <h2>Relevant Cases</h2>
    <h2>Author's Notes</h2>
    <h1>Current Corruption Value: </h1>
    <p>{props.AmandaCorruption}</p>
    <p>{props.AmandaHighCorruption}</p>
    <button onClick={()=>{
        props.dispatch({
            type: 'corruptAmanda',
            value: 10,
        });
    }} disabled={props.AmandaCorruption>100}>Test</button>
    <p onClick={()=>{
        props.dispatch({
            type: 'corruptAmanda',
            value: 49,
        });
    }} id='interactive' class='enabled-link-a'>Test 
    </p>
    <p>
        <Link color="red" to="/page2">Go Home</Link>
    </p></>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        AmandaCorruption: state.AmandaCorruption,
        AmandaHighCorruption: state.AmandaCorruption > 30 ? 'amanda is corrupted' : 'amanda is NOT corrupted'
    };
  })(Amanda);
  