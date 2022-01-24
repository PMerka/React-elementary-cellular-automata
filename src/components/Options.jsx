import React from 'react';
import OptElement from './OptionsElement';
import play from './play-button.svg';
import stop from './stop-button.svg';

function Option(props) {
    let id=0;
    return ( 
        <div className='optin-frame'>
            <h2>Options</h2>

            <div className="main-optin-box">{
            props.rule.map((element, index) =>  {id+=1; 
            return( 
            <div className="main-box" key={id} onClick={() => props.changeOption(index)}>    
                
                <OptElement key={id} rule={element.split("").map(Number)} option={props.option[index]}/>
                <span>{props.option[index]}</span>
            </div>
            )})  
            }</div>
        </div>
    );
}

export default Option;
