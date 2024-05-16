import { Link } from "react-router-dom";
import React, {useState, useCallback, useEffect } from 'react'

const Amanda = () => {

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
        console.log(index);
        setnewGlitch(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 100);
        return () => clearInterval(intervalID);
    }, [shuffle])

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
        <p id="glitch" >glitch text</p>
        <p>{newGlitch}</p>
    </div>
    <h2>Known Relationships</h2>
    <h2>Psychological Profile</h2>
    <h2>Relevant Cases</h2>
    <h2>Author's Notes</h2>
    <p>
        <Link color="red" to="/page2">Go Home</Link>
    </p></>
    );
    
  };
  
  export default Amanda;
  