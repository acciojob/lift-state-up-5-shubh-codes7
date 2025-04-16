import React from "react";

const Child = ({sendDataToParent}) => {
    

    function handleSubmit(e){
        e.preventDefault()
        sendDataToParent(true)
        console.log("data sent from child")
    }

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" placeholder="Enter name"></input><br/><br/>
                <label>Password: </label>
                <input type="password" placeholder="Password"></input><br/><br/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Child