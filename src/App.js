import React from 'react'
import ToDoList from "./todolist";
import Context from "./context"
import AddToDo from "./addToDo";
import footer from "./footer";

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
              <h1>todos</h1>
              <AddToDo onCreate={addToDo}/>
              <ToDoList todos={todos} onToggle={toggleTodo}/>

                <footer/>
          </div>
      </Context.Provider>
  );
}

export default App;
