import React from 'react'
import ToDoItem from "./todoitem";
import propTypes from "prop-types"
const style={
    ul:{
        listStyle:'none',
        margin:0,
        padding:0,

    }
}

 function ToDoList(props){
    return(
    <ul style={style.ul}>
        {props.todos.map((todo,index)=>{
            return<ToDoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
        })}
    </ul>
    )
}

ToDoList.propTypes={
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onToggle: propTypes.func.isRequired
}

export default ToDoList