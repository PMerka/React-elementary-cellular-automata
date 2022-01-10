import React from 'react';
import Automaton from './MainLogic'
import './Display.css'

class Display extends React.Component {
    constructor(){
        super()
        this.automat = new Automaton
        this.state = {result: this.automat.result};
      }
      
      iterate() {
        this.automat.newIteration()
        this.setState({
          result: this.automat.result
        });
      }
      
      start(){
        this.timerID = setInterval(
          () => this.iterate(), 100);
      }
      
      stop(){
        clearInterval(this.timerID);
      }
      
      render(){
        
        return(
          <div> 
          <button onClick={ () => this.start() }>Start</button>
          <button onClick={ () => this.stop() }>Stop</button>
            {this.state.result.map((row) => { return(
                <div className="box">
                  {row.map((element) => {
                  return(
                    <div className={`squer ${element ? "blue" : "or"}`}> 
                    </div>
                  )})}
                </div>
              ) 
              } 
              )}
          </div>
        );
      }
}
 
export default Display;