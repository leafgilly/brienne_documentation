import { Link } from "react-router-dom";
import React, {useState} from 'react'

const Amanda = () => {

    const [buttonText, setButtonText] = useState('Submit');
 
    const handleClick = () => {
        setButtonText(buttonText === 'vampire' ? 'y̸̘͐ö̸͎ǔ̸͚ ̶̘̈́k̷̼͊i̴͚͝ĺ̴̝l̷͕̂e̷̙͌d̶̞̚ ̵͓̉h̶͚͝e̸͍̎r̴̡̐. YOU BURNED HER WITH THE SUN' : 'vampire');
    };

    return (
    <><h1>Amanda Valentine Documentation</h1>
    <h1>Threat Level: C (previously A)</h1>
    <h2>Previous Names</h2>
    <ul>
        <li>Amanda Valentina</li>
    </ul>
    <h2>Stand and Supernatural Abilities</h2>
    <div>
        <p>something something something <b id="vampire" onClick={handleClick} color="red">{buttonText}</b> something else</p>
    </div>
    <h2>Known Relationships</h2>
    <h2>Psychological Profile</h2>
    <h2>Relevant Cases</h2>
    <h2>Author's Notes</h2>
    <h2></h2>
    <p>
        <Link color="red" to="/">Go Home</Link>
    </p></>
    );
    
  };
  
  export default Amanda;
  