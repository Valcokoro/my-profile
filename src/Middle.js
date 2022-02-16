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
    <table className='react'>
    <tr>
    <th id='react1'> React.js </th> 
    <th id='react2'> </th>
    <th id='react3'> 80%</th>
    </tr>
    </table>

    <table className='javascript'>
    <tr>
    <th id='js1'> JavaScript </th> 
    <th id='js2'> </th>
    <th id='js3'> 85%</th>
    </tr>
    </table>

    <table className='html'>
    <tr>
    <th id='html1'> HTML </th> 
    <th id='html2'> </th>
    <th id='html3'> 90%</th>
    </tr>
    </table>

    <table className='css'>
    <tr>
    <th id='css1'> CSS </th> 
    <th id='css2'> </th>
    <th id='css3'> 90%</th>
    </tr>
    </table>

    <table className='python'>
    <tr>
    <th id='py1'> Python </th> 
    <th id='py2'> </th>
    <th id='py3'> 55%</th>
    </tr>
    </table>


    <table className='django'>
    <tr>
    <th id='dj1'> Django </th> 
    <th id='dj2'> </th>
    <th id='dj3'> 55%</th>
    </tr>
    </table>
    

   </div>
</section>
)

export default Middle;