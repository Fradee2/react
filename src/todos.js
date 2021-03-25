import React from "react";

export default function ToDo(props){

    return(
        <ul>
            {props.todo.map((todo)=>{
                return(

        <li className="todo_item">
            <span >
        <input checked={todo.check} className="checkbox"   type="checkbox" onChange={()=>checkToDo(todo.check)}/>
                &nbsp;
                {todo.value}
        </span>


        </li>)})}
        </ul>
    )
}