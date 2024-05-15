import { Outlet, Link } from "react-router-dom";
import React, {useState, useCallback, useEffect } from 'react'

const Page1 = () => {

    //UPDATES THE LEFT POSITIONING OF THE TEXT ON THE SCREEN IN RESPONSE TO CLICKS

    //TODO: HAVE THIS HAPPEN 3 TIMES, EACH TIME DISPLAYING DIFFERENT INFORMATION
    //TODO: CHANGE THE CONTENT OF THE TEXT EACH TIME

    var numClicks = 0;

    const handleClick = () => {
        numClicks += 1;
        // console.log(document.getElementsByClassName('pseudolink').style.left += numClicks*100);
        const newLeft = numClicks*100;
        document.getElementById('pseudolink').style.left = newLeft + 'px';
    };

    return (
    <>
    <h1>Hello, Brienne.</h1>
    <div id='pseudolink' style={{position: 'relative', width: 200, left: 0, top: 200}} onClick={handleClick}> 
        <p>Help</p>
    </div>
    </>

    // <><h1>This is the landing page</h1>
    // <p>
    //     <Link color="red" to="/page2">Go To Page2</Link>
    // </p></>
    );
    
  };
  
  export default Page1;
  