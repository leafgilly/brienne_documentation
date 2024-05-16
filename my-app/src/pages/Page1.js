import { Link } from "react-router-dom";
import React, {useState, useCallback, useEffect } from 'react';
import '../App.css';

const Page1 = () => {

    //UPDATES THE LEFT POSITIONING OF THE TEXT ON THE SCREEN IN RESPONSE TO CLICKS

    //TODO: HAVE THIS HAPPEN 3 TIMES, EACH TIME DISPLAYING DIFFERENT INFORMATION
    //TODO: CHANGE THE CONTENT OF THE TEXT EACH TIME

    var numClicks = 0;

    const handleClick = () => {
        numClicks += 1;
        const displacement = numClicks*100;
        if (numClicks <= 3) {
            // console.log(document.getElementsByClassName('pseudolink').style.left += numClicks*100);
            document.getElementById('pseudolink').style.left = displacement + 'px';
        } else if (numClicks > 3 && numClicks <= 5) {
            document.getElementById('pseudolink').style.top = displacement + 'px';
        } else {
            document.getElementById('pseudolink').childNodes[0].style.display = 'none';
            document.getElementById('nextPage').style.display = 'block';
        }
    };

    return (
        <>
        <h1>Hello, Brienne.</h1>
        <div id='pseudolink' style={{position: 'relative', width: 'fit-content', left: 0, top: 300}} onClick={handleClick}> 
            <p>Help</p>
        </div>
        <p id='nextPage' style={{fontSize: '30px', display: 'none'}}>
            <Link color="red" to="/page2">Don't let it end like this</Link>
        </p>
        </>

    // <><h1>This is the landing page</h1>
    // <p>
    //     <Link color="red" to="/page2">Go To Page2</Link>
    // </p></>
    );
    
  };
  
  export default Page1;
  