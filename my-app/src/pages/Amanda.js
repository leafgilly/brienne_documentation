import { Link } from "react-router-dom";
import React, {useState, useCallback, useEffect } from 'react';
import {connect} from 'react-redux';

const Amanda = (props) => {

    //CODE THAT PERIODICALLY CHANGES THE TEXT DISPLAYED ON THE SCREEN USING A TIMER

    const names = [
        'MURDERER', 'MURDERER', 'M̷U̴R̷D̶E̴R̶E̸R̷', 'M̴̼̈́Ư̴̤R̴͖̚D̷̢̀Ḛ̸̒R̷͍͗È̸̩R̷̟̔', 'MURDERER', "M̸̺̒́͋̉Ų̶̱͙͔͆̄͆Ř̸͇̬̻́̓̂D̸̨͔̻͔̏É̵̱̱̇̽R̵̫͍̦͙̫̽̑̇Ė̴̝̲̹̈̔̉̋R̸̩̟̠̉̍"
    ]

    const [newGlitch, setnewGlitch] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        // console.log(index);
        setnewGlitch(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 100);
        return () => clearInterval(intervalID);
    }, [shuffle])

    function corrupt (amt) {
        props.dispatch({
            type: 'corruptAmanda',
            value: amt,
        });
    }

    function hoverOn () {
        props.dispatch({
            type: 'amandaHover',
            value: 1,
        })
        setCounter(0);
    }

    function hoverOff () {
        props.dispatch({
            type: 'amandaHover',
            value: -1,
        })
    }

    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        const timer =
        setInterval(() => setCounter(counter + 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
    <>
    {/* BRIENNE ONCLICK SAVED FOR LATER */}
    {/* <div onClick={()=>{
        corrupt(1);
        }} class='interactive enabled-link-b no-select-text' style={{display: props.AmandaCorruption===0 ? 'block' : 'none'}}>
            <p>There's... nothing here?</p>
    </div> */}
    <div class='document'>
    <h1 style={{textAlign: 'center'}}>{props.AmandaName} Documentation</h1>
    <h2 style={{textAlign: 'center'}}> Threat Level: C (previously A)</h2>
    <h2>Previous Names and Aliases</h2>
    <ul>
    <li style={{display: props.AmandaCorruption===0 ? 'list-item' : 'none'}}> Amanda Valentina - as of 1989, upon arriving in New York, documentee had her name changed to <span 
    onClick={()=>{
        corrupt(1);
    }} class='interactive enabled-link-a no-select-text'>‘Valentine’</span> (used hereafter)</li>
    <li style={{display: props.AmandaCorruption>=1 ? 'list-item' : 'none'}}> Amand<b class='enabled-link-b'>e</b> Valentin<b class='enabled-link-b'>e</b> - a<b class='enabled-link-b'>e</b> o<b class='enabled-link-b'>e</b> 198<b class='enabled-link-b'>e</b>, upo<b class='enabled-link-b'>e</b> arrivin<b class='enabled-link-b'>e</b> i<b class='enabled-link-b'>e</b> Ne<b class='enabled-link-b'>e</b> Yor<b class='enabled-link-b'>e</b>, documente<b class='enabled-link-b'>e</b> ha<b class='enabled-link-b'>e</b> he<b class='enabled-link-b'>e</b> nam<b class='enabled-link-b'>e</b> change<b class='enabled-link-b'>e</b> t<b class='enabled-link-b'>e</b> ‘Valentin<b class='enabled-link-b'>e</b>’ (use<b class='enabled-link-b'>e</b> hereafte<b class='enabled-link-b'>e</b>)</li>
    </ul>
    <h2>Stand and Supernatural Abilities</h2>
        <div style={{display: props.AmandaCorruption<=0 ? 'inline' : 'none'}}>
            <h3>Disturbia</h3>
            <p>Disturbia is a humanoid made of geometric glass shards. She is able to transform both itself and its user into people/things that 
                the user used to be afraid of. In the case of animals and objects, only Disturbia transforms. In the case of people (and Stand users), 
                the user becomes the person, and Disturbia becomes the Stand. When transformed into a Stand user, Disturbia can use the transformed 
                Stand's abilities, but cannot sustain the transformation for long.
            </p>
        </div>
        <div style={{display: props.AmandaCorruption===1 ? 'inline' : 'none'}}>
            <h3>Disturbia</h3>
            <p>Disturbia is a humanoid made of <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>geometric glass shards</span>. She is able to transform both itself and its user into people/things that 
                the user used to be afraid of. In the case of animals and objects, only Disturbia transforms. In the case of people (and Stand users), 
                the user becomes the person, and Disturbia becomes the Stand. When transformed into a Stand user, Disturbia can use the transformed 
                Stand's abilities, but cannot sustain the transformation for long.
            </p>
        </div>
        <div style={{display: props.AmandaCorruption===2 ? 'block' : 'none'}} class='disturbia'>
            <h3 style={{color: 'black'}}>Disturbia</h3>
            <p style={{color: 'black'}}>Disturbia is a humanoid made of geometric glass shards. She is able to transform both itself and its user into <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>
                people/things</span> that the user used to be afraid of. In the case of animals and objects, only Disturbia transforms. In the case of people (and Stand users), 
                the user becomes the person, and Disturbia becomes the Stand. When transformed into a Stand user, Disturbia can use the transformed 
                Stand's abilities, but cannot sustain the transformation for long.
            </p>
        </div>
        <div style={{display: props.AmandaCorruption===3 ? 'block' : 'none'}} class='disturbia'>
            <h3 style={{color: 'black'}}>Disturbia</h3>
            <p style={{color: 'black'}}> Disturbia is a humanoid made of geometric glass shards. She is able to transform both itself and its user into <b class='enabled-link-b'>monsters like you</b> that 
                the user used to be <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>afraid of</span>. In the case of animals and objects, only Disturbia transforms. In the case of people (and Stand users), 
                the user becomes the person, and Disturbia becomes the Stand. When transformed into a Stand user, Disturbia can use the transformed 
                Stand's abilities, but cannot sustain the transformation for long.
            </p>
        </div>
        <div style={{display: props.AmandaCorruption===4 ? 'block' : 'none'}} class='disturbia'>
            <h3 style={{color: 'black'}}>Disturbia</h3>
            <p style={{color: 'black'}}>Disturbia is a humanoid made of geometric glass shards. She is able to transform both itself and its user into <b class='enabled-link-b'>monsters like you</b> that 
                the user used to be <b class='enabled-link-b'>you seriously think she wouldn't be afraid of you, after what you did to her?</b> In the case of animals and objects, only Disturbia transforms. In the case of people (and Stand users), 
                the user becomes the person, and Disturbia becomes the Stand. When transformed into a Stand user, Disturbia can use the transformed 
                Stand's abilities, but cannot sustain the <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>transformation</span> for long.
            </p>
        </div>
        <div style={{display: props.AmandaCorruption>=5 ? 'block' : 'none'}} class='disturbia'>
            <h3 style={{color: 'black'}}>Disturbia</h3>
            <p> <b class='enabled-link-b'>MURDERER {newGlitch} MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER {newGlitch} MURDERER MURDERER
            MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER {newGlitch} MURDERER
            MURDERER MURDERER MURDERER {newGlitch} MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER MURDERER
            MURDERER</b>
            </p>
        </div>

        <h4>Notice of Stand Evolution: </h4>
        <p style={{display: props.AmandaCorruption<5 ? 'block' : 'none'}}>During an encounter with Crab Louie Zeppeli’s Stand ‘Rock Lobster’, Disturbia’s physical appearance changed.</p>
        <p style={{display: props.AmandaCorruption===5 ? 'block' : 'none'}}>During an encounter with Crab Louie Zeppeli’s Stand ‘Rock Lobster’, <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Disturbia’s physical appearance changed</span>.</p>
        <p style={{display: props.AmandaCorruption>=6 ? 'block' : 'none'}}>During an encounter with Crab Louie Zeppeli’s Stand ‘Rock Lobster’, 
            <b class='enabled-link-b'> it scared you to see her grow.</b></p>
            <ul>
                <li style={{display: props.AmandaCorruption<6 ? 'list-item' : 'none'}}>
                    Appearance: The glass shards are now lined with gold.
                </li>
                <li style={{display: props.AmandaCorruption===6 ? 'list-item' : 'none'}}>
                <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Appearance:</span> The glass shards are now lined with gold.
                </li>
                <li style={{display: props.AmandaCorruption===7 ? 'list-item' : 'none'}}>
                    <b class='enabled-link-b'>A brave face, smiling when her back</b> <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>is</span> <b class='enabled-link-b'>turned to hide the coward underneath.</b>
                </li>
                <li style={{display: props.AmandaCorruption>=8 ? 'list-item' : 'none'}}>
                    <b class='enabled-link-b'>A brave face, smiling when her back</b> <b style={{color: 'red'}}>"""WAS""" (important distinction)</b> <b class='enabled-link-b'>turned to hide the coward underneath.</b>
                </li>
                <li style={{display: props.AmandaCorruption<8 ? 'list-item' : 'none'}}>
                Ability: A general range and duration increase. Additionally, the previous text about whether Valentine or Disturbia would turn into 
                the transformation is no longer true. Now, either Valentine or Disturbia can transform unless in the case of a Stand user.
                </li>
                <li style={{display: props.AmandaCorruption===8 ? 'list-item' : 'none'}}>
                <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Ability:</span> A general range and duration increase. Additionally, the previous text about whether Valentine or Disturbia would turn into 
                the transformation is no longer true. Now, either Valentine or Disturbia can transform unless in the case of a Stand user.
                </li>
                <li style={{display: props.AmandaCorruption>=9 ? 'list-item' : 'none'}}>
                <b class='enabled-link-b'>You become someone new, too. Who are you?</b> <i style={{color: 'lightyellow'}}>"Who is the user of Paperback Writer, if not a person who has built and rebuilt their entire being around a veil of untruth?"</i>
                </li>
            </ul>
        <h4>Known Transformations</h4>
        <h5>Objects</h5>
        <ul>
        <li style={{display: props.AmandaCorruption<9 ? 'list-item' : 'none'}}>A Glock 19 firearm</li>
        <li style={{display: props.AmandaCorruption===9 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>A Glock 19 firearm</li>
        <li style={{display: props.AmandaCorruption>=10 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>"How</i></li>
        </ul>
        <h5>Animals</h5>
        <ul>
        <li style={{display: props.AmandaCorruption<10 ? 'list-item' : 'none'}}>A feral black cat</li>
        <li style={{display: props.AmandaCorruption===10 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>A feral black cat</li>
        <li style={{display: props.AmandaCorruption>=11 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>does</i></li>
        
        <li style={{display: props.AmandaCorruption<11 ? 'list-item' : 'none'}}>A cockroach</li>
        <li style={{display: props.AmandaCorruption===11 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>A cockroach</li>
        <li style={{display: props.AmandaCorruption>=12 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>it</i></li>

        <li style={{display: props.AmandaCorruption<12 ? 'list-item' : 'none'}}>A red-eyed raven</li>
        <li style={{display: props.AmandaCorruption===12 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>A red-eyed raven</li>
        <li style={{display: props.AmandaCorruption>=13 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>feel</i></li>

        <li style={{display: props.AmandaCorruption<13 ? 'list-item' : 'none'}}>moose</li>
        <li style={{display: props.AmandaCorruption===13 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>moose</li>
        <li style={{display: props.AmandaCorruption>=14 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>to</i></li>
        </ul>
        <h5>Standless Humans</h5>
        <ul>
        <li style={{display: props.AmandaCorruption<14 ? 'list-item' : 'none'}}>Ricardo Leyva Muñoz Ramírez aka The Nightstalker</li>
        <li style={{display: props.AmandaCorruption===14 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Ricardo Leyva Muñoz Ramírez aka The Nightstalker</li>
        <li style={{display: props.AmandaCorruption>=15 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>know</i></li>

        <li style={{display: props.AmandaCorruption<15 ? 'list-item' : 'none'}}>Anna Valentina</li>
        <li style={{display: props.AmandaCorruption===15 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Anna Valentina</li>
        <li style={{display: props.AmandaCorruption>=16 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>that,</i></li>

        <li style={{display: props.AmandaCorruption<16 ? 'list-item' : 'none'}}>Tommy Hilfinger</li>
        <li style={{display: props.AmandaCorruption===16 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Tommy Hilfinger</li>
        <li style={{display: props.AmandaCorruption>=17 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>in</i></li>
        </ul>
        <h5>Phenomena</h5>
        <ul>
        <li style={{display: props.AmandaCorruption<17 ? 'list-item' : 'none'}}>Deep water/waves</li>
        <li style={{display: props.AmandaCorruption===17 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Deep water/waves</li>
        <li style={{display: props.AmandaCorruption>=18 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>Disturbia's</i></li>

        <li style={{display: props.AmandaCorruption<18 ? 'list-item' : 'none'}}>Quicksand</li>
        <li style={{display: props.AmandaCorruption===18 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Quicksand</li>
        <li style={{display: props.AmandaCorruption>=19 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>eyes,</i></li>

        <li style={{display: props.AmandaCorruption<19 ? 'list-item' : 'none'}}>San Fernando earthquake (6.6 mag)</li>
        <li style={{display: props.AmandaCorruption===19 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>San Fernando earthquake (6.6 mag)</li>
        <li style={{display: props.AmandaCorruption>=20 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>you're</i></li>
        </ul>
        <h5>Fictional Characters/Items</h5>
        <ul>
        <li style={{display: props.AmandaCorruption<20 ? 'list-item' : 'none'}}>Kaa from Disney’s The Jungle Book</li>
        <li style={{display: props.AmandaCorruption===20 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Kaa from Disney’s The Jungle Book</li>
        <li style={{display: props.AmandaCorruption>=21 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>no</i></li>

        <li style={{display: props.AmandaCorruption<21 ? 'list-item' : 'none'}}>Jason’s machete from Friday the 13th</li>
        <li style={{display: props.AmandaCorruption===21 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>Jason’s machete from Friday the 13th</li>
        <li style={{display: props.AmandaCorruption>=22 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>different</i></li>

        <li style={{display: props.AmandaCorruption<22 ? 'list-item' : 'none'}}>The Xenomorph from Alien</li>
        <li style={{display: props.AmandaCorruption===22 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>The Xenomorph from Alien</li>
        <li style={{display: props.AmandaCorruption>=23 ? 'list-item' : 'none'}}> <i style={{color: 'lightyellow'}}>than</i></li>
        </ul>
        <h5>Stand Users</h5>
        <ul>
        <li style={{display: props.AmandaCorruption<23 ? 'list-item' : 'none'}}>DIO and The World (conditional)</li>
        <li style={{display: props.AmandaCorruption===23 ? 'list-item' : 'none'}}>DIO and The World <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>(conditional)</span></li>
        <li style={{display: props.AmandaCorruption>=24 ? 'list-item' : 'none', color: 'black'}}><b style={{color: 'lightyellow'}}>DIO?"</b> and The World</li>

        <li style={{display: props.AmandaCorruption<24 ? 'list-item' : 'none'}}>Patagonia and Hellbent</li>
        <li style={{display: props.AmandaCorruption>=24 ? 'list-item' : 'none', color: 'black'}}>Patagonia and Hellbent</li>
        
        <li style={{display: props.AmandaCorruption<24 ? 'list-item' : 'none'}}>Brienne Williams and Paperback Writer</li>
        <li style={{display: props.AmandaCorruption>=24 ? 'list-item' : 'none', color: 'black'}}>Brienne Williams and Paperback Writer</li>

        <li style={{display: props.AmandaCorruption<24 ? 'list-item' : 'none'}}>{props.RitaName} and Rockin’ Robin</li>
        <li style={{display: props.AmandaCorruption>=24 ? 'list-item' : 'none', color: 'black'}}>{props.RitaName} and Rockin’ Robin</li>
        </ul>
        <h3>"2nd Generation" Vampirism</h3>

        <p style={{display: props.AmandaCorruption<24 ? 'block' : 'none'}}>Valentine was afflicted with vampirism in 1986 by DIO Brando. Her 
            affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
            Valentine being a “second generation” vampire, one who retains the abilities of blood drinking, extreme healing, super 
            strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, 
            including laser eyes, flesh buds and all variant mind control, reanimation, and freezing powers.</p>
        <p style={{display: props.AmandaCorruption===24 ? 'block' : 'none'}}>Valentine was afflicted with vampirism in 1986 by <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>DIO Brando</span>. Her 
        affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
        Valentine being a “second generation” vampire, one who retains the abilities of blood drinking, extreme healing, super 
        strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, 
        including laser eyes, flesh buds and all variant mind control, reanimation, and freezing powers.</p>
        <p style={{display: props.AmandaCorruption===25 ? 'block' : 'none'}}>Valentine was afflicted with vampirism in 1986 by <b class='enabled-link-b'>You read the report of his death a dozen times. Memorized it.</b> Her 
        affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
        Valentine being a “second generation” vampire, one who retains the abilities of blood drinking, <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>extreme healing,</span> super 
        strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, 
        including laser eyes, flesh buds and all variant mind control, reanimation, and freezing powers.</p>
        <p style={{display: props.AmandaCorruption===26 ? 'block' : 'none'}}>Valentine was afflicted with vampirism in 1986 by <b class='enabled-link-b'>You read the report of his death a dozen times. Memorized it.</b> Her 
        affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
        Valentine being a “second generation” vampire, one who retains the abilities of blood drinking, <b class='enabled-link-b'>You used that knowledge to break her. Snapped her in half with such force her skin caught flame.</b> super 
        strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, including <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>laser eyes,</span> flesh buds and all variant mind control, 
            reanimation, and freezing powers.</p>

        <p style={{display: props.AmandaCorruption===27 ? 'block' : 'none'}}>Valentine was afflicted with vampirism in 1986 by <b class='enabled-link-b'>You read the report of his death a dozen times. Memorized it.</b> Her 
        affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
        Valentine being a “second generation” vampire, one who retains the abilities of blood drinking, <b class='enabled-link-b'>You used that knowledge to break her. Snapped her in half with such force her skin caught flame.</b> super 
        strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, including <b class='enabled-link-b'>She stood by you.</b> <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>flesh buds and all variant mind control,</span> reanimation, and freezing powers.</p>
        
        <p style={{display: props.AmandaCorruption===28 ? 'block' : 'none'}}>Valentine was afflicted with vampirism in 1986 by <b class='enabled-link-b'>You read the report of his death a dozen times. Memorized it.</b> Her 
        affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
        Valentine being a “second generation” vampire, one who retains the abilities of blood drinking, <b class='enabled-link-b'>You used that knowledge to break her. Snapped her in half with such force her skin caught flame.</b> super 
        strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, including <b class='enabled-link-b'>She stood by you. When you deserved it the least.</b> <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>reanimation,</span> and freezing powers.</p>

        <p style={{display: props.AmandaCorruption===29 ? 'block' : 'none'}}>Valentine was afflicted with vampirism in 1986 by <b class='enabled-link-b'>You read the report of his death a dozen times. Memorized it.</b> Her 
        affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
        Valentine being a “second generation” vampire, one who retains the abilities of blood drinking, <b class='enabled-link-b'>You used that knowledge to break her. Snapped her in half with such force her skin caught flame.</b> super 
        strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, including <b class='enabled-link-b'>She stood by you. When you deserved it the least. Twice.</b> and <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>freezing powers.</span></p>

        <p style={{display: props.AmandaCorruption>=30 ? 'block' : 'none'}}>{props.AmandaName[2]} was afflicted with vampirism in 1986 by <b style={{color: "red"}}>You read the report of his death a dozen times. Memorized it.</b> Her 
        affliction was the result of a combination of exsanguination and blood ingestion, not the vampire mask. This process leads to 
        {props.AmandaName[2]} being a “second generation” vampire, one who retains the abilities of blood drinking, <b style={{color: "red"}}>You used that knowledge to break her. Snapped her in half with such force her skin caught flame.</b> super 
        strength, enhanced senses, and aura but to a lesser degree than her sire. She also lacks other reported mask vampire abilities, including <b style={{color: "red"}}>She stood by you. When you deserved it the least. Twice.</b> and <b style={{color: "red"}}> you BURNED HER ALIVE</b></p>

    <h2>Known Relationships</h2>
    <ul>
        <li>Martin III Valentina: father, estranged. Open to reinitiating contact?
        </li>
        <li>Anna Valentina: mother, estranged. Allegedly dislikes her.
        </li>
        <li>{props.SallyName}: Coworker, close friend. Goes with her to bars, concerts on the weekends. Watches her dogs on night holidays.
        </li>
        <li>{props.MorganName}: Coworker, close friend. Lived together in late summer of 1993. Heavily protective.
        </li>
        <li>{props.RitaName}: Coworker, close friend. Once was a student-teacher relationship, now is more equal footing. Often do chores together.
        </li>
        <li>Patagonia: No longer antagonistic. Polite with each other, especially around {props.MorganName[0]}. Appears to be a tentative mutual respect.</li>
        <li>Victoria Secret: No longer antagonistic. Have met up together in private to discuss the aftermath of Mask Den. Doesn't seem to retain
            romantic affections since parting.
        </li>
        <li style={{display: props.AmandaCorruption<30 ? 'list-item' : 'none'}}></li>
        <li style={{display: props.AmandaCorruption===30 ? 'list-item' : 'none'}}onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>_____ _________ ______</li>
        <li style={{display: props.AmandaCorruption===31 ? 'list-item' : 'none'}}><b class='enabled-link-b'>Does it hurt more or less to not see <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>your name</span> on this list?</b></li>
        <li style={{display: props.AmandaCorruption>=32 ? 'list-item' : 'none'}}><b class='enabled-link-b'>Does it hurt more or less to not see <span style={{color: 'red', textDecoration: 'bold', fontSize: '30px'}}>YOU DON'T HAVE ONE</span> on this list?</b></li>
        <li style={{display: props.AmandaCorruption>=32 ? 'list-item' : 'none', color: '#231516'}}><b style={{color: '#131516'}}>Brienne Williams: Coworker, close friend. Worked together for four years. <i>I wish it could've been more.</i></b></li>
    </ul>
    <div style={{display: props.AmandaCorruption<32 ? 'block' : 'none'}}>
    <h2>Psychological Profile</h2>
    <p>{props.AmandaName[2]} is resilient but characteristically self destructive. She often chooses 
        the “easiest” path, whether that be running away from DIO or tanking Stand attacks head on and relying on vampiric healing. She responds 
        exceptionally well to praise. Over time, she has evolved into a deeply protective person, clinging to the friends she made at Informer Co 
        as the pillar of support in her life. Informer Co keeps her grounded and mentally strong.
    </p>
    </div>
    <div style={{display: props.AmandaCorruption===32 ? 'block' : 'none'}}>
    <h2>Psychological Profile <span onClick={()=>{
                corrupt(1);
            }} class='interactive enabled-link-a no-select-text'>(update)</span></h2>
    <p>{props.AmandaName[2]} is resilient but characteristically self destructive. She often chooses 
        the “easiest” path, whether that be running away from DIO or tanking Stand attacks head on and relying on vampiric healing. She responds 
        exceptionally well to praise. Over time, she has evolved into a deeply protective person, clinging to the friends she made at Informer Co 
        as the pillar of support in her life. Informer Co keeps her grounded and mentally strong.
    </p>
    </div>
    <div style={{display: props.AmandaCorruption>=33 ? 'block' : 'none'}}>
    <h2>Psychological Profile</h2>
    <p><b class='enabled-link-b'>She's dead. No psychology to it.</b></p>
    </div>
    <h2>Author's Notes</h2>
    <p style={{display: props.AmandaCorruption<33 ? 'block' : 'none'}}>Valentine is loyal, reliable, and resilient. She has grown so much in the five years that I’ve known her. While our relationship began purely 
    professionally, with a good bit of hesitation on my part due to her vampiric nature, I grew to trust her most deeply of all my employees. She is 
    my confidant, my sword, my first real friend.</p>
    <p style={{display: props.AmandaCorruption===33 ? 'block' : 'none'}} onClick={()=>{
                corrupt(1);
                props.dispatch({
                    type: 'visitAmanda',
                    value: 1,
                });
            }} onMouseOver={()=>{
                hoverOn();
            }} onMouseLeave={()=>{
                hoverOff();
            }}
            class='interactive enabled-link-a no-select-text'>Valentine is loyal, reliable, and resilient. She has grown so much in the five years that I’ve known her. While our relationship began purely 
    professionally, with a good bit of hesitation on my part due to her vampiric nature, I grew to trust her most deeply of all my employees. She is 
    my confidant, my sword, my first real friend.</p>
    <p style={{display: props.AmandaCorruption>=34 ? 'block' : 'none'}}><b class='enabled-link-b'>N/A</b></p>
    <p style={{display: props.AmandaHover===1 && counter <=3 ? 'block' : 'none', color: 'rgb(51, 125, 255)', textAlign: 'right'}}><b>Wait!</b></p>
    <p style={{display: props.AmandaHover===1 && counter >3 && counter <= 5 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>Go on, do it.</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 5 && counter <= 8 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>You've already altered the rest of the document.</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 8 && counter <= 11 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>Why is this any different?</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 11 && counter <= 14 ? 'block' : 'none', color: 'rgb(51, 125, 255)', textAlign: 'right'}}><b>This... this is permanent.</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 14 && counter <= 17 ? 'block' : 'none', color: 'rgb(51, 125, 255)', textAlign: 'right'}}><b>The file's almost completely corrupted. If I do this...</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 17 && counter <= 22 ? 'block' : 'none', color: 'red', textAlign: 'right'}}><b>She'll be gone.</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 22 && counter <= 26 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>And what is that, if not a reflection of the truth?</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 26 && counter <= 29 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>That's all you've ever done.</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 29 && counter <= 33 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>You sit at your desk editing your documents. Making sure they reflect reality.</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 33 && counter <= 36 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>Come on now, Agent.</b></p>
    <p style={{display: props.AmandaHover===1 && counter > 36 && counter <= 1000 ? 'block' : 'none', color: '#909098', textAlign: 'right'}}><b>Do your duty.</b></p>
    <p>
        <Link style={{color: 'red'}} to="/">Go Home</Link>
    </p>
    </div></>
    );
    
  };
  
  export default connect(function mapStateToProps(state){
    return {
        AmandaCorruption: state.AmandaCorruption,
        AmandaHover: state.AmandaHover,
        AmandaVisited: state.AmandaVisited,
        MorganName: state.MorganName,
        AmandaName: state.AmandaName,
        RitaName: state.RitaName,
        SallyName: state.SallyName,
    };
  })(Amanda);
  