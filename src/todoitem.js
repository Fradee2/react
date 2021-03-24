import React from "react";
import propTypes from 'prop-types';



function ToDoItem({todo,index, onChange}){
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
            marginBottom:'0.5rem'
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
        <button className="rm" onClick={}>
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