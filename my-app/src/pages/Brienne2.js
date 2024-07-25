import React, {useState} from 'react';
import {connect} from 'react-redux';

import brienneImage from '../images/brienne.png';
import brienneImage2 from '../images/brienne_scratch.png';

const Brienne = (props) => {
    
    const [text, setText] = useState('');
    const [BrienneEntry, setBrienneEntry] = useState(false);
    const [AmandaEntry, setAmandaEntry] = useState(false);
    const [MorganEntry, setMorganEntry] = useState(false);
    const [RitaEntry, setRitaEntry] = useState(false);
    const [SallyEntry, setSallyEntry] = useState(false);

    const validEntries = [
        'brienne williams', 
        'amanda valentine', 
        'morgan becquerel', 
        'rita zeppeli', 
        'sally reed', 
        'stella morgan becquerel', 
        'stella becquerel', 
        'margarita zeppeli', 
        'sally joanna reed',
        'amanda valentina',];

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        setText(formJson.myInput.toLowerCase());
    }

    React.useEffect(() => {
        // console.log(text);
        if (validEntries.includes(text)) {
            if (text === 'brienne williams') {
                setBrienneEntry(true);
            } else if (text === 'amanda valentine' || text === 'amanda valentina') {
                setAmandaEntry(true);
            } else if (text === 'morgan becquerel' || text === 'stella morgan becquerel' || text === 'stella becquerel') {
                setMorganEntry(true);
            } else if (text === 'rita zeppeli' || text === 'margarita zeppeli') {
                setRitaEntry(true);
            } else if (text === 'sally reed' || text === 'sally joanna reed') {
                setSallyEntry(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleSubmit, text]);

    function revealTextBox() {
        document.getElementById("appearingTextBox").style.display = 'inherit';
    }

    function corrupt (amt) {
        props.dispatch({
            type: 'corruptBrienne2',
            value: amt,
        });
    }

    return (
    <>
    <div className='openFolder'>
        <div className="openNametag"><p>
        {/* <Link className='back-button' to="/">Go Back</Link> */}
    </p></div>
    <div className="picture-frame">
        <img className='picture' src={brienneImage} alt="You. Brienne Williams."></img>
    </div>
    <div className="document">
    <h1 style={{display: BrienneEntry ? 'none' : 'block', textAlign: 'center'}}>Agent Paperback Writer Documentation</h1>
    <h1 style={{display: BrienneEntry ? 'block' : 'none', textAlign: 'center'}}><span className='enabled-link-b'>Brienne Williams</span> Documentation</h1>
    <h1 style={{display: props.Brienne2Corruption === 0 ? 'block' : 'none', textAlign: 'center'}} onClick={revealTextBox}>Threat Level: <span onClick={()=>{
        corrupt(1);
        console.log("Let's get to work.");
    }} className='interactive enabled-link-b no-select-text'>S+</span></h1>
    <h1 style={{display: props.Brienne2Corruption >=1 ? 'block' : 'none', textAlign: 'center'}}>Threat Level: S+</h1>
    <div id="appearingTextBox" style={{textAlign:'center', display:'none'}}>
        <form method="post" onSubmit={handleSubmit} className='brienne-form'>
            <label>
                <input style={{fontFamily: 'Itim', color: 'rgb(51, 125, 255)'}} name="myInput" placeholder="Write here..." />
            </label>
            <br></br>   
            <button type="submit" className='brienne-button'>REWRITE</button>
        </form>
    </div>
    <h2>Informer Company Employee List</h2>
    <ul>
    <li style={{display: BrienneEntry ? 'none' : 'list-item'}}>Agent Paperback Writer</li>
    <li style={{display: BrienneEntry ? 'list-item' : 'none'}}><span  className='enabled-link-b'>Brienne Williams</span> - That's me.</li>
    <li style={{display: AmandaEntry ? 'none' : 'list-item'}}>Ä̷̼́m̴͜͝█̸̳̾ń̷̼d̴̼̑ȃ̴̮ V̵̂ͅa̵̢͗l̸̮̆█̶̟̂n̸̖̕t̵̮͆i̵͖̎n̷̛̖█̷̯̍</li>
    <li style={{display: AmandaEntry ? 'list-item' : 'none'}}><span  className='enabled-link-a'>Amanda Valentine</span> - You've saved me a million times already. I know you can do it again.</li>
    <li style={{display: MorganEntry ? 'none' : 'list-item'}}>██████ █████████</li>
    <li style={{display: MorganEntry ? 'list-item' : 'none'}}><span  className='enabled-link-m'>Morgan Becquerel</span> - You can do anything; I would know. Once you get started, there's no stopping you.</li>
    <li style={{display: RitaEntry ? 'none' : 'list-item'}}>??? Z̷͚͊ě̶͓p̶̦̔p̵͙̄e̸͍͠l̸̨̐ḯ̶͓</li>
    <li style={{display: RitaEntry ? 'list-item' : 'none'}}><span  className='enabled-link-r'>Rita Zeppeli</span> - You're just as stubborn as me. You won't let it end like this.</li>
    <li style={{display: SallyEntry ? 'none' : 'list-item'}}>S16Al13Ly̸̡͂3 Re75Ę̵̀d101</li>
    <li style={{display: SallyEntry ? 'list-item' : 'none'}}><span  className='enabled-link-s'>Sally Reed</span> - You're the smartest person I know. I have no doubt you'll find a way out of this.</li>
    </ul>

    <h2>Stand and Supernatural Abilities</h2>
    <h4>Paperback Writer</h4>
    <p style={{display: BrienneEntry ? 'block' : 'none'}}>Paperback Writer manifests as a plain number 2 pencil with wickedly sharp lead. The Stand is able to perfectly alter the text on any physical object. Handwriting, text color, and general wear/age of the text will be perfectly replicated as needed. While not a traditional combat Stand, Paperback Writer has and can be used like a shiv.</p>
    <h4>Paperback Writer REWRITE</h4>
    <p style={{display: BrienneEntry ? 'block' : 'none'}}><i style={{color: '#909098'}}>Everything you believe to be true becomes true.</i> <b className='enabled-link-b'>And that's how I'm going to fix this.</b></p>
    <h2>Known Relationships</h2>
    <p style={{display: BrienneEntry ? 'block' : 'none'}}>See [Informer Co Employee List].</p>
    <h2>Psychological Profile</h2>
    <p style={{display: BrienneEntry ? 'block' : 'none'}}>Calm. Cool. Unbendable even under intense pressure, <b className='enabled-link-b'>like right now</b>.</p>
    <h2>Author's Notes</h2>
    <p style={{display: BrienneEntry && AmandaEntry && MorganEntry && RitaEntry && SallyEntry ? 'block' : 'none'}} className='interactive enabled-link-b' onClick={()=>{
        corrupt(1);
        console.log("You've got this.");
    }}>My name is Brienne Williams, and if there is no way out of this, I'll write a new one.</p>
    <p style={{display: props.Brienne2Corruption>=2 && BrienneEntry && AmandaEntry && MorganEntry && RitaEntry && SallyEntry ? 'block' : 'none', textAlign: 'center', color: 'red'}} onClick={()=>{
        corrupt(1);
    }}><b>THIS IS THE CLUE TO THE ARG GOOD END</b></p>
    </div>
    </div>
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        Brienne2Corruption: state.Brienne2Corruption,
    };
  })(Brienne);
  