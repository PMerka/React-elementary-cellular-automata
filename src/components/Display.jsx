import React from 'react';
import Automaton from './MainLogic'
import './Display.css'
import DisplayRow from './DisplayRow';
import Options from './Options'

class Display extends React.Component {
    constructor(){
        super()

        this.automat = new Automaton([ ... new Array(40).fill(0), 1, ... new Array(40).fill(0) ])
        this.state = {result: this.automat.result,
        option: this.automat.option};
      }
      
      iterate() {
        this.automat.newIteration()
        this.setState({
          result: this.automat.result
        });
      }
      
      start(){
        if(!this.timerID){
        this.timerID = setInterval(
          () => this.iterate(), 100);
        }  
      }
      
      stop(){
        clearInterval(this.timerID);
        this.timerID = false
      }

      handleChangeOption = (index) => {
        this.automat.changeOption(index)
        this.setState({option: this.automat.option})
      }
      
      render(){
        
        return(
          <div> 
          <button onClick={ () => this.start() }>Start</button>
          <button onClick={ () => this.stop() }>Stop</button>

          <Options rule={this.automat.rule} option={this.state.option} changeOption={this.handleChangeOption }></Options>
          <div>
            {this.state.result.map((row) => { 
              return( 
                <DisplayRow key={row.ID} arg={row.row}></DisplayRow>
              )})}
          </div>
          </div>
        );
      }
}
 
export default Display;