import React,{useContext} from "react";
import propTypes from 'prop-types';
import Context from "./context";



function ToDoItem({todo,index, onChange}){
    const {removeToDo}=useContext(Context)
    const classes=[]
    if (todo.check){
        classes.push('done')
    }

    const style= {
        li:{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'.5rem 1 rem',
            border:'1px solid lightgrey',
            borderRadius:'4px',
            marginBottom:'0.5rem',
            marrginTop:'20px'
        },
        input:{
            marginRight:'1rem'
        }
    }


    return(
        <li style={style.li}>
            <span className={classes.join('')}>
        <input checked={todo.check} styles={style.input} type="checkbox" onChange={()=>onChange(todo.id)}/>

    <strong>
        {index+1}
    </strong>
                &nbsp;
        {todo.value}
        </span>
        <button onClick={()=>removeToDo(todo.id)} className="rm" >
            &times;
        </button>

    </li>
    )
}
ToDoItem.propTypes={
    todos:propTypes.arrayOf(propTypes.object).isRequired,
    index: propTypes.number,
    onChange:propTypes.func.isRequired
}


export default ToDoItem