import React from "react";
import Automaton from "./MainLogic";
import "./Main.css";
import DisplayRow from "./DisplayRow";
import Options from "./Options";

class Main extends React.Component {
  constructor() {
    super();
    this.automat = new Automaton(
      [...new Array(50).fill(0), 1, ...new Array(50).fill(0)],
      50
    );
    this.state = { result: this.automat.result, option: this.automat.option, delay: 0 };
  }

  iterate() {
    var startTime = performance.now()
    this.automat.newIteration();
    var endTime = performance.now()
    console.log(`The calculation take ${endTime - startTime} milliseconds`)
    var startTimeR = performance.now()
    this.setState({
      result: this.automat.result,
    });
    var endTimeR = performance.now()
    console.log(`setting up the react state ${endTimeR - startTimeR} milliseconds`)
    var delta = endTimeR - startTimeR
    this.setState({ delay: delta })
  }

  start = () => {
    console.log('yes')
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
  };

  render() {
    return (
      <>

      <h1> Celullar automaton </h1>
      <h2>Delay {this.state.delay} </h2>

      <div className="main-window">
        <Options
          rule={this.automat.rule}
          option={this.state.option}
          changeOption={this.handleChangeOption}
          start={this.start}
          stop={this.stop}
        ></Options> 


        <div className="display">
          {this.state.result.map((row) => { 
            return (
              <DisplayRow key={row.ID} arg={row.row}></DisplayRow> 
              );
          })}
        </div>
      </div>

      </>
    );
  }
}

export default Main;
