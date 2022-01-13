import React from 'react';

function DisplayRow(props) {
    let id = 0;
    return ( 
        <div className="box">
                              {props.arg.map((element) => {
                                id += 1
                  return(
                    <div key={id} className={`square ${element ? "blue" : "or"}`}> 
                    </div>
                  )})}
        </div>
     );
}

export default DisplayRow;