import React from 'react'
import Add_input from "./input";
import Controls from "./controls";

function App() {

  return (
      <div className="wrapper">
        <h1 className="title">Todos</h1>
          <Add_input/>
          <Controls/>
      </div>
  );
}

export default App;
