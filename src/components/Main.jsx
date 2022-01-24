import React from "react";
import Automaton from "./MainLogic";
import "./Main.css";
import "./TogleButton.css"
import DisplayRow from "./DisplayRow";
import Options from "./Options";
import play from './play-button.svg';
import stop from './stop-button.svg';

class Main extends React.Component {
  constructor() {
    super();
    this.automat = new Automaton(
      [...new Array(50).fill(0), 1, ...new Array(50).fill(0)],
      50
    );
    this.state = { 
    result: this.automat.result, 
    option: this.automat.option,
    periodic: this.automat.periodic,
    rule: 50
    };
  }

  iterate() {
    this.automat.newIteration();
    this.setState({
      result: this.automat.result,
    });
  }

  start = () => {
    if (!this.timerID) {
      this.timerID = setInterval(() => this.iterate(), 100);
    }
  }

  stop = () => {
    clearInterval(this.timerID);
    this.timerID = false;
  }

  handleChangeOption = (index) => {
    this.automat.changeOption(index);
    this.setState({ option: this.automat.option });
    let number = parseInt(this.state.option.join("").toString(), 2)
    this.setState({rule: number})
  };

  changePeriodic = (event) =>{
    this.automat.periodic = event.target.checked
  }

  change = (event) =>{
    if (event.target.value <= 255 && event.target.value && 0 <= event.target.value){
      this.setState({rule: event.target.value})
      let rule = parseInt(event.target.value)
      let binaryRule = rule.toString(2)
      let nulls = 8-binaryRule.length
      let binaryRuleArray = binaryRule.split("").map(Number)
      let array = [...new Array(nulls).fill(0), ...binaryRuleArray]
      this.automat.option = array
      this.setState({ option: this.automat.option });
  }
  }

  render() {
    return (
      <>
      <nav>
      
      <h1> Celullar automaton </h1>
      
      <div className="nav-grid">
        
        <button className='main-box nav-grid-item' onClick={ () => this.start() }>
        <img className='icon' src={play} alt="play" />
        <label>Start</label>
        </button>
        
        <button className='main-box nav-grid-item' onClick={() => this.stop() }>
        <img className='icon' src={stop} alt="play" />
        <label >Stop</label>
        </button>
   
        

          <label className='nav-grid-item'>Periodic </label>

          <label className="toggle nav-grid-item">
            <input name="periodic" onChange={this.changePeriodic } 
            className="toggle__input"  
            type="checkbox" id="myToggle" defaultChecked/>
          <div className="toggle__fill"></div>
          </label>  


        <label className="nav-grid-item">Rule </label>

        <input value={this.state.rule}  
        onChange={ this.change } 
        className="rule-input nav-grid-item" type="number"/>

      </div>
      </nav>


      <div className="main">
        
        <div className="display">
          {this.state.result.map((row) => { 
            return (
              <DisplayRow key={row.ID} arg={row.row}></DisplayRow> 
              );
          })}
        </div>

        <Options
          rule={this.automat.rule}
          option={this.state.option}
          changeOption={this.handleChangeOption}
        ></Options> 

      </div>

      </>
    );
  }
}

export default Main;
