import { Link } from "react-router-dom";
import React, {useState, useCallback, useEffect } from 'react';
import '../App.css';

const Page1 = () => {

    var numClicks = 0;

    const displayText = [
        'Focus', 
        'FOCUS', 
        'You have to make this work', 
        "...Where am I?", 
        "It doesn't matter. I just have to find", 
        "something that can help"
    ]

    const handleClick = () => {
        const pseudoLinkDiv = document.getElementById('pseudolink');
        const textParagraph = pseudoLinkDiv.childNodes[0].childNodes[0];
        numClicks += 1;
        const displacement = numClicks*100;
        if (numClicks <= 3) {
            // console.log(document.getElementsByClassName('pseudolink').style.left += numClicks*100);
            pseudoLinkDiv.style.left = displacement + 'px';
            textParagraph.textContent = displayText[numClicks]; 
        } else if (numClicks > 3 && numClicks <= 5) {
            pseudoLinkDiv.style.top = displacement + 'px';
            textParagraph.textContent = displayText[numClicks]; 
        } else {
            document.getElementById('pseudolink').childNodes[0].style.display = 'none';
            document.getElementById('nextPage').style.display = 'block';
        }
    };

    return (
        <>
        <h1>Hello, Brienne.</h1>
        <div id='pseudolink' class='no-select-text' style={{position: 'relative', width: 'fit-content', left: 0, top: 300}} onClick={handleClick}> 
            <p>{displayText[0]}</p>
        </div>
        <p id='nextPage' style={{fontSize: '30px', display: 'none'}}>
            <Link style={{color: 'red'}} to="/page2">Don't let it end like this</Link>
        </p>
        </>

    // <><h1>This is the landing page</h1>
    // <p>
    //     <Link color="red" to="/page2">Go To Page2</Link>
    // </p></>
    );
    
  };
  
  export default Page1;
  