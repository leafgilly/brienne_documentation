import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import robin from '../images/RockinRobin.png';
import LEGS from '../images/LEGS.png';

const Rita = (props) => {

    //VISITED STATE

    // var pagesVisited = JSON.parse(document.cookie);
    // pagesVisited["Rita"] = true;
    // document.cookie = JSON.stringify(pagesVisited);

    function corrupt (amt) {
        props.dispatch({
            type: 'corruptRita',
            value: amt,
        });
    }

    return (
    <>
    <img src={robin}></img>
    <p>{props.RitaCorruption}</p>
    <button onClick={()=>{
        corrupt(2);
    }}>Corrupt</button>
    <div class='document'>
    <div class='TEST' style={{margin: 'auto', width: '50' - props.RitaCorruption + '%'}}>
    <h1 style={{textAlign: 'center'}}>Margarita Zeppeli Documentation</h1>
    <h2 style={{textAlign: 'center'}}>Threat Level: E</h2>
    <h2>Previous Names and Aliases</h2>
    <ul>
        <li>Margarita Zeppeli - Zeppeli prefers the shorthand of her first name ‘Rita’</li>
    </ul>
    <h2>Stand and Supernatural Abilities</h2>
    <h3>Rockin' Robin</h3>
    <p>It's a bird and also a scythe. It can extend its legs very far (presumably infinitely). Its beak is strong and sharp, able to 
        deflect projectiles. The Stand can also speak, repeat simple phrases, and mimic voices.
    </p>
    <ul>
        <li>
        Notice of Stand Evolution: During an encounter with Crab Louie Zeppeli’s Stand ‘Rock Lobster’, Rockin’ Robin gained enhanced 
        speed and achieved full sentience.
        </li>
    </ul>
    <h3>Hamon</h3>
    <p>Zeppeli possesses her family’s genetic predisposition to Hamon affinity. She understands the basics of the breathing techniques, 
        although her lack of an experienced teacher has prevented her from learning advanced skills. These abilities are most useful 
        in conjunction with her Stand, which is also able to channel Hamon (and better than her), and provides her with a speed and 
        power boost while using her Stand.</p>
    <h2>Known Relationships</h2>
    <ul>
        <li>Crab Louie Zeppeli: father, deceased. She misses him deeply, even if she’s since found peace.
        </li>
        <li>Betsey Zeppeli: mother. Best friends, even before Betsey was widowed. Is deeply grateful for her unwavering love and support.
        </li>
        <li>{props.AmandaName}: Coworker, close friend. Frequent confidant. Often finds comfort in her presence and advice.
        </li>
        <li>{props.MorganName}: Coworker, close friend. Hang out the most outside of working hours. Loves her carefree, positive attitude, and relies on it when she’s down.
        </li>
        <li>Sally Reed: Coworker, close friend. Go-to person when she needs to vent. Grateful for the normalcy she offers in a strange world.
        </li>
    </ul>
    <h2>Psychological Profile</h2>
    <p>Rita is passionate and headstrong. Raised from a young age to live life true to herself, she is unrelenting when she discovers perceived 
        injustice in the world. This can also make her brash and tunnel-visioned, unable to unfocus herself from a task until it causes her 
        physical harm. Her mind moves fast, and at times, she struggles to properly articulate herself. Her Stand’s recent maturation and 
        ability to speak in lieu of Rita might be emblematic of this.</p>
    <h2>Author's Notes</h2>
    <p>When I first met Rita, she was immature, shortsighted, and irrational. I had intended to bring her up so she would survive the curse of her 
        family line, but she proved herself to be unbendable. We did not get along as a result, such was more of my failure than hers; she needed 
        gentle guidance, something I was incapable of offering. But she has grown, grown so much I hardly recognize her sometimes. And even though 
        I know I have no right to, I can’t help but feel proud. She is my greatest failure, my voice of dissent, my greatest success.
    </p>
    <p>
        <Link style={{color: 'red'}} to="/">Go Home</Link>
    </p>
    </div>
    </div>
    <img src={LEGS}></img>
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganName: state.MorganName,
        AmandaName: state.AmandaName,
        RitaCorruption: state.RitaCorruption,
    };
  })(Rita);
  
  