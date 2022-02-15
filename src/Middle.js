import React from 'react';
import mypics from '../src/mypics.jpeg';
import responsive from '../src/responsive.svg';
import dynamic from '../src/dynamic.svg';



const Middle = () =>(
<section className='second'>
    <div className='pics'>
        <img src={mypics} id='mypics' Alt='mypics'/>
    </div>
    <div className='leftpane'>
        <h1 id='stack'>Frontend Software Engineer</h1>
        <aside>
        <img src={responsive} id='response' Alt='response' Align="left"/>
        <p id='desc1'><b id="bold1">Responsive:</b> My layouts will work on any device, big or small.</p>
        <img src={dynamic} id='dynamic' Alt='dynamic' Align="left"/>
        <p id='desc2'><b id="bold2">Dynamic:</b> Websites don't have to be static,
         I love making pages come alive..</p>
        </aside>
    </div>

   <div className='rightpane'>
    <h4>React.js </h4> 
    <p></p>
    <h4>80%</h4>
    

   </div>
</section>
)

export default Middle;