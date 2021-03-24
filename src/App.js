import React from 'react'
import ToDoList from "./todolist";
import ToDoItem from "./todoitem";


function App() {
    const [todos,setTodos]=React.useState(  [      {id:1,
            value:'dg',
            check:true},
        {id:2,
            value:'ddfg',
            check:false},
        {id:3,
            value:'dsdfsdfg',
            check:false},
        {id:4,
            value:'dsdfasg',
            check:false}])

    function toggleTodo(id){
        setTodos(todos.map(todo=>{
          if (todo.id===id){
              todo.check = !todo.check;
          }
          return todo
        }))
    }

  return (
    <div className="wrapper">
      <h1>todos</h1>
        <ToDoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
