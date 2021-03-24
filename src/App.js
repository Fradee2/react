import React from 'react'
import ToDoList from "./todolist";
import Context from "./context"
import AddToDo from "./addToDo";

function App() {
    const [todos,setTodos]=React.useState(  [      ])

    function toggleTodo(id){
        setTodos(todos.map(todo=>{
            if (todo.id===id){
                todo.check = !todo.check;
            }
            return todo
        }))
    }

    function Filter(condition){
        (todos.filter(todo=>{
            if (todo.check===false){
                return 'true'
            }
        }))
    }

    function Filter_all(){

    }

    function removeToDo(){
        setTodos(todos.filter(todo=>{
            if (todo.check===false){
                return 'true'
            }
        }))
    }

    function addToDo(value){
        setTodos(todos.concat([{
            value,id:Date.now(),
            check: false
        }]))
    }

    function counter(){
        return todos.length
    }

  return (
      <Context.Provider value={{removeToDo}}>
          <div className="wrapper">
              <h1 className="title">todos</h1>
              <AddToDo onCreate={addToDo}/>
              <ToDoList todos={todos} onToggle={toggleTodo}/>
              <div className="active_button">
                  <p className="counter">{counter()} item left</p>
                  <div className="filter_button">
                  <button onClick={Filter_all()} className="filter_active button">All</button>
                  <button onClick={Filter('false')} className=" button">Active</button>
                  <button onClick={Filter('true')} className=" button">Completed</button>
                  </div>
                  <button onClick={()=>removeToDo()} className="clear_completed button">Clear completed</button>
              </div>

          </div>
      </Context.Provider>

  );
}

export default App;
