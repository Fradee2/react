import React,{useState} from "react"
import propTypes from "prop-types"
import App from "./App";




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
        <form onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add todo</button>
        </form>
    )
}

AddToDo.propTypes={
onCreate:propTypes.func.isRequired
}

export default AddToDo