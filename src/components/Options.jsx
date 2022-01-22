import React from 'react';
import OptElement from './OptionsElement';
import play from './play-button.svg';
import stop from './stop-button.svg';

function Option(props) {
    let id=0;
    return ( 
        <nav>
            
        <button className='main-box' onClick={ () => props.start() }>
        <img className='icon' src={play} alt="play" />
        <br />
        Start
        </button>
        
        <button className='main-box' onClick={() => props.stop() }>
        <img className='icon' src={stop} alt="play" />
        <br />
        Stop
        </button>

        <div className="main-optin-box">{
        props.rule.map((element, index) =>  {id+=1; 
        return( 
        <div className="main-box" key={id} onClick={() => props.changeOption(index)}>    
            
            <OptElement key={id} rule={element.split("").map(Number)} option={props.option[index]}/>
            {element} &#10140; {props.option[index]}
        </div>
        )})  
        }</div>
        </nav>
    );
}

export default Option;
