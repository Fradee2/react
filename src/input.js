import React from "react";



export default function Add_input(){
//
//     function submitHandler(e){
//         if (e.trim){
//             AddToDo(value)
//         }
//     }
    return(
        <form className="form" >
            <button className="add_task" type="submit">▼</button>
            <input placeholder="What need to be done?" className="input" />
        </form>
    )
}