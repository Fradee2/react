import React from "react"

function counter(prop){
    return(
    <div className="counter">
        <p className="counter_text">{prop.count} tasks active</p>
    </div>
    )
}

export default counter