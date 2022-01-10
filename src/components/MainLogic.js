class Automaton {
    constructor(initArray = [0, 0, 0, 0, 1, 0, 0, 0, 0]){
    this.activeArray = initArray
    this.rule = ["111", "110", "101", "100", "011", "010", "001", "000"];
    this.option = [0, 0, 0, 1, 0 , 1, 1, 0];
    this.result = [initArray]
    }
    
    newIteration(){
      let newRow = [0]
      for(let i=1; i<(this.activeArray.length - 1); i++ ){
        //Get the rule code
        let pattern = this.activeArray[i-1].toString() + this.activeArray[i].toString() + this.activeArray[i+1].toString()
        let ruleNum = this.rule.indexOf( pattern )
        newRow.push(this.option[ruleNum])
      }
      newRow.push(0)
      this.result.push(newRow)
      if (this.result.length > 80){
        this.result.shift()
      }
      
      this.activeArray = newRow
      
    }  
  }

export default Automaton