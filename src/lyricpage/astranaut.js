import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Astranaut =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Astranaut In The Ocean Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Astro-naut
What you know about rollin' down in the deep?
When your brain goes numb, you can call that mental freeze
When these people talk too much, put that shit in slow motion, yeah
I feel like an astronaut in the ocean, ayy
What you know about rollin' down in the deep?
When your brain goes numb, you can call that mental freeze
When these people talk too much, put that shit in slow motion, yeah
I feel like an astronaut in the ocean
She say that I'm cool (damn straight)
I'm like "yeah, that's true" (that's true)
I believe in G-O-D (ayy)
Don't believe in T-H-O-T
She keep playing me dumb (play me)
I'ma play her for fun (uh-huh)
Y'all don't really know my mental
Lemme give you the picture like stencil
Falling out, in a drought
No flow, rain wasn't pouring down (pouring down)
See, that pain was all around
See, my mode was kinda lounged
Didn't know which-which way to turn
Flow was cool but I still felt burnt
Energy up, you can feel my surge
I'ma kill everything like this purge (ayy)
Let's just get this straight for a second, I'ma work
Even if I don't get paid for progression, I'ma get it (get it)
Everything that I do is electric
I'ma keep it in a motion, keep it moving like kinetic, ayy (yeah, yeah, yeah, yeah)
Put this shit in a frame, better know I don't blame
Everything that I say, man I seen you deflate
Let me elevate, this ain't a prank
Have you walkin' on a plank, la-la-la-la-la, like
Both hands together, God, let me pray (now let me pray)
Uh, I've been going right, right around, call that relay (Masked Wolf)
Pass the baton, back and I'm on
Swimming in the pool, Kendrick Lamar, uh
Want a piece of this, a piece of mine, my peace a sign
Can you please read between the lines?
My rhyme's inclined to break your spine
They say that I'm so fine
You could never match my grind
Please do not, not waste my time
What you know about rollin' down in the deep?
When your brain goes numb, you can call that mental freeze
When these people talk too much, put that shit in slow motion, yeah
I feel like an astronaut in the ocean, ayy
What you know about rollin' down in the deep?
When your brain goes numb, you can call that mental freeze
When these people talk too much, put that shit in slow motion, yeah
I feel like an astronaut in the ocean`}
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

export default Astranaut;