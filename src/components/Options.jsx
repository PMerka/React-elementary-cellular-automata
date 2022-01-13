import React from 'react';
import OptElement from './OptionsElement';

function Option(props) {
    let id=0;
    return ( 
        <div className="row">{
        props.rule.map((element, index) =>  {id+=1; 
        return( 
        <div key={id} onClick={() => props.changeOption(index)}>    
            {element} &#10140; {props.option[index]}
            <OptElement key={id} rule={element.split("").map(Number)} option={props.option[index]}/>
            
        </div>
        )})  
        }</div>
    );
}

export default Option;
