import React,{useState} from "react"
import propTypes from "prop-types"




function AddToDo({onCreate}){
    const [value,setValue]=useState('')
    function submitHandler(event){
        event.preventDefault()
        if (value.trim()){
            onCreate(value)
            setValue('')
        }
    }
    return(
        <form className="form" onSubmit={submitHandler}>
            <button className="add_task" type="submit">▼</button>
            <input placeholder="What need to be done?" className="input" value={value} onChange={event => setValue(event.target.value)}/>
        </form>
    )
}

AddToDo.propTypes={
onCreate:propTypes.func.isRequired
}

export default AddToDo