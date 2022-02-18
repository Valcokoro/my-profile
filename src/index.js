import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import Middle from './Middle';
import './index.css';
import Projects from './Projects';



//const App = () =>{
    class App extends React.Component{
    state={first:"Welcome on Board"}
    
    render() {
    return ( 
    <div>
    <Intro caption={caption}/>
    <Middle/>
    <Projects />
    </div>
    );
    
     
   
    
    
    
}
}
function caption (){
    var i = 0;
    var txt = "Bring Your Ideas to Life"
    var speed = 50;
 
    if(i < txt.length){
       document.querySelector(".Caption").innerText += txt.charAt(i);
       i++;
       setTimeout(caption, speed);
    }
 }


ReactDOM.render(<App />, document.querySelector('#root'));