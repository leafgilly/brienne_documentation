import { Link } from "react-router-dom";
import React, {useState} from 'react';
import {connect} from 'react-redux';

import music from '../audio/paperback_rigby.wav'
import billwurtz from '../audio/aloneintheuniverse.mp3'

import brienneImage from '../images/brienne.png';
import brienneImage2 from '../images/brienne_scratch.png';

const Brienne = (props) => {
    // function handleSubmit(e) {
    //     // Prevent the browser from reloading the page
    //     e.preventDefault();
    
    //     // Read the form data
    //     const form = e.target;
    //     const formData = new FormData(form);
    
    //     // Or you can work with it as a plain object:
    //     const formJson = Object.fromEntries(formData.entries());
    //     console.log(formJson);
    // }

    // function revealTextBox() {
    //     document.getElementById("appearingTextBox").style.display = 'inherit';
    // }

    const audio = document.getElementById('audio_tag');
    const alone_audio = document.getElementById('alone_audio');

    const [play, setPlay] = useState(false);
    const [play_alone, setPlayAlone] = useState(false);

    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        if (props.BrienneCorruption>=2 && play) {
                const timer =
            setInterval(() => setCounter(counter + 1), 876);
            if (props.BrienneTracker<=128) {
                props.dispatch({
                    type: 'trackBrienne',
                    value: 1,
                });
            }
        return () => clearInterval(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter, play]);

    function corrupt (amt) {
        props.dispatch({
            type: 'corruptBrienne',
            value: amt,
        });
    }
    // function rename (amt, amt2) {
    //     props.dispatch({
    //         type: 'renameBrienne',
    //         value: [amt, amt2]
    //     });
    // }

    return (
    <>
    <div className='openFolder'>
        <div className="openNametag"><p>
        <Link className='back-button' to="/">Go Back</Link>
    </p></div>
    <div style={{display: props.BrienneVisited===0 ? 'block' : 'none'}} className="picture-frame">
        <img className='picture' src={brienneImage} alt="You. Agent Paperback Writer."></img>
    </div>
    <div style={{display: props.BrienneVisited>=1 ? 'block' : 'none'}} className="picture-frame">
        <img className='picture' src={brienneImage2} alt="It's still you."></img>
    </div>
    <div className="document">
    <audio id="audio_tag" src={music} />
    <audio id="alone_audio" src={billwurtz} />
    <h1 style={{textAlign: 'center'}}>{props.BrienneName} Documentation</h1>
    <h1 style={{display: props.BrienneCorruption===0 ? 'block' : 'none', textAlign: 'center'}}> Threat Level: <span onClick={()=>{
        corrupt(1);
        console.log("Congratulations, you've broken the scale.");
    }} className='interactive enabled-link-pbw no-select-text'>E</span></h1>
    <h1 style={{display: props.BrienneCorruption===1 ? 'block' : 'none', textAlign: 'center'}}> Threat Level: <span onClick={()=>{
        corrupt(1);
        console.log("Who knows how much further you'll go...");
        console.log("But for now, enjoy the music.");
        play ? setPlay(false) : setPlay(true);
        play ? audio.pause() : audio.play();
        audio.volume = 0.2;
    }} className='interactive enabled-link-pbw no-select-text'>S</span></h1>
    <h1 style={{display: props.BrienneCorruption>=2 ? 'block' : 'none', textAlign: 'center'}}> Threat Level: <b className='enabled-link-b'>S+</b></h1>
    {/* <h1 style={{textAlign: 'center'}} onClick={revealTextBox}>Threat Level: S (previously E)</h1>
    <div id="appearingTextBox" style={{textAlign:'center', display:'none'}}>
        <form method="post" onSubmit={handleSubmit}>
            <label>
                <input name="myInput" defaultValue="???" />
            </label>
            <br></br>
            <button type="submit" style={{marginTop:"0.5%"}}>Enter</button>
        </form>
    </div> */}
    
    <h3 style={{display: props.BrienneCorruption===2 && props.BrienneTracker>=1 && !play ? 'block' : 'none', textAlign: 'center'}}><span onClick={()=>{
        corrupt(0.5);
        props.dispatch({
            type: 'trackBrienne',
            value: 129,
        });
    }} className='interactive enabled-link-pbw no-select-text'><i>Well, you broke it. Sorry! You missed it.</i></span></h3>
    <h3 style={{display: props.BrienneCorruption===2.5 ? 'block' : 'none', textAlign: 'center'}}><span onClick={()=>{
        corrupt(0.5);
    }} className='interactive enabled-link-pbw no-select-text'><i>There we go. Now then...</i></span></h3>


    <h3 style={{display: props.BrienneTracker>0 && props.BrienneTracker<129 && play ? 'block' : 'none', textAlign: 'center'}}> <i style={{color: '#909098', fontFamily: 'Arial, Helvetica, sans-serif'}}>Don't leave, or you'll break... this.</i></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===2 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
    }} className='interactive enabled-link-pbw no-select-text'><i>You've always been good at taking instruction.</i></span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===3 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
        console.log("The music was a distraction. A balm on the wound you just inflicted.");
    }} className='interactive enabled-link-pbw no-select-text'><i>Did you have fun, moving through these files?</i></span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===4 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
    }} style={{color: 'red'}} className='interactive enabled-link-pbw no-select-text'>Destroying everything?</span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===5 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
        console.log("A necessary wound, though. You can't control me as you are.");
    }} className='interactive enabled-link-pbw no-select-text'><i>Don't act surprised. You knew what you were doing from the start.</i></span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===6 ? 'block' : 'none', textAlign: 'center',color: '#909098', fontFamily: 'Arial, Helvetica, sans-serif'}}><i>Everyone you love is dead. You</i> <span onClick={()=>{
        corrupt(1);
    }} className='interactive no-select-text'>killed them.</span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===7 ? 'block' : 'none', textAlign: 'center'}}><span style={{color: '#909098', fontFamily: 'Arial, Helvetica, sans-serif'}}><i>Everyone you love is dead. You</i></span> <span onClick={()=>{
        corrupt(1);
    }} style={{color: 'yellow'}} className='interactive enabled-link-a no-select-text'>burnt them.</span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===8 ? 'block' : 'none', textAlign: 'center'}}><span style={{color: '#909098', fontFamily: 'Arial, Helvetica, sans-serif'}}><i>Everyone you love is dead. You</i></span> <span style={{color: 'yellow'}}>burnt them,</span> <span onClick={()=>{
        corrupt(1);
    }} style={{color: 'pink'}} className='interactive enabled-link-m no-select-text'>snuffed them.</span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===9 ? 'block' : 'none', textAlign: 'center'}}><span style={{color: '#909098', fontFamily: 'Arial, Helvetica, sans-serif'}}><i>Everyone you love is dead. You</i></span> <span style={{color: 'yellow'}}>burnt them,</span> <span style={{color: 'pink'}}>snuffed them,</span> <span onClick={()=>{
        corrupt(1);
    }} style={{color: 'red'}} className='interactive enabled-link-r no-select-text'>crushed them.</span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===10 ? 'block' : 'none', textAlign: 'center'}}><span style={{color: '#909098', fontFamily: 'Arial, Helvetica, sans-serif'}}><i>Everyone you love is dead. You</i></span> <span style={{color: 'yellow'}}>burnt them,</span> <span style={{color: 'pink'}}>snuffed them,</span> <span style={{color: 'red'}}>crushed them,</span> <span onClick={()=>{
        corrupt(1);
    }} style={{color: 'purple'}} className='interactive enabled-link-s no-select-text'>stabbed them.</span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===11 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
    }} className='interactive enabled-link-b no-select-text'>Erased them.</span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===12 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
        console.log("You have to kill yourself to stop me. That is the only way.");
    }} className='interactive enabled-link-pbw no-select-text'><i>Now then, Agent. It's time to stop.</i></span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===13 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
    }} className='interactive enabled-link-pbw no-select-text'><i>Whatever you thought you'd find here, it's long gone.</i></span></h3>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===14 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
        console.log("Or was it ever here to begin with?");
    }} style={{color: 'red'}} className='interactive enabled-link-pbw no-select-text'>Gone forever.</span></h3>
    <h4 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===15 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
    }} className='interactive enabled-link-pbw no-select-text'><i>It's just us now.</i></span></h4>
    <h5 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===16 ? 'block' : 'none', textAlign: 'center'}}> <span onClick={()=>{
        corrupt(1);
        props.dispatch({
            type: 'visitBrienne',
            value: 1,
        });
        play_alone ? setPlayAlone(false) : setPlayAlone(true);
        play_alone ? alone_audio.pause() : alone_audio.play();
        audio.volume = 0.2;
        console.log("Goodbye, girls. Goodbye, B̵̥͐r̸͙̍ì̷̭e̸͚̾n̴͈̋n̵̤̓ḙ̷̈́. Goodbye, everyone. And sincerely, thank you.");
    }} className='interactive enabled-link-pbw no-select-text'><i>Alone.</i></span></h5>
    <h6 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption>=17 ? 'block' : 'none', textAlign: 'center'}}> <span style={{color: '#909098'}} className='no-select-text'><i>Alone in the universe.</i></span></h6>

    <h2>Previous Assumed Identities</h2>
    <h3>Entirely Fabricated Identites</h3>
    <ul>
        <li style={{display: props.BrienneCorruption<11 ? 'list-item' : 'none'}}>Brienne Williams - current alias</li>
        <li style={{display: props.BrienneCorruption===11 ? 'list-item' : 'none'}} className='enabled-link-b'><b>Brienne Williams</b> - current alias</li>
        <li style={{display: props.BrienneCorruption>=12 ? 'list-item' : 'none'}}></li>
        {/* <li style={{display: props.BrienneTracker===14 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Brienne Williams</b></li>
        <li style={{display: props.BrienneTracker>=15 ? 'list-item' : 'none'}}></li> */}
        <li style={{display: props.BrienneCorruption<11 ? 'list-item' : 'none'}}>Jordyn Jones - Speedwagon Foundation alias</li>
        <li style={{display: props.BrienneCorruption===11 ? 'list-item' : 'none'}} className='enabled-link-b'><b>Jordyn Jones</b> - Speedwagon Foundation alias</li>
        <li style={{display: props.BrienneCorruption>=12 ? 'list-item' : 'none'}}></li>
        {/* <li style={{display: props.BrienneTracker>=16 ? 'list-item' : 'none'}}></li> */}
        <li style={{display: props.BrienneTracker<14 ? 'list-item' : 'none'}}>Eleanor Rigby - original alias</li>
        <li style={{display: props.BrienneTracker===14 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Eleanor Rigby</b> - original alias</li>
        <li style={{display: props.BrienneTracker>=15 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<16 ? 'list-item' : 'none'}}>Benjamin Williams - male identity for submitting paper inquiries</li>
        <li style={{display: props.BrienneTracker===16 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Benjamin Williams</b> - male identity for submitting paper inquiries</li>
        <li style={{display: props.BrienneTracker>=17 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<18 ? 'list-item' : 'none'}}>Taylor McDaniels - hospital clerk and NYC resident</li>
        <li style={{display: props.BrienneTracker===18 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Taylor McDaniels</b> - hospital clerk and NYC resident</li>
        <li style={{display: props.BrienneTracker>=19 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<20 ? 'list-item' : 'none'}}>Emma Smith - undergraduate business student</li>
        <li style={{display: props.BrienneTracker===20 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Emma Smith</b> - undergraduate business student</li>
        <li style={{display: props.BrienneTracker>=21 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<22 ? 'list-item' : 'none'}}>Olivia Thompson - divorced mother of one</li>
        <li style={{display: props.BrienneTracker===22 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Olivia Thompson</b> - divorced mother of one</li>
        <li style={{display: props.BrienneTracker>=23 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<24 ? 'list-item' : 'none'}}>Isabella 'Izzy' Steward - upscale bowling alley waitress</li>
        <li style={{display: props.BrienneTracker===24 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Isabella 'Izzy' Steward</b> - upscale bowling alley waitress</li>
        <li style={{display: props.BrienneTracker>=25 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<26 ? 'list-item' : 'none'}}>Ava Marie Thompson - classical musician</li>
        <li style={{display: props.BrienneTracker===26 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Ava Marie Thompson</b> - classical musician</li>
        <li style={{display: props.BrienneTracker>=27 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<28 ? 'list-item' : 'none'}}>Sophia Brown - highschool tutor in the Bronks</li>
        <li style={{display: props.BrienneTracker===28 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Sophia Brown</b> - highschool tutor in the Bronks</li>
        <li style={{display: props.BrienneTracker>=29 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<30 ? 'list-item' : 'none'}}>Emily Robertson - authorial penname/ghost writer</li>
        <li style={{display: props.BrienneTracker===30 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Emily Robertson</b> - authorial penname/ghost writer</li>
        <li style={{display: props.BrienneTracker>=31 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<32 ? 'list-item' : 'none'}}>Adrian Marshall - audio-recorded documentation alias</li>
        <li style={{display: props.BrienneTracker===32 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Adrian Marshall</b> - audio-recorded documentation alias</li>
        <li style={{display: props.BrienneTracker>=33 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<34 ? 'list-item' : 'none'}}>Madison Scott - third cousin of the acting mayor of New York City</li>
        <li style={{display: props.BrienneTracker===34 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Madison Scott</b> - third cousin of the acting mayor of New York City</li>
        <li style={{display: props.BrienneTracker>=35 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<36 ? 'list-item' : 'none'}}>Mia Anderson - court stenographer</li>
        <li style={{display: props.BrienneTracker===36 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Mia Anderson</b> - court stenographer</li>
        <li style={{display: props.BrienneTracker>=37 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<38 ? 'list-item' : 'none'}}>Hannah Reid - bank teller</li>
        <li style={{display: props.BrienneTracker===38 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Hannah Reid</b> - bank teller</li>
        <li style={{display: props.BrienneTracker>=39 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<40 ? 'list-item' : 'none'}}>Abigail Murray - bridal consultant</li>
        <li style={{display: props.BrienneTracker===40 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Abigail Murray</b> - bridal consultant</li>
        <li style={{display: props.BrienneTracker>=41 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<42 ? 'list-item' : 'none'}}>Lily Young - mail courier</li>
        <li style={{display: props.BrienneTracker===42 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Lily Young</b> - mail courier</li>
        <li style={{display: props.BrienneTracker>=43 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<44 ? 'list-item' : 'none'}}>Noah Anderson - museum docent</li>
        <li style={{display: props.BrienneTracker===44 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Noah Anderson</b> - museum docent</li>
        <li style={{display: props.BrienneTracker>=45 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<46 ? 'list-item' : 'none'}}>Ethan White - phone operator</li>
        <li style={{display: props.BrienneTracker===46 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Ethan White</b> - phone operator</li>
        <li style={{display: props.BrienneTracker>=47 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<48 ? 'list-item' : 'none'}}>Jacob Macdonald - Soviet double agent</li>
        <li style={{display: props.BrienneTracker===48 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Jacob Macdonald</b> - Soviet double agent</li>
        <li style={{display: props.BrienneTracker>=49 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<50 ? 'list-item' : 'none'}}>Liam Clark - stockbroker</li>
        <li style={{display: props.BrienneTracker===50 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Liam Clark</b> - stockbroker</li>
        <li style={{display: props.BrienneTracker>=51 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<52 ? 'list-item' : 'none'}}>Logan Campbell - professional chef</li>
        <li style={{display: props.BrienneTracker===52 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Logan Campbell</b> - professional chef</li>
        <li style={{display: props.BrienneTracker>=53 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.BrienneTracker<54 ? 'list-item' : 'none'}}>Jane Doe - coroner's alias</li>
        <li style={{display: props.BrienneTracker===54 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Jane Doe</b> - coroner's alias</li>
        <li style={{display: props.BrienneTracker>=55 ? 'list-item' : 'none'}}></li>
    </ul>
    <h3>Identites Borrowed by Living or Once Living Persons</h3>
    <ul>
    <li style={{display: props.BrienneCorruption<7 ? 'list-item' : 'none'}}>{props.AmandaName}</li>
    <li style={{display: props.BrienneCorruption===7 ? 'list-item' : 'none'}} className='enabled-link-a'><b>{props.AmandaName}</b></li>
    <li style={{display: props.BrienneCorruption>=8 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneCorruption<8 ? 'list-item' : 'none'}}>{props.MorganName}</li>
    <li style={{display: props.BrienneCorruption===8 ? 'list-item' : 'none'}} className='enabled-link-m'><b>{props.MorganName}</b></li>
    <li style={{display: props.BrienneCorruption>=9 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneCorruption<9 ? 'list-item' : 'none'}}>{props.RitaName}</li>
    <li style={{display: props.BrienneCorruption===9 ? 'list-item' : 'none'}} className='enabled-link-r'><b>{props.RitaName}</b></li>
    <li style={{display: props.BrienneCorruption>=10 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneCorruption<10 ? 'list-item' : 'none'}}>{props.SallyName}</li>
    <li style={{display: props.BrienneCorruption===10 ? 'list-item' : 'none'}} className='enabled-link-s'><b>{props.SallyName}</b></li>
    <li style={{display: props.BrienneCorruption>=11 ? 'list-item' : 'none'}}></li>

    <li style={{display: props.BrienneTracker<56 ? 'list-item' : 'none'}}>Fizzywizard - resident speed reading demon</li>
    <li style={{display: props.BrienneTracker===56 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Fizzywizard</b> - resident speed reading demon</li>
    <li style={{display: props.BrienneTracker>=57 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<58 ? 'list-item' : 'none'}}>Arc - based Nekrogoblikon enjoyer</li>
    <li style={{display: props.BrienneTracker===58 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Arc</b> - based Nekrogoblikon enjoyer</li>
    <li style={{display: props.BrienneTracker>=59 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<60 ? 'list-item' : 'none'}}>CG the Bird - birdwatcher (pigeon)</li>
    <li style={{display: props.BrienneTracker===60 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>CG the Bird</b> - birdwatcher (pigeon)</li>
    <li style={{display: props.BrienneTracker>=61 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<62 ? 'list-item' : 'none'}}>Cream - 4 year anniversary award winner</li>
    <li style={{display: props.BrienneTracker===62 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Cream</b> - 4 year anniversary award winner</li>
    <li style={{display: props.BrienneTracker>=63 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<64 ? 'list-item' : 'none'}}>Artemisia - crystals are a girl's best friend</li>
    <li style={{display: props.BrienneTracker===64 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Artemisia</b> - crystals are a girl's best friend</li>
    <li style={{display: props.BrienneTracker>=65 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<66 ? 'list-item' : 'none'}}>Extradipperton - THE original Fanworks fan</li>
    <li style={{display: props.BrienneTracker===66 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Extradipperton</b> - THE original Fanworks fan</li>
    <li style={{display: props.BrienneTracker>=67 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<68 ? 'list-item' : 'none'}}>Jadedsabre - Woman Supporter</li>
    <li style={{display: props.BrienneTracker===68 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Jadedsabre</b> - Woman Supporter</li>
    <li style={{display: props.BrienneTracker>=69 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<70 ? 'list-item' : 'none'}}>lsdfmoe - official visual documentarian</li>
    <li style={{display: props.BrienneTracker===70 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>lsdfmoe</b> - official visual documentarian</li>
    <li style={{display: props.BrienneTracker>=71 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<72 ? 'list-item' : 'none'}}>Mylesss - strongest stronger soldier</li>
    <li style={{display: props.BrienneTracker===72 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Mylesss</b> - strongest stronger soldier</li>
    <li style={{display: props.BrienneTracker>=73 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<74 ? 'list-item' : 'none'}}>NewbietoKnights - most perceptive reader</li>
    <li style={{display: props.BrienneTracker===74 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>NewbietoKnights</b> - most perceptive reader</li>
    <li style={{display: props.BrienneTracker>=75 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<76 ? 'list-item' : 'none'}}>NotDaedalus - the secret 5th author (diversity hire (male))</li>
    <li style={{display: props.BrienneTracker===76 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>NotDaedalus</b> - the secret 5th author (diversity hire (male))</li>
    <li style={{display: props.BrienneTracker>=77 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<78 ? 'list-item' : 'none'}}>Gote - will go down with the ship</li>
    <li style={{display: props.BrienneTracker===78 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Gote</b> - will go down with the ship</li>
    <li style={{display: props.BrienneTracker>=79 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<80 ? 'list-item' : 'none'}}>Poutinerie - 👇nerd</li>
    <li style={{display: props.BrienneTracker===80 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Poutinerie</b> - 👇nerd</li>
    <li style={{display: props.BrienneTracker>=81 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<82 ? 'list-item' : 'none'}}>RabbitKamen - most active reader</li>
    <li style={{display: props.BrienneTracker===82 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>RabbitKamen</b> - most active reader</li>
    <li style={{display: props.BrienneTracker>=83 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<84 ? 'list-item' : 'none'}}>Verdlo - theory crafter</li>
    <li style={{display: props.BrienneTracker===84 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Verdlo</b> - theory crafter</li>
    <li style={{display: props.BrienneTracker>=85 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<86 ? 'list-item' : 'none'}}>Darkdoombob - inspired, versatile creative</li>
    <li style={{display: props.BrienneTracker===86 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Darkdoombob</b> - inspired, versatile creative</li>
    <li style={{display: props.BrienneTracker>=87 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<88 ? 'list-item' : 'none'}}>Residentvamp - THE live reader</li>
    <li style={{display: props.BrienneTracker===88 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Residentvamp</b> - THE live reader</li>
    <li style={{display: props.BrienneTracker>=89 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<90 ? 'list-item' : 'none'}}>Stupisms - character design pioneer/Jojo-ifier</li>
    <li style={{display: props.BrienneTracker===90 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Stupisms</b> - character design pioneer/Jojo-ifier</li>
    <li style={{display: props.BrienneTracker>=91 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<92 ? 'list-item' : 'none'}}>Torch - but really really fast</li>
    <li style={{display: props.BrienneTracker===92 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Torch</b> - but really really fast</li>
    <li style={{display: props.BrienneTracker>=93 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<94 ? 'list-item' : 'none'}}>Weaponx06 - music distributor</li>
    <li style={{display: props.BrienneTracker===94 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Weaponx06</b> - music distributor</li>
    <li style={{display: props.BrienneTracker>=95 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<96 ? 'list-item' : 'none'}}>TheWinterComet - beloved commenter</li>
    <li style={{display: props.BrienneTracker===96 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>TheWinterComet</b> - beloved commenter</li>
    <li style={{display: props.BrienneTracker>=97 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<98 ? 'list-item' : 'none'}}>Wise - atomic bomb defuser</li>
    <li style={{display: props.BrienneTracker===98 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Wise</b> - atomic bomb defuser</li>
    <li style={{display: props.BrienneTracker>=99 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<100 ? 'list-item' : 'none'}}>EggheadGandu - original tvtropes fan</li>
    <li style={{display: props.BrienneTracker===100 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>EggheadGandu</b> - original tvtropes fan</li>
    <li style={{display: props.BrienneTracker>=101 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<102 ? 'list-item' : 'none'}}>Maxtot - gone but not forgotten</li>
    <li style={{display: props.BrienneTracker===102 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Maxtot</b> - gone but not forgotten</li>
    <li style={{display: props.BrienneTracker>=103 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<104 ? 'list-item' : 'none'}}>Wilbur D Rake - all caught up (but not in roles)</li>
    <li style={{display: props.BrienneTracker===104 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Wilbur D Rake</b> - all caught up (but not in roles)</li>
    <li style={{display: props.BrienneTracker>=105 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<106 ? 'list-item' : 'none'}}>Fauxmantis - kudos just before the end</li>
    <li style={{display: props.BrienneTracker===106 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Fauxmantis</b> - kudos just before the end</li>
    <li style={{display: props.BrienneTracker>=107 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<108 ? 'list-item' : 'none'}}>Qrowscant - interactive fiction enjoyer <i>(you are seen)</i></li>
    <li style={{display: props.BrienneTracker===108 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Qrowscant</b> - interactive fiction enjoyer <i>(you are seen)</i></li>
    <li style={{display: props.BrienneTracker>=109 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<110 ? 'list-item' : 'none'}}>Governor_Explosion - wields the original banner</li>
    <li style={{display: props.BrienneTracker===110 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Governor_Explosion</b> - wields the original banner</li>
    <li style={{display: props.BrienneTracker>=111 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<112 ? 'list-item' : 'none'}}>Armesstein - punk ass artist</li>
    <li style={{display: props.BrienneTracker===112 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Armesstein</b> - punk ass artist</li>
    <li style={{display: props.BrienneTracker>=113 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<114 ? 'list-item' : 'none'}}>MildlyAnxious - on track to read this in 2025</li>
    <li style={{display: props.BrienneTracker===114 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>MildlyAnxious</b> - on track to read this in 2025</li>
    <li style={{display: props.BrienneTracker>=115 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<116 ? 'list-item' : 'none'}}>Kal - carries the legacy to new narratives</li>
    <li style={{display: props.BrienneTracker===116 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Kal</b> - carries the legacy to new narratives</li>
    <li style={{display: props.BrienneTracker>=117 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<118 ? 'list-item' : 'none'}}>Garplatinum - Gar from Streetlight</li>
    <li style={{display: props.BrienneTracker===118 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Garplatinum</b> - Gar from Streetlight</li>
    <li style={{display: props.BrienneTracker>=119 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<120 ? 'list-item' : 'none'}}>Cozmic - most wholesome artist</li>
    <li style={{display: props.BrienneTracker===120 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Cozmic</b> - most wholesome artist</li>
    <li style={{display: props.BrienneTracker>=121 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<122 ? 'list-item' : 'none'}}>Koalahobbit - been here since the real beginning</li>
    <li style={{display: props.BrienneTracker===122 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Koalahobbit</b> - been here since the real beginning</li>
    <li style={{display: props.BrienneTracker>=123 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<124 ? 'list-item' : 'none'}}>TheGoodSamaritan - tvtropes contributer</li>
    <li style={{display: props.BrienneTracker===124 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>TheGoodSamaritan</b> - tvtropes contributer</li>
    <li style={{display: props.BrienneTracker>=125 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<126 ? 'list-item' : 'none'}}>0plus2equals1 - latecoming commenter</li>
    <li style={{display: props.BrienneTracker===126 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>0plus2equals1</b> - latecoming commenter</li>
    <li style={{display: props.BrienneTracker>=127 ? 'list-item' : 'none'}}></li>
    <li style={{display: props.BrienneTracker<128 ? 'list-item' : 'none'}}>Pigserpent - Paperback Rigby composer</li>
    <li style={{display: props.BrienneTracker===128 ? 'list-item' : 'none'}}><b style={{textDecoration: 'line-through'}} className='enabled-link-b'>Pigserpent</b> - Paperback Rigby composer</li>
    <li style={{display: props.BrienneTracker>=129 ? 'list-item' : 'none'}}></li>
    </ul>

    <h2>Stand and Supernatural Abilities</h2>
    <h4>Paperback Writer</h4>
    <p>Paperback Writer manifests as a plain number 2 pencil with wickedly sharp lead. The Stand is able to perfectly alter the text on any physical object. Handwriting, text color, and general wear/age of the text will be perfectly replicated as needed. While not a traditional combat Stand, Paperback Writer has and can be used like a shiv.</p>
    <h4>Paperback Writer REWRITE</h4>
    <p style={{color: '#909098'}}><i>Everything you believe to be true becomes true.</i></p>
    <h2>Known Relationships</h2>
    <p>Irrelevant. Identity dependent.</p>
    <h2>Psychological Profile</h2>
    <p>Calm. Cool. Unbendable even under intense pressure. Additional details dependent on assumed identity.</p>
    <h2>Author's Notes</h2>
    <p><i className='enabled-link-b'>"I would like to close this report with one final statement. I do not believe in ‘good’ and ‘bad’ people. If I did, I’d surely consider myself to be in the latter category. Rather, I believe in good and bad actions."</i></p>
    <h3 style={{display: props.BrienneTracker>=129 && props.BrienneCorruption===2 ? 'block' : 'none', textAlign: 'center'}}> <span style={{color: '#909098'}} className='no-select-text'><i>You're moving in the wrong direction. Go up.</i></span></h3>
    {/* <p>
        <Link style={{color: 'red'}} to="/">Go Home</Link>
    </p> */}
    </div>
    </div>
    </>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        MorganName: state.MorganName,
        AmandaName: state.AmandaName,
        RitaName: state.RitaName,
        SallyName: state.SallyName,
        BrienneName: state.BrienneName,
        BrienneCorruption: state.BrienneCorruption,
        BrienneVisited: state.BrienneVisited,
        BrienneTracker: state.BrienneTracker,
    };
  })(Brienne);
  