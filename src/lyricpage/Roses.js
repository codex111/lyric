import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Roses =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Roses Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Roses, I walked in the corner with the body screaming dolo
Never sold a bag but look like Pablo in a photo
This gon' make 'em feel the way like Tony killed Manolo
You already know though, you already know though
I walk in the corner with the money, on my finger
She might get it popping, I might wife her for the winter
I already know, already know, nigga roses
All I need is roses
Turn up baby, turn up, when I turn it on
You know how I get too lit when I turn it on
Can't handle my behavior when I turn it on
Too fast, never ask, if the life don't last
Done been through it all
Fuck with a nigga raw, this who you wanna be
And I know you won't tell nobody nothing
And I know you won't tell nobody no
Roses
I might pull up flexing on these niggas like aerobics
I might tell your girl you cute but balling
That shit gorgeous
Standing on the table, Rosé, Rosé, fuck the waters
You know who the god is
Turn up baby, turn up, when I turn it on
You know how I get too lit when I turn it on
Can't handle my behavior when I turn it on
Too fast, never ask, the life don't last
Done been through it all
Fuck with a nigga raw
Show you what I mean
I might bring them Brooklyn niggas out, oh lord it's overs
I might bring them strippers out and tell 'em do it pole-less
You already know, already know, nigga roses
Kill 'em, make it
Turn up baby, turn up, when I turn it on
You know how I get too lit when I turn it on
Can't handle my behavior when I turn it on
Too fast, never ask, if the life don't last
Done been through it all
Fuck with a nigga raw, this who you wanna be
And I know you won't tell nobody nothing
And I know you won't tell nobody no
Roses
Roses`}
         </pre>
         </div>
        </Astranauts>
        </>
    );
}

const Astranauts = styled.div`
widtH:80%;
margin:auto;

.astranaut_heading{
    text-align:center;
    margin:30px 0 20px 0;
}


pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: justify;
    justify-content:center;
    display:flex;
    font-size:18px;
  
  }

.prediv{

}

`

export default Roses;