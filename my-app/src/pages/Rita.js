import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import robin from '../images/RockinRobin.png';
import LEGS from '../images/LEGS.png';
import ritaImage from '../images/rita.png';
import ritaImage2 from '../images/rita_scratch.png';

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

    function lockout (newName) {
        props.dispatch({
            type: 'visitRita',
            value: 1,
        });
        props.dispatch({
            type: 'renameRita',
            value: newName,
        })
        window.scrollTo(0, 0);
    }

    return (
    <>
    <img className='birb' src={robin} alt="Rockin' Robin's main body, extending upwards from its long legs. He stares into you. Somehow, he knows what you've done. What you're going to do."></img>
    <div className='openFolder'>
        <div className="openNametag">
            <p>
        <Link className='back-button' to="/">Go Back</Link></p>
        </div>
    <div style={{display: props.RitaVisited===0 ? 'block' : 'none', left: '40px'}} className="picture-frame">
        <img className='picture' src={ritaImage} alt="Rita Zeppeli"></img>
    </div>
    <div style={{display: props.RitaVisited>=1 ? 'block' : 'none'}} className="picture-frame">
        <img className='picture' src={ritaImage2} alt="Someone you've never met, inverted with the eyes scratched out."></img>
    </div>
    <div className='document' style={{margin: '-570px 0px 10px 450px'}}>
    <div style={{display: props.RitaCorruption<50 ? 'block' : 'none', margin: 'auto', width: '50' - props.RitaCorruption + '%'}}>
    <h1 style={{textAlign: 'center'}}>{props.RitaName[0]} {props.RitaName[2]} Documentation</h1>
    <h1 style={{textAlign: 'center', display: props.RitaCorruption===0 ? 'block' : 'none'}}>Threat Level: <span onClick={()=>{
        corrupt(2);
        console.log("He can still see you even if you can't see him.");
    }} className='interactive enabled-link-r no-select-text'>E</span></h1>
    <h1 style={{textAlign: 'center', display: props.RitaCorruption>=1 ? 'block' : 'none'}}>Threat Level: <b className='enabled-link-b'>E (Zeppeli Privilege)</b></h1>
    <h2 style={{display: props.RitaCorruption<2 ? 'block' : 'none'}}>Previous Names and Aliases</h2>
    <h2 style={{display: props.RitaCorruption===2 ? 'block' : 'none'}}>Previous <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>Names</span> and Aliases</h2>
    <h2 style={{display: props.RitaCorruption>=4 ? 'block' : 'none'}}>Previous <b className='enabled-link-b'>Markers of Fate</b> and Aliases</h2>

    <ul>
        <li style={{display: props.RitaCorruption<4 ? 'list-item' : 'none'}}>Margarita Zeppeli - Zeppeli prefers the shorthand of her first name ‘Rita’</li>
        <li style={{display: props.RitaCorruption===4 ? 'list-item' : 'none'}}>Margarita Zeppeli - Zeppeli <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>prefers</span> the shorthand of her first name ‘Rita’</li>
    <li style={{display: props.RitaCorruption===6 ? 'list-item' : 'none'}}>Margarita Zeppeli - Zeppeli <b className='enabled-link-b'>Zeppeli</b> <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>the</span> shorthand of her first name ‘Rita’</li>
    <li style={{display: props.RitaCorruption===8 ? 'list-item' : 'none'}}>Margarita Zeppeli - Zeppeli <b className='enabled-link-b'>Zeppeli</b> <b className='enabled-link-b'>Zeppeli </b>
    <span onClick={()=>{
        corrupt(2);
        console.log("Death by chandelier... what a cruel way to go.");
    }} className='interactive enabled-link-r no-select-text'>shorthand of her first name ‘Rita’</span></li>
    <li style={{display: props.RitaCorruption===10 ? 'list-item' : 'none'}}>Margarita Zeppeli - Zeppeli <b className='enabled-link-b'>Zeppeli</b> <b className='enabled-link-b'>Zeppeli </b> <b className='enabled-link-b'>death by <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>crushing</span> runs in the family</b></li>
    <li style={{display: props.RitaCorruption>=12 ? 'list-item' : 'none'}}>Margarita Zeppeli - Zeppeli <b className='enabled-link-b'>Zeppeli</b> <b className='enabled-link-b'>Zeppeli </b> <b className='enabled-link-b'>death by <b style={{color: "red"}}>YOU CRUSHED HER</b> runs in the family</b></li>
    </ul>
    <h2>Stand and Supernatural Abilities</h2>
    <h3 style={{display: props.RitaCorruption<12 ? 'block' : 'none'}}>Rockin' Robin</h3>
    <h3 style={{display: props.RitaCorruption===12 ? 'block' : 'none'}} onClick={()=>{
        corrupt(2);
        console.log('Tweet!');
        window.scrollTo(0, 0);
    }} className='interactive enabled-link-r no-select-text'>Rockin' Robin</h3>
    <h3 style={{display: props.RitaCorruption>=14 ? 'block' : 'none'}} onClick={()=>{
        window.scrollTo(0, 0);
    }} className='interactive no-select-text'><i style={{color: 'crimson', textDecoration: 'underline'}}>Rockin' Robin</i></h3>
    
    <p style={{display: props.RitaCorruption<14 ? 'block' : 'none'}}>It's a bird and also a scythe. It can extend its legs very far (presumably infinitely). Its beak is strong and sharp, able to 
        deflect projectiles. The Stand can also speak, repeat simple phrases, and mimic voices.
    </p>
    <p style={{display: props.RitaCorruption===14 ? 'block' : 'none'}}>It's a bird and also a scythe. It can extend its legs very far (presumably infinitely). Its beak is strong and sharp, able to&nbsp; 
        <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>deflect projectiles.</span> The Stand can also speak, repeat simple phrases, and mimic voices.
    </p>
    <p style={{display: props.RitaCorruption>=16 ? 'block' : 'none'}}>It's a bird and also a scythe. It can extend its legs very far (presumably infinitely). Its beak is strong and sharp, able to&nbsp;
    <b className='enabled-link-b'>she never wanted to accept how perfectly her Stand was made for killing.</b> The Stand can also speak, repeat simple phrases, and mimic voices.
    </p>
    
    <ul>
        <li style={{display: props.RitaCorruption<16 ? 'list-item' : 'none'}}>
        Notice of Stand Evolution: During an encounter with Crab Louie Zeppeli’s Stand ‘Rock Lobster’, Rockin’ Robin gained enhanced 
        speed and achieved full sentience.
        </li>
        <li style={{display: props.RitaCorruption===16 ? 'list-item' : 'none'}}>
        Notice of Stand Evolution: During an encounter with Crab Louie Zeppeli’s <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>Stand ‘Rock Lobster’,</span> Rockin’ Robin gained enhanced 
        speed and achieved full sentience.
        </li>
        <li style={{display: props.RitaCorruption===18 ? 'list-item' : 'none'}}>
        Notice of Stand Evolution: During an encounter with Crab Louie Zeppeli’s <b className='enabled-link-b'>you kept her from the truth</b>, Rockin’ Robin <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>gained</span> enhanced 
        speed and achieved full sentience.
        </li>
        <li style={{display: props.RitaCorruption===20 ? 'list-item' : 'none'}}>
        Notice of Stand Evolution: During an encounter with Crab Louie Zeppeli’s <b className='enabled-link-b'>you kept her from the truth</b>, Rockin’ Robin&nbsp; 
        <b className='enabled-link-b'>because you thought her weak</b> enhanced 
        speed and <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>achieved</span> full sentience.
        </li>
        <li style={{display: props.RitaCorruption===22 ? 'list-item' : 'none'}}>
        Notice of Stand Evolution: During an encounter with Crab Louie Zeppeli’s <b className='enabled-link-b'>you kept her from the truth</b>, Rockin’ Robin&nbsp; 
        <b className='enabled-link-b'>because you thought her weak</b> enhanced speed and <b className='enabled-link-b'>but she possessed the greatest potential <span onClick={()=>{
        corrupt(2);
    }} className='interactive enabled-link-r no-select-text'>out of all of you</span></b> full sentience.
        </li>
        <li style={{display: props.RitaCorruption>=24 ? 'list-item' : 'none'}}>
        Notice of Stand Evolution: During an encounter with Crab Louie Zeppeli’s <b className='enabled-link-b'>you kept her from the truth</b>, Rockin’ Robin&nbsp; 
        <b className='enabled-link-b'>because you thought her weak</b> enhanced speed and <b className='enabled-link-b'>but she possessed the greatest potential <b style={{color: 'red'}}>except for you</b></b> full sentience.
        </li>
    </ul>
    <h3>Hamon</h3>
    <p style={{display: props.RitaCorruption<24 ? 'block' : 'none'}}>Zeppeli possesses her family’s genetic predisposition to Hamon affinity. She understands the basics of the breathing techniques, 
        although her lack of an experienced teacher has prevented her from learning advanced skills. These abilities are most useful 
        in conjunction with her Stand, which is also able to channel Hamon (and better than her), and provides her with a speed and 
        power boost while using her Stand.</p>
    <p style={{display: props.RitaCorruption===24 ? 'block' : 'none'}}>Zeppeli possesses her family’s genetic predisposition <span onClick={()=>{
        corrupt(3);
    }} className='interactive enabled-link-r no-select-text'>to Hamon affinity.</span> She understands the basics of the breathing techniques, 
        although her lack of an experienced teacher has prevented her from learning advanced skills. These abilities are most useful 
        in conjunction with her Stand, which is also able to channel Hamon (and better than her), and provides her with a speed and 
        power boost while using her Stand.</p>
    <p style={{display: props.RitaCorruption===27 ? 'block' : 'none'}}>Zeppeli possesses her family’s genetic predisposition <b className='enabled-link-b'>Hamon... wait.</b> She understands the basics of the breathing techniques, 
        although her lack of an experienced teacher has prevented her from <span onClick={()=>{
        console.log("Strange how Hamon still works in here...");
        corrupt(4);
    }} className='interactive enabled-link-r no-select-text'>learning advanced skills.</span> These abilities are most useful 
        in conjunction with her Stand, which is also able to channel Hamon (and better than her), and provides her with a speed and 
        power boost while using her Stand.</p>
    <p style={{display: props.RitaCorruption===31 ? 'block' : 'none'}}>Zeppeli possesses her family’s genetic predisposition <b className='enabled-link-b'>Hamon... wait.</b> She understands the basics of the breathing techniques, 
        although her lack of an experienced teacher has prevented her from <b className='enabled-link-b'>don't tell me...</b> These abilities are most useful 
        in conjunction with her Stand, which is also able to channel Hamon (and better than her), and <span onClick={()=>{
        corrupt(5);
    }} className='interactive enabled-link-r no-select-text'>provides her with a speed and 
        power boost</span> while using her Stand.</p>
    <p style={{display: props.RitaCorruption>=36 ? 'block' : 'none'}}>Zeppeli possesses her family’s genetic predisposition <b className='enabled-link-b'>Hamon... wait.</b> She understands the basics of the breathing techniques, 
        although her lack of an experienced teacher has prevented her from <b className='enabled-link-b'>don't tell me...</b> These abilities are most useful 
        in conjunction with her Stand, which is also able to channel Hamon (and better than her), and <b className='enabled-link-b'>IT'S EXTENDING FASTER.</b> while using her Stand.</p>
        
    <h2 style={{display: props.RitaCorruption<36 ? 'block' : 'none'}}>Known Relationships</h2>
    <h2 style={{display: props.RitaCorruption===36 ? 'block' : 'none'}}> <span onClick={()=>{
        corrupt(5);
    }} className='interactive enabled-link-r no-select-text'>Known Relationships</span></h2>
    <h2 style={{display: props.RitaCorruption>=41 ? 'block' : 'none'}}> <b className='enabled-link-b'>Skip ahead. No time. Small words.</b></h2>
    <ul>
        <li>Crab Louie Zeppeli [deceased]: father. She misses him deeply, even if she’s since found peace.
        </li>
        <li>Betsey Zeppeli: mother. Best friends, even before Betsey was widowed. Is deeply grateful for her unwavering love and support.
        </li>
        <li>{props.AmandaName}: Coworker, close friend. Frequent confidant. Often finds comfort in her presence and advice.
        </li>
        <li>{props.MorganName}: Coworker, close friend. Hang out the most outside of working hours. Loves her carefree, positive attitude, and relies on it when she’s down.
        </li>
        <li>{props.SallyName}: Coworker, close friend. Go-to person when she needs to vent. Grateful for the normalcy she offers in a strange world.
        </li>
    </ul>
    <h2 style={{display: props.RitaCorruption<41 ? 'block' : 'none'}}>Psychological Profile</h2>
    <h2 style={{display: props.RitaCorruption===41 ? 'block' : 'none'}}><span onClick={()=>{
        corrupt(5);
        console.log("Stop, stop! She's already dead!");
    }} className='interactive enabled-link-r no-select-text'>Psychological Profile</span></h2>
    <h2 style={{display: props.RitaCorruption>=46 ? 'block' : 'none'}}><b className='enabled-link-b'>Pick a word. Remember.</b></h2>
    
    <div style={{display: props.RitaCorruption<46 ? 'block' : 'none'}}>
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
    </div>
    <div style={{display: props.RitaCorruption===46 ? 'block' : 'none'}}>
    <p>Rita is <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Passionate');
    }} className='interactive enabled-link-r no-select-text'>passionate</span> and&nbsp;
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Headstrong');
    }} className='interactive enabled-link-r no-select-text'>headstrong</span>. Raised from a young age to live life true to herself, she is&nbsp;
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Unrelenting');
    }} className='interactive enabled-link-r no-select-text'>unrelenting</span> when she discovers perceived 
        injustice in the world. This can also make her&nbsp;
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Brash');
    }} className='interactive enabled-link-r no-select-text'>brash</span> and tunnel-visioned, unable to unfocus herself from a task until it causes her 
        physical harm. Her mind moves fast, and at times, she struggles to properly articulate herself. Her Stand’s recent&nbsp;
        <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Maturation');
    }} className='interactive enabled-link-r no-select-text'>maturation</span> and 
        ability to speak in lieu of Rita might be emblematic of this.</p>
    <h2>Author's Notes</h2>
    <p>When I first met Rita, she was&nbsp;
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Immature');
    }} className='interactive enabled-link-r no-select-text'>immature</span>,&nbsp;
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Shortsighted');
    }} className='interactive enabled-link-r no-select-text'>shortsighted</span>, and&nbsp;
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Irrational');
    }} className='interactive enabled-link-r no-select-text'>irrational</span>. I had intended to bring her up so she would survive the curse of her 
        family line, but she proved herself to be&nbsp;
        <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Unbendable');
    }} className='interactive enabled-link-r no-select-text'>unbendable</span>. We did not get along as a result, such was more of&nbsp;
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('My Failure');
    }} className='interactive enabled-link-r no-select-text'>my failure</span> than hers; she needed 
        gentle guidance, something I was incapable of offering. But she has&nbsp;
        <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('Grown');
    }} className='interactive enabled-link-r no-select-text'>grown</span>, grown so much I hardly recognize her sometimes. And even though 
        I know I have no right to, I can’t help but feel proud. She is&nbsp; <br /> <br />
        <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('My Greatest Failure');
    }} className='interactive enabled-link-r no-select-text'>my greatest failure</span>,&nbsp; <br /> <br />
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('My Voice of Dissent');
    }} className='interactive enabled-link-r no-select-text'>my voice of dissent</span>,&nbsp; <br /> <br />
    <span onClick={()=>{
        corrupt(4);
        console.log("Desecrating a corpse? How very like you. Don't forget how many names you've stolen from the dead already.");
        lockout('My Greatest Success');
    }} className='interactive enabled-link-r no-select-text'>my greatest success</span>.
    </p>
    </div>
    </div>

    <div style={{display: props.RitaCorruption>=50 ? 'block' : 'none', margin: 'auto', width: '0%'}}>

    <div><b className='enabled-link-b'>
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        <br /></b>
        <p style={{textAlign: 'right'}} className='enabled-link-pbw'><b>LOOK WHAT YOU DID THIS TIME</b></p>
        <h1 style={{textAlign: 'center'}}>{props.RitaName[0]} {props.RitaName[2]} Documentation</h1>
    <h1 style={{textAlign: 'center', }}>Threat Level: <b className='enabled-link-b'>E (?????)</b></h1>
    <h2 >Previous Names and Aliases</h2> 
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p>
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p><br />
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p><br />
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p><br />
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p>
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p>
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p><br />
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b></p></div>
    <h2>Stand and Supernatural Abilities</h2>
    <h3>Rockin' Robin</h3>
    <h4 onClick={()=>{
        window.scrollTo(0, 0);
    }} className='interactive no-select-text'><i style={{color: 'crimson', textDecoration: 'underline'}}>Tweet</i></h4>
    <h5 onClick={()=>{
        window.scrollTo(0, 0);
    }} className='interactive no-select-text'><i style={{color: 'crimson', textDecoration: 'underline'}}>Tweet</i></h5>
    <h6 onClick={()=>{
        window.scrollTo(0, 0);
    }} className='interactive no-select-text'><i style={{color: 'crimson', textDecoration: 'underline'}}>Tweet</i></h6>
    <h2>Known Relationships</h2>
    <p><b className='enabled-link-b'>Caesar
    {props.RitaName[0]}:</b> {props.RitaName[0]}
    <b className='enabled-link-b'><br />Zeppeli?
    {props.RitaName[0]}:</b> {props.RitaName[0]}
    <b className='enabled-link-b'>
    {props.RitaName[0]}:</b> {props.RitaName[0]}
    <br /> <b className='enabled-link-b'>Crab Louie
    {props.RitaName[0]}:</b> {props.RitaName[0]}
    <b className='enabled-link-b'>
    {props.RitaName[0]}:</b> {props.RitaName[0]}
    <b className='enabled-link-b'>
    Who were these people again?</b></p>
    <h2>Author's Notes</h2>
    <p><b className='enabled-link-b'>
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}</b></p>
        <p style={{textAlign: 'right'}} className='enabled-link-pbw'><b>So much data. Corrupted beyond repair.</b></p>
        <p>{props.RitaName[0]}
        {props.RitaName[0]}
        {props.RitaName[0]}</p>
        <p><b className='enabled-link-b'>{props.RitaName[0]}</b><br />
        <b className='enabled-link-b'>{props.RitaName[0]}</b><br />
        <b className='enabled-link-b'>{props.RitaName[0]}</b><br />
        <b className='enabled-link-b'>{props.RitaName[0]}</b><br />
        <b className='enabled-link-b'>{props.RitaName[0]}</b><br />
        <b className='enabled-link-b'>{props.RitaName[0]}</b><br />
        <b className='enabled-link-b'>{props.RitaName[0]}</b><br />
        <b className='enabled-link-b'>{props.RitaName[0]}</b><br /></p>
        <p><i style={{color: 'crimson'}}>"For this mission to come, can I trust you? That you haven’t kept anything from me this time, and that you’re gonna act in the best interests of the team?"</i></p>
    <b className='enabled-link-b'>?{props.RitaName[0]}</b><br />
    </div>
    </div>
    <img style={{marginLeft: '-230px', marginTop: '-10px'}} src={LEGS} alt="Rockin' Robin's legs, extending into oblivion..."></img>
    </div>
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganName: state.MorganName,
        AmandaName: state.AmandaName,
        RitaName: state.RitaName,
        RitaVisited: state.RitaVisited,
        SallyName: state.SallyName,
        RitaCorruption: state.RitaCorruption,
    };
  })(Rita);
  
  