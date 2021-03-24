import React,{useContext} from "react";
import propTypes from 'prop-types';
import Context from "./context";



function ToDoItem({todo, onChange}){
    const {}=useContext(Context)
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
            marginTop:'10px',
            height:'40px',
            fontSize:'18px',
        },

    }


    return(
        <li style={style.li}>
            <span className={classes.join('')}>
        <input checked={todo.check} className="checkbox"  className={todo.classe} type="checkbox" onChange={()=>onChange(todo.id)}/>


                &nbsp;
        {todo.value}
        </span>


    </li>
    )
}
ToDoItem.propTypes={
    todos:propTypes.arrayOf(propTypes.object).isRequired,
    index: propTypes.number,
    onChange:propTypes.func.isRequired
}


export default ToDoItem