import React from 'react';
import arrow from '../src/arrow.svg'


const Intro = (props) =>{

var i = 0;
var txt = "Bring Your Ideas to Life"
var speed = 100;
function caption (){

   if(i < txt.length){
      document.querySelector(".Caption").innerHTML += txt.charAt(i);
      i++;
      setTimeout(caption, speed);
   }
}
   
   return (
 <section onLoad={caption} className='first'>
    <div className='ui container self'>
    <div className='Name'>Valentine Chukwuemeka Okoro</div>
    <div className='Location'></div>
    <div className='Caption'> </div>
    <div className='Welcome'>Welcome to my web page </div>
    <a href><img src={arrow} id='arrow' Alt='arrow' /></a>
    </div>
    
 </section>
)};



export default Intro;
