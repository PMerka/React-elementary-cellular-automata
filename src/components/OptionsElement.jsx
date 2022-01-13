import React from 'react';
import "./OptionsElement.css"

function OptElement(props) {
    let id = 0;
    return ( 
        <div className='main-box'>
            <div className="row">
                {props.rule.map((element) => {
                    id += 1
                        return(
                            <div key={id} className={`big-square ${element ? "blue" : "or"}`}> 
                            </div>
                        )})}
            </div>
            <div className="row center">
                
                            <div key={id} className={`big-square ${props.option ? "blue" : "or"}`}> 
                            </div>

            </div>
        </div>
     );
}

export default OptElement;