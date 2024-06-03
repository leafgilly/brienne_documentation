import { Link } from "react-router-dom";

const Morgan = () => {

    //VISITED STATE

    var pagesVisited = JSON.parse(document.cookie);
    pagesVisited["Morgan"] = true;
    document.cookie = JSON.stringify(pagesVisited);

    //Tracking the visible text

    var steps = 0;

    function stepForward() {
        var node = document.getElementsByClassName('morStep');
        node[steps].id = null;
        node[steps].classList.add('morPass');
        steps++;
        node[steps].id = 'interactive';

        //currently throws an error when you reach the end. make sure to stop the steps from incrementing once steps are fully implemented

        //TODO: doing to want to update this to have different divs that can be visible at any one time. want to cycle through the visible divs so there's only ever one
        //item that can be clicked on the screen at the same time
    }

    //Replacing text

    const replacementText = [
        'blindingly bright', 'morgantext2', 'morgantext3', "morgantext4"
    ]

    return (
    <>
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
        Excluding the circuitry--the physical form of her Stand--Morgan's body becomes <b id='interactive' className='morStep enabled-link-m' onClick={stepForward}>{replacementText[0]}</b>.
        Those who are close enough to Morgan will benefit from slow <b className='morStep enabled-link-m' onClick={stepForward}>healing properties</b>. 
        Physical ailements of any kind save for death can be fixed from remaining in this Stand's rays for long enough.
        It also has the ability to impart positive feelings among those who are <b className='morStep enabled-link-m' onClick={stepForward}>affected</b> by the light.</p>
    <h2>Known Relationships</h2>

    <h2>Psychological Profile</h2>
    <h2>Relevant Cases</h2>
    <p>Case 1</p>
    <p>Case 3</p>
    <h2>Author's Notes</h2>
    <p>
        <Link color="red" to="/page2">Go Home</Link>
    </p></>
    );
    
  };
  
  export default Morgan;
  