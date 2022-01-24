class Automaton {
    constructor(initArray = [0, 0, 0, 0, 1, 0, 0, 0, 0], height = 40){
    this.activeArray = initArray
    this.rule = ["111", "110", "101", "100", "011", "010", "001", "000"];
    this.option = [0, 0, 0, 1, 0 , 0, 1, 0];
    this.height = height
    this.activeID = 0
    this.result = [{ID: this.activeID, row: this.activeArray}]
    this.periodic = true
    }

    changeOption = (index) => {
      if (this.option[index] === 0){
        this.option[index] = 1
      }
      else{
        this.option[index] = 0
      }
    }

    newID(){
      if(this.activeID<this.height){
        this.activeID+=1
      }
      else{
        this.activeID = 0
      }
    }
    
    newIteration(){
      let newRow = []
      if(this.periodic){
        const start = this.activeArray[this.activeArray.length -1]
        const end = this.activeArray[0]
        this.activeArray = [start, ...this.activeArray, end]
      }
      else{
        this.activeArray = [0, ...this.activeArray, 0]
      }
      
      for(let i=1; i<(this.activeArray.length - 1); i++ ){
        //Get the rule code
        let pattern = this.activeArray[i-1].toString() + this.activeArray[i].toString() + this.activeArray[i+1].toString()
        let ruleNum = this.rule.indexOf( pattern )
        newRow.push(this.option[ruleNum])
      }

      this.newID()
      this.result.push({ID: this.activeID, row: newRow})
      if (this.result.length > this.height){
        this.result.shift()
      }
      
      
      this.activeArray = newRow
    }  
  }

export default Automaton