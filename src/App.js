import React from 'react'
import Add_input from "./input";
import Controls from "./controls";
import ToDo from "./todos";

const checkToDo=(id)=>{
    if (this.state.id.id==id){
        
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state=[
            {id:1,value:'Hello',check:false},
            {id:2,value:'sdfsdf',check: true}
            ]
    }



render() {


    return (

      <div className="wrapper">
        <h1 className="title">Todos</h1>
          <Add_input/>
          <ToDo todo={this.state} value={this.state.value} check={this.state.check} checkToDo={checkToDo} />
          <Controls/>
      </div>
  );}
}

export default App;
