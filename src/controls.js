import React from "react";



export default function Controls(){
    return(
        <div className="active_button">
            <p className="counter"> item left</p>
            <div className="filter_button">
                <button  className="filter_active button">All</button>
                <button  className=" button">Active</button>
                <button  className=" button">Completed</button>
            </div>
            <button  className="clear_completed button">Clear completed</button>
        </div>
    )
}