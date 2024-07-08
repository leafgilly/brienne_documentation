import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const Sally = (props) => {

    //VISITED STATE

    var pagesVisited = JSON.parse(document.cookie);
    pagesVisited["Sally"] = true;
    document.cookie = JSON.stringify(pagesVisited);

    return (
    <>
    <div class='document'>
    <h1 style={{textAlign: 'center'}}>Sally Joanna Reed</h1>
    <h2 style={{textAlign: 'center'}}>Threat Level: D</h2>
    <h2>Previous Names and Aliases</h2>
    <ul>
        <li>n/a</li>
    </ul>
    <h2>Stand and Supernatural Abilities</h2>
    <h3>Eurythmics</h3>
    <p>Eurythmics is a fully sentient robotic Stand that can play music from the speakers in its chest and mouth. It can access public 
        radio waves as well as play music it knows. If anyone moves to the beat of the song Eurythmics plays for four beats, Eurythmics 
        can take control of their body. This ability is single target and can be broken if the user is harmed/distracted. 
    </p>
    <ul>
        <li>Note: The single target nature of this Stand is absolute except in unique instances of hivemind crowds.</li>
    </ul>
    <p>Eurythmics has a strong personality, manifesting in unique mannerisms and preferences for varying its visual appearance. This Stand 
        has been observed having the ability to change its physical manifestation at will (i.e. Michael Jackson’s Thriller jumpsuit, 
        two feather boas instead of one).</p>
    <h2>Known Relationships</h2>
    <ul>
        <li>Norman Reed: father. Amicable but distant relationship. He is a man of few words, she struggled to broach that.
        </li>
        <li>Lydia Reed: mother. Strained relationship. Wishes she cared more about Sally’s academics than grandchildren.
        </li>
        <li>{props.AmandaName}: Coworker, close friend. Relied on her as an authority figure after learning about Stands; 
            often had her stay overnight for peace of mind soon after Sally’s assault with the arrow.
        </li>
        <li>{props.MorganName}: Coworker, close friend. Occasionally intimidated by her wealth. Deeply values her carefree, positive nature.
        </li>
        <li>Rita Zeppeli: Coworker, close friend. Always go out for coffee and lunch hours together during slow days. Loves teasing her, 
            but appreciates her for being her most normal friend at work.
        </li>
    </ul>
    <h2>Psychological Profile</h2>
    <p>Reed is highly intelligent and perceptive with great aptitude for leadership, although she struggles with being unable to perfectly 
        control people. The latter quality has developed into a form of survivor’s guilt: she hates watching people get injured to save 
        her. While she is outwardly suave, she has a penchant for trickery and carefree fun. This is more clearly seen in Eurythmics, 
        who often encourages or instigates harmless pranks.</p>
    <h2>Author's Notes</h2>
    <p>Reed is unerringly logical, even in interpersonal relationships, which is something I’ve valued deeply throughout our time working 
        together. While I was resentful of her during our initial meeting—Amanda returned with her and not the Stand arrow—I quickly grew 
        to value her academic background and leader’s demeanor. She is my most reliable employee, my mind, my protégé.</p>

    <p>
        <Link style={{color: 'red'}} to="/">Go Home</Link>
    </p>
    </div>
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganName: state.MorganName,
        AmandaName: state.AmandaName,
    };
  })(Sally);
  
  