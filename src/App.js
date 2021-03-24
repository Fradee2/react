import React from 'react'
import ToDoList from "./todolist";
import Context from "./context"
import AddToDo from "./addToDo";

function App() {
    const [todos,setTodos]=React.useState(  [      ])

    function todoslength(){
        return(todos.length)
    }

    function toggleTodo(id){
        setTodos(todos.map(todo=>{
          if (todo.id===id){
              todo.check = !todo.check;
          }
          return todo
        }))
    }

    function removeToDo(id){
        setTodos(todos.filter(todo=>todo.id!==id))
    }

    function addToDo(value){
        setTodos(todos.concat([{
            value,id:Date.now(),
            check: false
        }]))
    }

  return (
      <Context.Provider value={{removeToDo}}>
          <div className="wrapper">
              <h1 className="title">todos</h1>
              <AddToDo onCreate={addToDo}/>
              <ToDoList todos={todos} onToggle={toggleTodo}/>
              <div className="active_button">
                  <p className="counter"></p>
                  <div className="filter_button">
                  <button class="filter_active button">All</button>
                  <button className=" button">Active</button>
                  <button className=" button">Completed</button>
                  </div>
                  <button className="clear_completed button">Clear completed</button>
              </div>

          </div>
      </Context.Provider>
  );
}

export default App;
