import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Cradles =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Cradles Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`I live inside my own world of make-believe
Kids screaming in their cradles, profanities
I see the world through eyes covered in ink and bleach
Cross out the ones who heard my cries and watched me weep
I love everything
Fire's spreading all around my room
My world's so bright
It's hard to breathe but that's alright
Hush
Shh
Tape my eyes open to force reality (oh no, no)
Why can't you just let me eat my weight in glee?
I live inside my own world of make-believe
Kids screaming in their cradles, profanities
Some days I feel skinnier than all the other days
And some days I can't tell if my body belongs to me
I love everything
Fire's spreading all around my room
My world's so bright
It's hard to breathe but that's alright
Hush
Shh
I wanna taste your content
Hold your breath and feel the tension
Devils hide behind redemption
Honesty is a one-way gate to hell
I wanna taste consumption
Breathe faster to waste oxygen
Hear the children sing aloud
It's music 'til the wick burns out
Hush
Just wanna be care free lately, yeah
Just kicking up daisies
Got one too many quarters in my pockets
Count 'em like the four-leaf clovers in my locket
Untied laces, yeah
Just tripping on daydreams
Got dirty little lullabies playing on repeat
Might as well just rot around the nursery and count sheep`}
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

export default Cradles;